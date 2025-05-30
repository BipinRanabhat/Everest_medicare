import React from "react";
import { MapPin, Phone, Mail, Clock, SendIcon } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Contact Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-neutral-900 opacity-60"
            aria-hidden="true"
          ></div>
          <img
            src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Healthcare reception"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Contact Us
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-neutral-100 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Get in touch with our team for inquiries, feedback, or to schedule
              an appointment
            </p>
          </div>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="#ffffff"
          >
            <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,42.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary-500 rounded-full mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">
                Our Location
              </h3>
              <p className="text-neutral-600">
                Lakeside
                <br />
                Pokhara, Nepal
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary-500 rounded-full mb-4">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">
                Phone
              </h3>
              <p className="text-neutral-600">
                <a
                  href="tel:+9779876543210"
                  className="hover:text-primary-500 transition-colors"
                >
                  +977 9709007721
                </a>
                <br />
                <a
                  href="tel:+9779876543211"
                  className="hover:text-primary-500 transition-colors"
                >
                  +977 9709007721
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary-500 rounded-full mb-4">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">
                Email
              </h3>
              <p className="text-neutral-600">
                <a
                  href="mailto:info@nepalcare.com"
                  className="hover:text-primary-500 transition-colors"
                >
                  EverestHealthcare@gmail.com
                </a>
                <br />
                <a
                  href="mailto:appointments@nepalcare.com"
                  className="hover:text-primary-500 transition-colors"
                >
                  appointments@everesthealthcare.com
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary-500 rounded-full mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">
                Hours
              </h3>
              <p className="text-neutral-600">
                Sun-Fri: 8:00 AM - 7:00 PM
                <br />
                Sat: 9:00 AM - 5:00 PM
                <br />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-neutral-800">
                Send Us a Message
              </h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Your Name <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Your Email <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Subject <span className="text-error-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Message <span className="text-error-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center py-3 px-6 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium transition-colors"
                >
                  Send Message <SendIcon size={18} className="ml-2" />
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-neutral-800">
                Our Location
              </h2>

              <div className="aspect-video bg-neutral-100 rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.066018567846!2d83.95676548440323!3d28.205306741231187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951b4c297003%3A0x154f5b2110323833!2sLakeside%20Rd%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1748537627314!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NepalCare Location"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800">
                  Directions
                </h3>
                <p className="text-neutral-600 mb-4">
                  Our main office is located in the heart of Pokhara, on
                  Lakeside. We're easily accessible by public transportation and
                  have parking available for our customers.
                </p>
                <div className="space-y-2 text-neutral-600">
                  <p>
                    <strong>From Pokhara International Airport:</strong> 20
                    minutes by taxi
                  </p>
                  <p>
                    <strong>From Chauthe:</strong> 30 minutes on Bus
                  </p>
                  {/* <p>
                    <strong>Landmarks:</strong> Near Hotel Annapurna, opposite to City Center Mall
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-neutral-800">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Find answers to common questions about our services and facilities
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">
                  What insurance plans do you accept?
                </h3>
                <p className="text-neutral-600">
                  We accept most major insurance plans, including National
                  Health Insurance, private insurances, and international
                  insurance providers. Please contact our reception with your
                  insurance details to verify coverage before your appointment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">
                  Do I need a referral to see a specialist?
                </h3>
                <p className="text-neutral-600">
                  While referrals are not always required, we recommend
                  consulting with a primary care physician first. This ensures
                  appropriate care coordination and helps determine if
                  specialist care is necessary. Some insurance plans may require
                  referrals for coverage.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">
                  How do I access my medical records?
                </h3>
                <p className="text-neutral-600">
                  You can request access to your medical records by submitting a
                  written request form available at our reception or through our
                  patient portal. We process such requests within 7 working
                  days, and records can be provided either electronically or as
                  printed copies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-neutral-800">
                  Do you offer emergency services?
                </h3>
                <p className="text-neutral-600">
                  Yes, we provide emergency care during our operating hours. For
                  after-hours emergencies, we have an on-call physician service.
                  Our emergency line (+977 9876543211) is available 24/7 for
                  medical advice and coordination with emergency services if
                  needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
