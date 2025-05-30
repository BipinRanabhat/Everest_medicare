export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  icon: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
}

export const servicesData: Service[] = [
  {
    id: "primary-care",
    title: "service_primary_care_title",
    shortDescription: "service_primary_care_short_description",
    longDescription: "service_primary_care_long_description",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: "stethoscope",
    benefits: [
      "service_primary_care_benefit_1",
      "service_primary_care_benefit_2",
      "service_primary_care_benefit_3",
      "service_primary_care_benefit_4",
      "service_primary_care_benefit_5"
    ],
    features: [
      {
        title: "service_primary_care_feature_1_title",
        description: "service_primary_care_feature_1_description"
      },
      {
        title: "service_primary_care_feature_2_title",
        description: "service_primary_care_feature_2_description"
      },
      {
        title: "service_primary_care_feature_3_title",
        description: "service_primary_care_feature_3_description"
      },
      {
        title: "service_primary_care_feature_4_title",
        description: "service_primary_care_feature_4_description"
      }
    ]
  },
  {
    id: "specialized-care",
    title: "service_specialized_care_title",
    shortDescription: "service_specialized_care_short_description",
    longDescription: "service_specialized_care_long_description",
    image: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: "heart-pulse",
    benefits: [
      "service_specialized_care_benefit_1",
      "service_specialized_care_benefit_2",
      "service_specialized_care_benefit_3",
      "service_specialized_care_benefit_4",
      "service_specialized_care_benefit_5"
    ],
    features: [
      {
        title: "service_specialized_care_feature_1_title",
        description: "service_specialized_care_feature_1_description"
      },
      {
        title: "service_specialized_care_feature_2_title",
        description: "service_specialized_care_feature_2_description"
      },
      {
        title: "service_specialized_care_feature_3_title",
        description: "service_specialized_care_feature_3_description"
      },
      {
        title: "service_specialized_care_feature_4_title",
        description: "service_specialized_care_feature_4_description"
      }
    ]
  },
  {
    id: "home-care",
    title: "service_home_care_title",
    shortDescription: "service_home_care_short_description",
    longDescription: "service_home_care_long_description",
    image: "https://images.pexels.com/photos/7551605/pexels-photo-7551605.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: "home",
    benefits: [
      "service_home_care_benefit_1",
      "service_home_care_benefit_2",
      "service_home_care_benefit_3",
      "service_home_care_benefit_4",
      "service_home_care_benefit_5"
    ],
    features: [
      {
        title: "service_home_care_feature_1_title",
        description: "service_home_care_feature_1_description"
      },
      {
        title: "service_home_care_feature_2_title",
        description: "service_home_care_feature_2_description"
      },
      {
        title: "service_home_care_feature_3_title",
        description: "service_home_care_feature_3_description"
      },
      {
        title: "service_home_care_feature_4_title",
        description: "service_home_care_feature_4_description"
      }
    ]
  },
  {
    id: "preventive-care",
    title: "service_preventive_care_title",
    shortDescription: "service_preventive_care_short_description",
    longDescription: "service_preventive_care_long_description",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: "shield",
    benefits: [
      "service_preventive_care_benefit_1",
      "service_preventive_care_benefit_2",
      "service_preventive_care_benefit_3",
      "service_preventive_care_benefit_4",
      "service_preventive_care_benefit_5"
    ],
    features: [
      {
        title: "service_preventive_care_feature_1_title",
        description: "service_preventive_care_feature_1_description"
      },
      {
        title: "service_preventive_care_feature_2_title",
        description: "service_preventive_care_feature_2_description"
      },
      {
        title: "service_preventive_care_feature_3_title",
        description: "service_preventive_care_feature_3_description"
      },
      {
        title: "service_preventive_care_feature_4_title",
        description: "service_preventive_care_feature_4_description"
      }
    ]
  },
  {
    id: "telemedicine",
    title: "service_telemedicine_title",
    shortDescription: "service_telemedicine_short_description",
    longDescription: "service_telemedicine_long_description",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: "monitor",
    benefits: [
      "service_telemedicine_benefit_1",
      "service_telemedicine_benefit_2",
      "service_telemedicine_benefit_3",
      "service_telemedicine_benefit_4",
      "service_telemedicine_benefit_5"
    ],
    features: [
      {
        title: "service_telemedicine_feature_1_title",
        description: "service_telemedicine_feature_1_description"
      },
      {
        title: "service_telemedicine_feature_2_title",
        description: "service_telemedicine_feature_2_description"
      },
      {
        title: "service_telemedicine_feature_3_title",
        description: "service_telemedicine_feature_3_description"
      },
      {
        title: "service_telemedicine_feature_4_title",
        description: "service_telemedicine_feature_4_description"
      }
    ]
  },
  {
    id: "rehabilitation",
    title: "service_rehabilitation_title",
    shortDescription: "service_rehabilitation_short_description",
    longDescription: "service_rehabilitation_long_description",
    image: "https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: "activity",
    benefits: [
      "service_rehabilitation_benefit_1",
      "service_rehabilitation_benefit_2",
      "service_rehabilitation_benefit_3",
      "service_rehabilitation_benefit_4",
      "service_rehabilitation_benefit_5"
    ],
    features: [
      {
        title: "service_rehabilitation_feature_1_title",
        description: "service_rehabilitation_feature_1_description"
      },
      {
        title: "service_rehabilitation_feature_2_title",
        description: "service_rehabilitation_feature_2_description"
      },
      {
        title: "service_rehabilitation_feature_3_title",
        description: "service_rehabilitation_feature_3_description"
      },
      {
        title: "service_rehabilitation_feature_4_title",
        description: "service_rehabilitation_feature_4_description"
      }
    ]
  }
];