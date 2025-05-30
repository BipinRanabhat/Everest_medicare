import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BlogPostData {
  id: string;
  titleKey: string;
  excerptKey: string;
  date: string;
  authorKey: string;
  image: string;
  categoryKey: string;
}

const blogPostsData: BlogPostData[] = [
  {
    id: "diabetes-management",
    titleKey: "blog_post_1_title",
    excerptKey: "blog_post_1_excerpt",
    date: "May 15, 2025",
    authorKey: "blog_post_1_author",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "blog_post_1_category"
  },
  {
    id: "monsoon-health-tips",
    titleKey: "blog_post_2_title",
    excerptKey: "blog_post_2_excerpt",
    date: "April 28, 2025",
    authorKey: "blog_post_2_author",
    image: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "blog_post_2_category"
  },
  {
    id: "womens-health-nepal",
    titleKey: "blog_post_3_title",
    excerptKey: "blog_post_3_excerpt",
    date: "April 10, 2025",
    authorKey: "blog_post_3_author",
    image: "https://images.pexels.com/photos/7089396/pexels-photo-7089396.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "blog_post_3_category"
  }
];

const BlogPreview: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">{t('blog_preview_title')}</h2>
            <p className="max-w-2xl text-neutral-600">
              {t('blog_preview_subtitle')}
            </p>
          </div>
          <Link 
            to="/blog" 
            className="inline-flex items-center mt-4 md:mt-0 text-primary-500 hover:text-primary-600 font-medium"
          >
            {t('view_all_articles')} <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
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
      </div>
    </section>
  );
};

export default BlogPreview;