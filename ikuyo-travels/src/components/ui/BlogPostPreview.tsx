import { Link } from 'react-router-dom';

interface BlogPostPreviewProps {
  title: string;
  excerpt: string;
  date: string;
  imageSeed: string;
  slug: string;
}

const BlogPostPreview = ({ title, excerpt, date, imageSeed, slug }: BlogPostPreviewProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <div className="aspect-[16/9] bg-secondary overflow-hidden">
        <img
          src={`https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=450&fit=crop&q=80&sig=${slug}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-text-secondary mb-2">{date}</p>
        <h3 className="font-serif text-xl md:text-2xl font-bold text-text-primary mb-3">
          {title}
        </h3>
        <p className="text-text-secondary mb-4">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="text-accent hover:text-accent-hover font-medium transition-colors duration-200"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogPostPreview;
