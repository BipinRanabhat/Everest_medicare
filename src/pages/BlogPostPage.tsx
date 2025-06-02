import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, Clock, ChevronLeft, Share2, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { blogPostsData, BlogPost } from '../data/blogData'; // Updated import
import CTASection from '../components/home/CTASection'; // Assuming CTA is desired on this page too

const BlogPostPage: React.FC = () => {
  const { t } = useTranslation();
  const { postId } = useParams<{ postId: string }>();
  const post = blogPostsData.find(p => p.id === postId);
  
  // Get related posts (same category but different post)
  const relatedPosts = post 
    ? blogPostsData.filter(p => p.categoryKey === post.categoryKey && p.id !== post.id).slice(0, 2) 
    : [];
  
  // Handle post not found
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4 text-neutral-800">{t('blog_post_page_article_not_found')}</h1>
          <Link 
            to="/blog" 
            className="inline-flex items-center py-2 px-4 rounded-md bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" /> {t('blog_post_page_back_to_blog')}
          </Link>
        </div>
      </div>
    );
  }
  
  const shareUrl = window.location.href;
  const shareTitle = t(post.titleKey);
  
  return (
    <>
      {/* Blog Post Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-neutral-800">
        <img 
          src={post.image} 
          alt={t(post.titleKey)} 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-white text-center mx-auto">
            <Link to="/blog" className="text-primary-300 hover:text-primary-200 flex items-center justify-center mb-4">
              <ChevronLeft size={18} className="mr-1" /> {t('blog_post_page_back_to_blog')}
            </Link>
            <p className="text-sm uppercase tracking-wider text-primary-300 mb-2">{t(post.categoryKey)}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t(post.titleKey)}
            </h1>
            <div className="flex items-center justify-center text-neutral-300 text-sm space-x-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1.5" />
                <span>{t(post.authorKey)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1.5" />
                <span>{t(post.readTimeKey)}</span>
              </div>
            </div>
          </div>
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
                  dangerouslySetInnerHTML={{ __html: t(post.contentKey) }}
                ></div>
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag size={18} className="text-neutral-500" />
                    {post.tagKeys?.map(tagKey => (
                      <Link 
                        key={tagKey} 
                        to={`/blog?tag=${tagKey}`}
                        className="px-3 py-1 bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 rounded-full text-sm text-neutral-700 transition-colors"
                      >
                        {t(tagKey)}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Share */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="font-medium text-neutral-800 flex items-center">
                      <Share2 size={18} className="mr-2" /> {t('blog_post_page_share_this_post')}:
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title={t('blog_post_page_share_facebook')}
                        className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                      >
                        <Facebook size={18} />
                      </a>
                      <a 
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title={t('blog_post_page_share_twitter')}
                        className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                      <a 
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title={t('blog_post_page_share_linkedin')}
                        className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Author */}
                {post.authorImage && post.authorBioKey && (
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <img 
                        src={post.authorImage} 
                        alt={t(post.authorKey)} 
                        className="w-20 h-20 object-cover rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-neutral-800">{t(post.authorKey)}</h3>
                        <p className="text-neutral-600 mb-3">{t(post.authorBioKey)}</p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
              
              {/* Comments (Placeholder) */}
              <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-neutral-800 flex items-center">
                  <MessageCircle size={20} className="mr-2" /> {t('blog_post_page_comments_title')} (3)
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
                        {t('blog_post_page_comment_1')}
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
                        {t('blog_post_page_comment_2')}
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
                        {t('blog_post_page_comment_3')}
                      </p>
                      <button className="text-primary-500 hover:text-primary-600 text-sm font-medium">Reply</button>
                    </div>
                  </div>
                </div>
                
                {/* Comment Form */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h4 className="font-semibold text-neutral-800 mb-4">{t('blog_post_page_leave_a_comment')}</h4>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder={t('blog_post_page_name')} 
                        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <input 
                        type="email" 
                        placeholder={t('blog_post_page_email')} 
                        className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <textarea 
                      placeholder={t('blog_post_page_comment')} 
                      rows={4}
                      className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                    <button 
                      type="submit"
                      className="py-2 px-6 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium transition-colors"
                    >
                      {t('blog_post_page_post_comment')}
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
                  <h3 className="text-xl font-semibold mb-4 text-neutral-800">{t('blog_post_page_related_articles_title')}</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-3">
                        <img 
                          src={relatedPost.image} 
                          alt={t(relatedPost.titleKey)} 
                          className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                        />
                        <div>
                          <Link 
                            to={`/blog/${relatedPost.id}`}
                            className="font-medium text-neutral-800 hover:text-primary-600 transition-colors line-clamp-2"
                          >
                            {t(relatedPost.titleKey)}
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
                  {Array.from(new Set(blogPostsData.map(p => p.categoryKey))).map((categoryKey) => (
                    <li key={categoryKey}>
                      <Link
                        to={`/blog?category=${categoryKey}`}
                        className="block py-2 px-3 rounded-md text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {t(categoryKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPostsData.flatMap(p => p.tagKeys))).slice(0, 12).map((tagKey) => (
                    <Link
                      key={tagKey}
                      to={`/blog?tag=${tagKey}`}
                      className="px-3 py-1 bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 rounded-full text-sm text-neutral-700 transition-colors"
                    >
                      {t(tagKey)}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-neutral-800">Need Medical Advice?</h3>
                <p className="text-neutral-600 mb-4">
                  {t('blog_post_page_cta_text')}
                </p>
                <Link 
                  to="/booking" 
                  className="block w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white text-center rounded-md font-medium transition-colors"
                >
                  {t('blog_post_page_book_an_appointment')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default BlogPostPage;