import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "diabetes-management",
    title: "Effective Diabetes Management in Nepal",
    excerpt: "Learn about modern approaches to diabetes care and management strategies tailored for Nepali patients.",
    content: "Diabetes has become increasingly prevalent in Nepal, affecting both urban and rural populations. This comprehensive guide explores effective management strategies...",
    date: "May 15, 2025",
    author: "Dr. Rajesh Poudel",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Chronic Disease",
    tags: ["diabetes", "chronic condition", "lifestyle", "nutrition"]
  },
  {
    id: "monsoon-health-tips",
    title: "Staying Healthy During Monsoon Season",
    excerpt: "Essential tips to protect yourself and your family from common monsoon-related illnesses in Nepal.",
    content: "The monsoon season in Nepal brings relief from the summer heat but also creates conditions favorable for various diseases. This article provides practical advice...",
    date: "April 28, 2025",
    author: "Dr. Sunita Sharma",
    image: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Preventive Care",
    tags: ["monsoon", "seasonal health", "infection prevention", "water safety"]
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
    tags: ["women's health", "screenings", "preventive care"]
  },
  {
    id: "mental-health-awareness",
    title: "Mental Health Awareness in Nepal: Breaking the Stigma",
    excerpt: "Exploring the current state of mental health care in Nepal and efforts to reduce stigma and improve access to services.",
    content: "Mental health issues affect a significant portion of Nepal's population, yet stigma and limited resources create barriers to care. This article discusses...",
    date: "March 22, 2025",
    author: "Dr. Binod Karki",
    image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Mental Health",
    tags: ["mental health", "stigma", "awareness", "counseling"]
  },
  {
    id: "child-nutrition-guide",
    title: "Nutrition Guide for Growing Children in Nepal",
    excerpt: "Expert advice on ensuring optimal nutrition for children using locally available foods and addressing common deficiencies.",
    content: "Proper nutrition is crucial for children's growth and development. This guide provides practical advice for parents on creating balanced meals using local ingredients...",
    date: "March 5, 2025",
    author: "Dr. Priya Tamang",
    image: "https://images.pexels.com/photos/5926380/pexels-photo-5926380.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Pediatric Care",
    tags: ["children", "nutrition", "growth", "healthy eating"]
  },
  {
    id: "heart-health-nepal",
    title: "Heart Health in Nepal: Risk Factors and Prevention",
    excerpt: "Understanding cardiovascular disease risks specific to the Nepali population and effective prevention strategies.",
    content: "Cardiovascular diseases are a growing concern in Nepal. This article examines the specific risk factors affecting the Nepali population and provides evidence-based prevention strategies...",
    date: "February 18, 2025",
    author: "Dr. Ramesh Poudel",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Cardiology",
    tags: ["heart health", "cardiovascular", "prevention", "lifestyle"]
  }
];

const categories = [
  "All Categories",
  "Chronic Disease",
  "Preventive Care",
  "Women's Health",
  "Mental Health",
  "Pediatric Care",
  "Cardiology"
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Blog Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-neutral-900 opacity-60"
            aria-hidden="true"
          ></div>
          <img 
            src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Medical research" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Health Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Expert health advice, research updates, and medical information from our team of professionals
            </p>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,42.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Search and Filters */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full p-3 pl-10 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                  </div>
                  
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                {searchTerm || selectedCategory !== "All Categories" ? (
                  <p className="text-neutral-600">
                    Showing {filteredPosts.length} results
                    {searchTerm && <span> for "{searchTerm}"</span>}
                    {selectedCategory !== "All Categories" && <span> in {selectedCategory}</span>}
                  </p>
                ) : null}
              </div>
              
              {/* Blog Posts */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <Link to={`/blog/${post.id}`} className="block">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-52 object-cover"
                        />
                      </Link>
                      <div className="p-6">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-50 text-primary-600 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <Link to={`/blog/${post.id}`}>
                          <h3 className="text-xl font-semibold mb-3 text-neutral-800 hover:text-primary-600 transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-neutral-500 text-sm">
                          <div className="flex items-center mr-4">
                            <Calendar size={14} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="bg-neutral-50 p-8 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">No articles found</h3>
                  <p className="text-neutral-600 mb-4">
                    We couldn't find any articles matching your search criteria. Please try different keywords or browse all categories.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All Categories");
                    }}
                    className="py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium transition-colors"
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Categories</h3>
                <ul className="space-y-2">
                  {categories.filter(c => c !== "All Categories").map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                          selectedCategory === category 
                            ? 'bg-primary-50 text-primary-600 font-medium' 
                            : 'text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Popular Articles</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                      />
                      <div>
                        <Link 
                          to={`/blog/${post.id}`}
                          className="font-medium text-neutral-800 hover:text-primary-600 transition-colors line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <p className="text-neutral-500 text-sm mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).slice(0, 12).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1 bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 rounded-full text-sm text-neutral-700 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-primary-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-3 text-neutral-800">Subscribe to Our Newsletter</h3>
                <p className="text-neutral-600 mb-4">
                  Stay updated with the latest health tips and medical advancements.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button 
                    type="submit"
                    className="w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-neutral-500 text-xs mt-3">
                  By subscribing, you agree to our privacy policy. We never share your email with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;