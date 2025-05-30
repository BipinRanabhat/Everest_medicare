import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, Clock, ChevronLeft, Share2, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorImage?: string;
  authorBio?: string;
  image: string;
  category: string;
  tags: string[];
  readTime?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "diabetes-management",
    title: "Effective Diabetes Management in Nepal",
    excerpt: "Learn about modern approaches to diabetes care and management strategies tailored for Nepali patients.",
    content: `
      <p>Diabetes has become increasingly prevalent in Nepal, affecting both urban and rural populations. According to recent studies, approximately 8.4% of adults in Nepal are living with diabetes, a figure that has doubled over the past decade.</p>
      
      <h2>Understanding Diabetes in the Nepali Context</h2>
      
      <p>The rise in diabetes cases in Nepal can be attributed to several factors, including urbanization, changing dietary patterns, and increasingly sedentary lifestyles. Traditional Nepali diets, which were high in whole grains, legumes, and vegetables, are being replaced by processed foods high in refined carbohydrates and sugars.</p>
      
      <p>Additionally, cultural factors and limited healthcare resources present unique challenges for diabetes management in Nepal. Many patients seek treatment only when complications arise, and access to specialized care can be limited, particularly in rural areas.</p>
      
      <h2>Effective Management Strategies</h2>
      
      <p>Despite these challenges, effective diabetes management is possible through a combination of medical intervention and lifestyle modifications. Here are key strategies that have proven effective in the Nepali context:</p>
      
      <h3>1. Dietary Adaptations</h3>
      
      <p>Modifying traditional Nepali diets to be diabetes-friendly while preserving cultural food preferences is essential. This includes:</p>
      <ul>
        <li>Replacing white rice with brown rice or other whole grains</li>
        <li>Increasing consumption of locally available vegetables</li>
        <li>Moderating portion sizes, particularly of high-carbohydrate foods</li>
        <li>Incorporating more protein sources like legumes, which are already staples in Nepali cuisine</li>
      </ul>
      
      <h3>2. Physical Activity</h3>
      
      <p>Regular physical activity is crucial for managing blood glucose levels. Effective approaches include:</p>
      <ul>
        <li>Walking, which requires no special equipment and can be incorporated into daily routines</li>
        <li>Traditional activities like yoga, which is culturally familiar and has been shown to improve glycemic control</li>
        <li>Community-based exercise programs that leverage social connections</li>
      </ul>
      
      <h3>3. Medication Adherence</h3>
      
      <p>Proper use of prescribed medications is essential for diabetes management. Strategies to improve adherence include:</p>
      <ul>
        <li>Simplified medication regimens when possible</li>
        <li>Use of pill organizers and reminder systems</li>
        <li>Regular follow-up with healthcare providers</li>
        <li>Education about the importance of consistent medication use, even when symptoms are not present</li>
      </ul>
      
      <h3>4. Blood Glucose Monitoring</h3>
      
      <p>Regular monitoring helps patients understand how different foods, activities, and medications affect their blood glucose levels. Approaches include:</p>
      <ul>
        <li>Teaching proper use of glucose meters</li>
        <li>Maintaining a glucose log to identify patterns</li>
        <li>Establishing affordable community-based monitoring programs</li>
      </ul>
      
      <h2>Overcoming Barriers to Care</h2>
      
      <p>Several innovative approaches have been developed to address the specific challenges of diabetes care in Nepal:</p>
      
      <h3>Mobile Health Technologies</h3>
      
      <p>With mobile phone penetration reaching even rural areas of Nepal, mobile health (mHealth) interventions have shown promise in:</p>
      <ul>
        <li>Providing medication reminders</li>
        <li>Delivering educational content</li>
        <li>Facilitating remote consultations with healthcare providers</li>
        <li>Tracking blood glucose data over time</li>
      </ul>
      
      <h3>Community Health Workers</h3>
      
      <p>Training community health workers to provide basic diabetes education and support has proven effective, particularly in areas with limited access to healthcare facilities. These workers can:</p>
      <ul>
        <li>Conduct basic health assessments</li>
        <li>Provide education on diet and lifestyle modifications</li>
        <li>Support medication adherence</li>
        <li>Refer patients with complications to appropriate healthcare facilities</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Effective diabetes management in Nepal requires approaches that are culturally appropriate, affordable, and accessible. By combining modern medical knowledge with an understanding of local contexts and resources, it is possible to significantly improve outcomes for people living with diabetes in Nepal.</p>
      
      <p>If you or a loved one has diabetes, we encourage you to consult with our healthcare team at NepalCare to develop a personalized management plan that fits your specific needs and circumstances.</p>
    `,
    date: "May 15, 2025",
    author: "Dr. Rajesh Poudel",
    authorImage: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300",
    authorBio: "Dr. Rajesh Poudel is an endocrinologist with over 15 years of experience in treating diabetes and other endocrine disorders. He has a special interest in developing culturally appropriate approaches to diabetes management in Nepal.",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Chronic Disease",
    tags: ["diabetes", "chronic condition", "lifestyle", "nutrition"],
    readTime: "8 min read"
  },
  {
    id: "monsoon-health-tips",
    title: "Staying Healthy During Monsoon Season",
    excerpt: "Essential tips to protect yourself and your family from common monsoon-related illnesses in Nepal.",
    content: `
      <p>The monsoon season in Nepal brings relief from the summer heat but also creates conditions favorable for various diseases. This article provides practical advice for staying healthy during this challenging season.</p>
      
      <h2>Understanding Monsoon Health Risks</h2>
      
      <p>The combination of high humidity, stagnant water, and flooded areas creates perfect breeding grounds for disease vectors like mosquitoes and promotes the growth of harmful bacteria and fungi. Additionally, contaminated water sources increase the risk of waterborne diseases.</p>
      
      <h2>Common Monsoon Illnesses in Nepal</h2>
      
      <h3>1. Waterborne Diseases</h3>
      <ul>
        <li><strong>Typhoid:</strong> Caused by Salmonella typhi bacteria, transmitted through contaminated food and water</li>
        <li><strong>Cholera:</strong> An acute diarrheal illness caused by Vibrio cholerae bacteria</li>
        <li><strong>Hepatitis A:</strong> A viral infection affecting the liver, spread through contaminated food and water</li>
        <li><strong>Leptospirosis:</strong> Bacterial infection spread through contact with water contaminated by animal urine</li>
      </ul>
      
      <h3>2. Vector-Borne Diseases</h3>
      <ul>
        <li><strong>Dengue Fever:</strong> Viral infection transmitted by Aedes mosquitoes</li>
        <li><strong>Malaria:</strong> Parasitic infection transmitted by Anopheles mosquitoes</li>
      </ul>
      
      <h3>3. Fungal Infections</h3>
      <ul>
        <li>Skin infections like ringworm, athlete's foot, and fungal nail infections</li>
      </ul>
      
      <h2>Preventive Measures</h2>
      
      <h3>Water Safety</h3>
      <p>Ensuring clean water is perhaps the most important preventive measure during monsoon season:</p>
      <ul>
        <li>Boil drinking water for at least one minute or use water purification tablets</li>
        <li>Store water in clean, covered containers</li>
        <li>Avoid consuming water or beverages from street vendors</li>
        <li>Avoid swimming in rivers, ponds, or flooded areas</li>
      </ul>
      
      <h3>Food Safety</h3>
      <p>Foodborne illnesses increase during monsoon due to higher humidity and temperatures:</p>
      <ul>
        <li>Wash fruits and vegetables thoroughly with clean water</li>
        <li>Cook food thoroughly and eat it while it's hot</li>
        <li>Avoid eating raw or undercooked foods, especially during monsoon</li>
        <li>Store leftover food properly and reheat thoroughly before consumption</li>
        <li>Be cautious with street food, as it may be prepared in unhygienic conditions</li>
      </ul>
      
      <h3>Mosquito Control</h3>
      <p>Preventing mosquito bites is essential for avoiding dengue, malaria, and other vector-borne diseases:</p>
      <ul>
        <li>Use mosquito nets while sleeping, especially for children</li>
        <li>Apply mosquito repellent on exposed skin, particularly during dawn and dusk</li>
        <li>Wear long-sleeved clothing when possible</li>
        <li>Eliminate standing water around your home (flowerpots, buckets, old tires)</li>
        <li>Use window screens or keep windows closed during peak mosquito activity</li>
      </ul>
      
      <h3>Personal Hygiene</h3>
      <p>Maintaining good hygiene practices is particularly important during monsoon:</p>
      <ul>
        <li>Wash hands frequently with soap and water, especially before eating and after using the toilet</li>
        <li>Keep feet clean and dry to prevent fungal infections</li>
        <li>Change wet clothes promptly to avoid skin infections</li>
        <li>Avoid walking barefoot, especially in waterlogged areas</li>
      </ul>
      
      <h2>Home Environment</h2>
      <p>Creating a healthy home environment can significantly reduce monsoon-related health risks:</p>
      <ul>
        <li>Ensure proper drainage around your home</li>
        <li>Fix leaky roofs and walls to prevent dampness</li>
        <li>Use dehumidifiers in particularly damp areas</li>
        <li>Keep indoor areas well-ventilated</li>
        <li>Regularly clean and disinfect bathrooms and kitchens</li>
      </ul>
      
      <h2>When to Seek Medical Help</h2>
      
      <p>Despite preventive measures, illnesses can still occur. Knowing when to seek medical attention is crucial:</p>
      
      <h3>Symptoms That Require Immediate Medical Attention:</h3>
      <ul>
        <li>High fever (above 101°F or 38.3°C)</li>
        <li>Severe headache, especially with fever</li>
        <li>Persistent vomiting</li>
        <li>Bloody diarrhea or severe diarrhea lasting more than 2 days</li>
        <li>Rash with fever</li>
        <li>Difficulty breathing</li>
        <li>Unusual bleeding (nose, gums, vomiting blood)</li>
        <li>Severe abdominal pain</li>
        <li>Signs of dehydration (extreme thirst, dry mouth, little or no urination, severe weakness)</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>While monsoon season in Nepal presents various health challenges, most monsoon-related illnesses are preventable with proper precautions. By following the guidelines outlined in this article, you can significantly reduce your risk and enjoy the beauty of the season without compromising your health.</p>
      
      <p>At NepalCare, we are committed to helping you stay healthy year-round. If you experience any concerning symptoms, please don't hesitate to contact our healthcare team for prompt assistance.</p>
    `,
    date: "April 28, 2025",
    author: "Dr. Sunita Sharma",
    authorImage: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=300",
    authorBio: "Dr. Sunita Sharma is a public health specialist with expertise in infectious diseases and preventive medicine. She has worked extensively in community health programs throughout Nepal.",
    image: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Preventive Care",
    tags: ["monsoon", "seasonal health", "infection prevention", "water safety"],
    readTime: "10 min read"
  },
  {
    id: "womens-health-nepal",
    title: "Women's Health: Important Screenings at Every Age",
    excerpt: "A comprehensive guide to essential health screenings and check-ups for women in different life stages.",
    content: "Regular health screenings are vital for early detection and prevention of diseases. This guide outlines the recommended screenings for women at different ages...",
    date: "April 10, 2025",
    author: "Dr. Manisha Thapa",
    image: "https://images.pexels.com/photos/7089396/pexels-photo-7089396.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Women's Health",
    tags: ["women's health", "screenings", "preventive care"],
    readTime: "7 min read"
  }
];

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find(p => p.id === postId);
  
  // Get related posts (same category but different post)
  const relatedPosts = post 
    ? blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2) 
    : [];
  
  // Handle post not found
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4 text-neutral-800">Article Not Found</h1>
          <p className="text-neutral-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center py-2 px-4 rounded-md bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {/* Blog Post Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-neutral-900 opacity-70"
            aria-hidden="true"
          ></div>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-neutral-200 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft size={16} className="mr-1" /> Back to Blog
            </Link>
            
            <div className="inline-block px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full mb-4">
              {post.category}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-neutral-200 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              
              {post.readTime && (
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,42.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Blog Post Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <article className="bg-white p-8 rounded-lg shadow-md">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-neutral-800 prose-p:text-neutral-600 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag size={18} className="text-neutral-500" />
                    {post.tags.map(tag => (
                      <Link 
                        key={tag} 
                        to={`/blog?tag=${tag}`}
                        className="px-3 py-1 bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 rounded-full text-sm text-neutral-700 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Share */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="font-medium text-neutral-800 flex items-center">
                      <Share2 size={18} className="mr-2" /> Share this article:
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href="#" 
                        className="p-2 bg-neutral-100 hover:bg-[#1877F2] hover:text-white rounded-full transition-colors"
                        aria-label="Share on Facebook"
                      >
                        <Facebook size={18} />
                      </a>
                      <a 
                        href="#" 
                        className="p-2 bg-neutral-100 hover:bg-[#1DA1F2] hover:text-white rounded-full transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <Twitter size={18} />
                      </a>
                      <a 
                        href="#" 
                        className="p-2 bg-neutral-100 hover:bg-[#0A66C2] hover:text-white rounded-full transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Author */}
                {post.authorImage && post.authorBio && (
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <img 
                        src={post.authorImage} 
                        alt={post.author} 
                        className="w-20 h-20 object-cover rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-neutral-800">{post.author}</h3>
                        <p className="text-neutral-600 mb-3">{post.authorBio}</p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
              
              {/* Comments (Placeholder) */}
              <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-neutral-800 flex items-center">
                  <MessageCircle size={20} className="mr-2" /> Comments (3)
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <img 
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300" 
                      alt="Commenter" 
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-semibold text-neutral-800">Rohan Gurung</h4>
                        <span className="text-neutral-500 text-sm">2 days ago</span>
                      </div>
                      <p className="text-neutral-600 mb-2">
                        This article was very informative. I've been struggling with managing my father's diabetes, and the cultural adaptations mentioned here are very practical.
                      </p>
                      <button className="text-primary-500 hover:text-primary-600 text-sm font-medium">Reply</button>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <img 
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" 
                      alt="Commenter" 
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-semibold text-neutral-800">Asha Tamang</h4>
                        <span className="text-neutral-500 text-sm">3 days ago</span>
                      </div>
                      <p className="text-neutral-600 mb-2">
                        Thank you for addressing the specific challenges we face in Nepal. The suggestions about adapting our traditional diet are particularly helpful.
                      </p>
                      <button className="text-primary-500 hover:text-primary-600 text-sm font-medium">Reply</button>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" 
                      alt="Commenter" 
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-semibold text-neutral-800">Bijay Shrestha</h4>
                        <span className="text-neutral-500 text-sm">5 days ago</span>
                      </div>
                      <p className="text-neutral-600 mb-2">
                        I'd be interested in learning more about the community health worker programs mentioned. Is NepalCare involved in any such initiatives?
                      </p>
                      <button className="text-primary-500 hover:text-primary-600 text-sm font-medium">Reply</button>
                    </div>
                  </div>
                </div>
                
                {/* Comment Form */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h4 className="font-semibold text-neutral-800 mb-4">Leave a Comment</h4>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <textarea 
                      placeholder="Your Comment" 
                      rows={4}
                      className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                    <button 
                      type="submit"
                      className="py-2 px-6 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium transition-colors"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full p-3 pl-10 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                </div>
              </div>
              
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-neutral-800">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-3">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                        />
                        <div>
                          <Link 
                            to={`/blog/${relatedPost.id}`}
                            className="font-medium text-neutral-800 hover:text-primary-600 transition-colors line-clamp-2"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-neutral-500 text-sm mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Categories</h3>
                <ul className="space-y-2">
                  {Array.from(new Set(blogPosts.map(p => p.category))).map((category) => (
                    <li key={category}>
                      <Link
                        to={`/blog?category=${category}`}
                        className="block py-2 px-3 rounded-md text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(p => p.tags))).slice(0, 12).map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${tag}`}
                      className="px-3 py-1 bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 rounded-full text-sm text-neutral-700 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-neutral-800">Need Medical Advice?</h3>
                <p className="text-neutral-600 mb-4">
                  Consult with our healthcare professionals to address your health concerns.
                </p>
                <Link 
                  to="/booking" 
                  className="block w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white text-center rounded-md font-medium transition-colors"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;