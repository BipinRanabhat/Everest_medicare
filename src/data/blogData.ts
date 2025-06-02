export interface BlogPost {
  id: string;
  titleKey: string;
  excerptKey: string;
  contentKey: string; // Key for the full HTML content
  date: string; // Dates are not translated for now
  authorKey: string;
  authorBioKey: string; // New key for author bio
  authorImage?: string;
  image: string;
  categoryKey: string; // This will be a key like 'blog_category_chronic_disease'
  tagKeys: string[]; // Array of keys like 'blog_post_dm_tag_diabetes'
  readTimeKey: string; // New key for read time
}

export const blogPostsData: BlogPost[] = [
  {
    id: "diabetes-management",
    titleKey: "blog_post_dm_title",
    excerptKey: "blog_post_dm_excerpt",
    contentKey: "blog_post_dm_content", // Now points to HTML content key
    date: "May 15, 2025",
    authorKey: "blog_post_dm_author",
    authorBioKey: "blog_post_dm_author_bio",
    authorImage: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "blog_category_chronic_disease",
    tagKeys: ["blog_post_dm_tag_diabetes", "blog_post_dm_tag_chronic", "blog_post_dm_tag_lifestyle", "blog_post_dm_tag_nutrition"],
    readTimeKey: "blog_post_dm_read_time"
  },
  {
    id: "monsoon-health-tips",
    titleKey: "blog_post_monsoon_title",
    excerptKey: "blog_post_monsoon_excerpt",
    contentKey: "blog_post_monsoon_content",
    date: "April 28, 2025",
    authorKey: "blog_post_monsoon_author",
    authorBioKey: "blog_post_monsoon_author_bio",
    authorImage: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "blog_category_preventive_care",
    tagKeys: ["blog_post_monsoon_tag_monsoon", "blog_post_monsoon_tag_seasonal_health", "blog_post_monsoon_tag_infection_prevention", "blog_post_monsoon_tag_water_safety"],
    readTimeKey: "blog_post_monsoon_read_time"
  },
  {
    id: "womens-health-nepal",
    titleKey: "blog_post_womens_title",
    excerptKey: "blog_post_womens_excerpt",
    contentKey: "blog_post_womens_content",
    date: "April 10, 2025",
    authorKey: "blog_post_womens_author",
    authorBioKey: "blog_post_womens_author_bio",
    authorImage: "https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=300", // Placeholder image
    image: "https://images.pexels.com/photos/7089396/pexels-photo-7089396.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "blog_category_womens_health",
    tagKeys: ["blog_post_womens_tag_womens_health", "blog_post_womens_tag_screenings", "blog_post_womens_tag_preventive_care"],
    readTimeKey: "blog_post_womens_read_time"
  },
  {
    id: "mental-health-awareness",
    titleKey: "blog_post_mental_title",
    excerptKey: "blog_post_mental_excerpt",
    contentKey: "blog_post_mental_content",
    date: "March 22, 2025",
    authorKey: "blog_post_mental_author",
    authorBioKey: "blog_post_mental_author_bio",
    authorImage: "https://images.pexels.com/photos/5325728/pexels-photo-5325728.jpeg?auto=compress&cs=tinysrgb&w=300", // Placeholder image
    image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "blog_category_mental_health",
    tagKeys: ["blog_post_mental_tag_mental_health", "blog_post_mental_tag_stigma", "blog_post_mental_tag_awareness", "blog_post_mental_tag_counseling"],
    readTimeKey: "blog_post_mental_read_time"
  },
  {
    id: "child-nutrition-guide",
    titleKey: "blog_post_child_nutrition_title",
    excerptKey: "blog_post_child_nutrition_excerpt",
    contentKey: "blog_post_child_nutrition_content",
    date: "March 5, 2025",
    authorKey: "blog_post_child_nutrition_author",
    authorBioKey: "blog_post_child_nutrition_author_bio",
    authorImage: "https://images.pexels.com/photos/5794043/pexels-photo-5794043.jpeg?auto=compress&cs=tinysrgb&w=300", // Placeholder image
    image: "https://images.pexels.com/photos/5926380/pexels-photo-5926380.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "blog_category_pediatric_care",
    tagKeys: ["blog_post_child_nutrition_tag_children", "blog_post_child_nutrition_tag_nutrition", "blog_post_child_nutrition_tag_growth", "blog_post_child_nutrition_tag_healthy_eating"],
    readTimeKey: "blog_post_child_nutrition_read_time"
  },
  {
    id: "heart-health-nepal",
    titleKey: "blog_post_heart_health_title",
    excerptKey: "blog_post_heart_health_excerpt",
    contentKey: "blog_post_heart_health_content",
    date: "February 18, 2025",
    authorKey: "blog_post_heart_health_author",
    authorBioKey: "blog_post_heart_health_author_bio",
    authorImage: "https://images.pexels.com/photos/5214996/pexels-photo-5214996.jpeg?auto=compress&cs=tinysrgb&w=300", // Placeholder image
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "blog_category_cardiology",
    tagKeys: ["blog_post_heart_health_tag_heart_health", "blog_post_heart_health_tag_cardiovascular", "blog_post_heart_health_tag_prevention", "blog_post_heart_health_tag_lifestyle"],
    readTimeKey: "blog_post_heart_health_read_time"
  }
];

export const blogCategories = [
  "blog_category_all",
  "blog_category_chronic_disease",
  "blog_category_preventive_care",
  "blog_category_womens_health",
  "blog_category_mental_health",
  "blog_category_pediatric_care",
  "blog_category_cardiology"
]; 