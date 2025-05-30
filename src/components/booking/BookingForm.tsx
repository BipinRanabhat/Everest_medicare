import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { format, addDays, isWeekend, parseISO } from 'date-fns';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  doctor: string;
  date: string;
  time: string;
  message: string;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  availableServices: string[];
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Ankit Shrestha",
    specialty: "Internal Medicine",
    availableServices: ["primary-care", "preventive-care"]
  },
  {
    id: 2,
    name: "Dr. Priya Tamang",
    specialty: "Cardiology",
    availableServices: ["specialized-care", "preventive-care"]
  },
  {
    id: 3,
    name: "Dr. Ramesh Poudel",
    specialty: "Geriatric Medicine",
    availableServices: ["home-care", "primary-care"]
  },
  {
    id: 4,
    name: "Dr. Sita Maharjan",
    specialty: "Preventive Medicine",
    availableServices: ["preventive-care", "primary-care"]
  }
];

const serviceTypes = [
  { id: "primary-care", name: "Primary Care" },
  { id: "specialized-care", name: "Specialized Care" },
  { id: "home-care", name: "Home Care" },
  { id: "preventive-care", name: "Preventive Care" },
  { id: "telemedicine", name: "Telemedicine" },
  { id: "rehabilitation", name: "Rehabilitation" }
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM", 
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", 
  "04:00 PM", "04:30 PM"
];

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [availableDoctors, setAvailableDoctors] = useState<Doctor[]>(doctors);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingData, setBookingData] = useState<BookingFormData | null>(null);
  
  const { register, handleSubmit, control, watch, formState: { errors, isValid }, setValue } = useForm<BookingFormData>({
    mode: "onChange",
    defaultValues: {
      serviceType: "",
      doctor: "",
      date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
      time: ""
    }
  });

  const watchServiceType = watch("serviceType");
  
  // Filter doctors based on selected service
  React.useEffect(() => {
    if (watchServiceType) {
      const filtered = doctors.filter(doctor => 
        doctor.availableServices.includes(watchServiceType)
      );
      setAvailableDoctors(filtered);
      
      // Reset doctor selection if current selection is not available for this service
      const currentDoctor = watch("doctor");
      const doctorStillAvailable = filtered.some(d => d.name === currentDoctor);
      if (currentDoctor && !doctorStillAvailable) {
        setValue("doctor", "");
      }
    } else {
      setAvailableDoctors(doctors);
    }
  }, [watchServiceType, setValue, watch]);

  const onSubmit = (data: BookingFormData) => {
    console.log('Form submitted:', data);
    setBookingData(data);
    setBookingComplete(true);
  };

  const goToNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const getDayName = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, 'EEEE');
  };

  const getFormattedDate = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, 'MMMM d, yyyy');
  };

  // Generate available dates (next 14 days, excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    let currentDate = new Date();
    let daysAdded = 0;

    while (daysAdded < 14) {
      currentDate = addDays(currentDate, 1);
      if (!isWeekend(currentDate)) {
        dates.push({
          value: format(currentDate, 'yyyy-MM-dd'),
          label: format(currentDate, 'EEE, MMM d')
        });
        daysAdded++;
      }
    }

    return dates;
  };

  const availableDates = generateAvailableDates();

  // If booking is complete, show confirmation
  if (bookingComplete && bookingData) {
    return (
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-success-500 text-white rounded-full mb-4">
            <Check size={32} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">Booking Confirmed!</h2>
          <p className="text-neutral-600">
            Your appointment has been scheduled successfully. A confirmation email has been sent to your inbox.
          </p>
        </div>

        <div className="bg-neutral-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-neutral-800">Appointment Details</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="text-primary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-neutral-800">Date & Time</p>
                <p className="text-neutral-600">
                  {getFormattedDate(bookingData.date)} ({getDayName(bookingData.date)})
                  <br />
                  {bookingData.time}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <User className="text-primary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-neutral-800">Doctor</p>
                <p className="text-neutral-600">{bookingData.doctor}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="text-primary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-neutral-800">Service</p>
                <p className="text-neutral-600">
                  {serviceTypes.find(s => s.id === bookingData.serviceType)?.name}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-neutral-800">Patient Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="text-primary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-neutral-800">Name</p>
                <p className="text-neutral-600">{bookingData.firstName} {bookingData.lastName}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Phone className="text-primary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-neutral-800">Phone</p>
                <p className="text-neutral-600">{bookingData.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mail className="text-primary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-neutral-800">Email</p>
                <p className="text-neutral-600">{bookingData.email}</p>
              </div>
            </div>
            
            {bookingData.message && (
              <div className="flex items-start gap-3">
                <MessageSquare className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-neutral-800">Additional Information</p>
                  <p className="text-neutral-600">{bookingData.message}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-neutral-600 mb-4">
            Need to make changes to your appointment?
          </p>
          <button 
            onClick={() => {
              setBookingComplete(false);
              setStep(1);
            }}
            className="py-2 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-md font-medium transition-colors"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex flex-col items-center ${step >= 1 ? 'text-primary-500' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              step >= 1 ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-600'
            }`}>
              1
            </div>
            <span className="text-xs font-medium">Service</span>
          </div>
          
          <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-primary-500' : 'bg-neutral-200'}`}></div>
          
          <div className={`flex flex-col items-center ${step >= 2 ? 'text-primary-500' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              step >= 2 ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-600'
            }`}>
              2
            </div>
            <span className="text-xs font-medium">Date & Time</span>
          </div>
          
          <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-primary-500' : 'bg-neutral-200'}`}></div>
          
          <div className={`flex flex-col items-center ${step >= 3 ? 'text-primary-500' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              step >= 3 ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-600'
            }`}>
              3
            </div>
            <span className="text-xs font-medium">Details</span>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Select Service & Doctor</h2>
            
            <div className="mb-6">
              <label htmlFor="serviceType" className="block text-sm font-medium text-neutral-700 mb-2">
                Service Type <span className="text-error-500">*</span>
              </label>
              <select
                id="serviceType"
                className={`w-full p-3 border ${errors.serviceType ? 'border-error-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white`}
                {...register("serviceType", { required: "Please select a service type" })}
              >
                <option value="">Select a service</option>
                {serviceTypes.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
              {errors.serviceType && (
                <p className="mt-1 text-sm text-error-500">{errors.serviceType.message}</p>
              )}
            </div>
            
            <div className="mb-8">
              <label htmlFor="doctor" className="block text-sm font-medium text-neutral-700 mb-2">
                Doctor <span className="text-error-500">*</span>
              </label>
              <select
                id="doctor"
                className={`w-full p-3 border ${errors.doctor ? 'border-error-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white`}
                {...register("doctor", { required: "Please select a doctor" })}
                disabled={!watchServiceType}
              >
                <option value="">
                  {watchServiceType 
                    ? availableDoctors.length > 0 
                      ? "Select a doctor" 
                      : "No doctors available for this service"
                    : "Please select a service first"}
                </option>
                {availableDoctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.name}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
              {errors.doctor && (
                <p className="mt-1 text-sm text-error-500">{errors.doctor.message}</p>
              )}
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={goToNextStep}
                disabled={!watchServiceType || !watch("doctor")}
                className={`flex items-center py-2 px-6 rounded-md font-medium transition-colors ${
                  watchServiceType && watch("doctor")
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : 'bg-neutral-300 cursor-not-allowed text-neutral-500'
                }`}
              >
                Next <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        )}
        
        {/* Step 2: Date & Time Selection */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Select Date & Time</h2>
            
            <div className="mb-6">
              <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-2">
                Appointment Date <span className="text-error-500">*</span>
              </label>
              <select
                id="date"
                className={`w-full p-3 border ${errors.date ? 'border-error-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white`}
                {...register("date", { required: "Please select a date" })}
              >
                {availableDates.map((date) => (
                  <option key={date.value} value={date.value}>
                    {date.label}
                  </option>
                ))}
              </select>
              {errors.date && (
                <p className="mt-1 text-sm text-error-500">{errors.date.message}</p>
              )}
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Available Time Slots <span className="text-error-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <div key={time} className="flex items-center">
                    <input
                      type="radio"
                      id={`time-${time}`}
                      value={time}
                      className="sr-only peer"
                      {...register("time", { required: "Please select a time slot" })}
                    />
                    <label
                      htmlFor={`time-${time}`}
                      className="w-full p-2 border border-neutral-300 rounded-md text-center text-sm cursor-pointer hover:bg-primary-50 transition-colors peer-checked:bg-primary-500 peer-checked:text-white peer-checked:border-primary-500"
                    >
                      {time}
                    </label>
                  </div>
                ))}
              </div>
              {errors.time && (
                <p className="mt-1 text-sm text-error-500">{errors.time.message}</p>
              )}
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={goToPreviousStep}
                className="flex items-center py-2 px-6 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-md font-medium transition-colors"
              >
                <ChevronLeft size={16} className="mr-1" /> Back
              </button>
              
              <button
                type="button"
                onClick={goToNextStep}
                disabled={!watch("date") || !watch("time")}
                className={`flex items-center py-2 px-6 rounded-md font-medium transition-colors ${
                  watch("date") && watch("time")
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : 'bg-neutral-300 cursor-not-allowed text-neutral-500'
                }`}
              >
                Next <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Personal Details */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Your Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                  First Name <span className="text-error-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className={`w-full p-3 border ${errors.firstName ? 'border-error-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-error-500">{errors.firstName.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                  Last Name <span className="text-error-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className={`w-full p-3 border ${errors.lastName ? 'border-error-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-error-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email <span className="text-error-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-3 border ${errors.email ? 'border-error-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone Number <span className="text-error-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className={`w-full p-3 border ${errors.phone ? 'border-error-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register("phone", { 
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+\-\s()]{7,15}$/,
                      message: "Please enter a valid phone number"
                    }
                  })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-error-500">{errors.phone.message}</p>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Please provide any additional information about your condition or specific concerns..."
                {...register("message")}
              ></textarea>
            </div>
            
            <div className="bg-neutral-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium mb-3 text-neutral-800">Appointment Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Service:</span>
                  <span className="font-medium">
                    {serviceTypes.find(s => s.id === watch("serviceType"))?.name || "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Doctor:</span>
                  <span className="font-medium">{watch("doctor") || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Date:</span>
                  <span className="font-medium">
                    {watch("date") ? getFormattedDate(watch("date")) : "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Time:</span>
                  <span className="font-medium">{watch("time") || "-"}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={goToPreviousStep}
                className="flex items-center py-2 px-6 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-md font-medium transition-colors"
              >
                <ChevronLeft size={16} className="mr-1" /> Back
              </button>
              
              <button
                type="submit"
                className="flex items-center py-2 px-6 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium transition-colors"
              >
                Confirm Booking <Check size={16} className="ml-1" />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;