import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { blogPostsData, blogCategories, BlogPost } from '../data/blogData'; // Import from new data file

const BlogPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("blog_category_all");

  const filteredPosts = blogPostsData.filter(post => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const matchesSearch = t(post.titleKey).toLowerCase().includes(lowerSearchTerm) || 
                         t(post.excerptKey).toLowerCase().includes(lowerSearchTerm) ||
                         post.tagKeys.some(tagKey => t(tagKey).toLowerCase().includes(lowerSearchTerm));
    
    const matchesCategory = selectedCategoryKey === "blog_category_all" || post.categoryKey === selectedCategoryKey;
    
    return matchesSearch && matchesCategory;
  });

  // Get a list of unique recent post IDs to display in sidebar (e.g., 3 most recent)
  const recentPostIds = blogPostsData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date descending
    .slice(0, 3) // Take the first 3
    .map(post => post.id);
  
  // Get a flat list of all unique tag keys for the sidebar
  const allTagKeys = Array.from(new Set(blogPostsData.flatMap(post => post.tagKeys))).slice(0, 10); // Limit to 10 tags for sidebar

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
            alt={t('blog_page_hero_image_alt')} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              {t('blog_page_hero_title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('blog_page_hero_subtitle')}
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
                      placeholder={t('blog_page_search_placeholder')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full p-3 pl-10 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                  </div>
                  
                  <select
                    value={selectedCategoryKey}
                    onChange={(e) => setSelectedCategoryKey(e.target.value)}
                    className="p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                  >
                    {blogCategories.map((categoryKey) => (
                      <option key={categoryKey} value={categoryKey}>{t(categoryKey)}</option>
                    ))}
                  </select>
                </div>
                
                {searchTerm || selectedCategoryKey !== "blog_category_all" ? (
                  <p className="text-neutral-600">
                    {t('blog_page_showing_results_count', { count: filteredPosts.length })}
                    {searchTerm && t('blog_page_showing_results_for_term', { term: searchTerm })}
                    {selectedCategoryKey !== "blog_category_all" && t('blog_page_showing_results_in_category', { category: t(selectedCategoryKey) })}
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
                          alt={t(post.titleKey)} 
                          className="w-full h-52 object-cover"
                        />
                      </Link>
                      <div className="p-6">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-50 text-primary-600 rounded-full">
                            {t(post.categoryKey)}
                          </span>
                        </div>
                        <Link to={`/blog/${post.id}`}>
                          <h3 className="text-xl font-semibold mb-3 text-neutral-800 hover:text-primary-600 transition-colors">
                            {t(post.titleKey)}
                          </h3>
                        </Link>
                        <p className="text-neutral-600 mb-4">{t(post.excerptKey)}</p>
                        <div className="flex items-center text-neutral-500 text-sm">
                          <div className="flex items-center mr-4">
                            <Calendar size={14} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            <span>{t(post.authorKey)}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="bg-neutral-50 p-8 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">{t('blog_page_no_articles_found_title')}</h3>
                  <p className="text-neutral-600 mb-4">
                    {t('blog_page_no_articles_found_message')}
                  </p>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategoryKey("blog_category_all");
                    }}
                    className="py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium transition-colors"
                  >
                    {t('view_all_articles')} 
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <aside className="lg:w-1/4">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">{t('blog_page_sidebar_categories_title')}</h3>
                <ul className="space-y-2">
                  {blogCategories.filter(catKey => catKey !== 'blog_category_all').map((categoryKey) => (
                    <li key={categoryKey}>
                      <button 
                        onClick={() => setSelectedCategoryKey(categoryKey)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategoryKey === categoryKey ? 'bg-primary-50 text-primary-600 font-medium' : 'hover:bg-neutral-50 text-neutral-700'}`}
                      >
                        {t(categoryKey)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">{t('blog_page_sidebar_recent_posts_title')}</h3>
                <ul className="space-y-4">
                  {blogPostsData.filter(p => recentPostIds.includes(p.id)).map(post => (
                    <li key={post.id} className="flex items-start gap-3">
                        <img src={post.image} alt={t(post.titleKey)} className="w-16 h-16 object-cover rounded-md flex-shrink-0"/>
                        <div>
                            <Link to={`/blog/${post.id}`} className="text-neutral-800 hover:text-primary-600 font-medium text-sm leading-snug line-clamp-2">
                                {t(post.titleKey)}
                            </Link>
                            <p className="text-xs text-neutral-500 mt-1">{post.date}</p>
                        </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">{t('blog_page_sidebar_tags_title')}</h3>
                <div className="flex flex-wrap gap-2">
                  {allTagKeys.map(tagKey => (
                    <button 
                      key={tagKey} 
                      onClick={() => setSearchTerm(t(tagKey))} 
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {t(tagKey)}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;