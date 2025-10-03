import BlogPostPreview from '../components/ui/BlogPostPreview';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Best Time to Visit Japan: A Seasonal Guide",
      excerpt: "Discover the perfect season for your Japan adventure. From cherry blossoms to autumn colors, each season offers unique experiences.",
      date: "March 15, 2024",
      imageSeed: "cherry-blossom",
      slug: "best-time-to-visit-japan"
    },
    {
      title: "Hidden Gems in Kyoto: Beyond the Tourist Trail",
      excerpt: "Explore lesser-known temples, quiet gardens, and local neighborhoods that capture Kyoto's authentic charm.",
      date: "March 10, 2024",
      imageSeed: "kyoto-temple",
      slug: "hidden-gems-kyoto"
    },
    {
      title: "Traveling Japan with Kids: Tips from a Family Tour Expert",
      excerpt: "Make your family trip to Japan smooth and memorable with these practical tips and family-friendly recommendations.",
      date: "March 5, 2024",
      imageSeed: "family-japan",
      slug: "japan-with-kids"
    },
    {
      title: "Japanese Food Etiquette: What You Need to Know",
      excerpt: "Navigate dining in Japan with confidence. Learn the essential etiquette for enjoying everything from sushi to ramen.",
      date: "February 28, 2024",
      imageSeed: "japanese-food",
      slug: "japanese-food-etiquette"
    },
    {
      title: "The Art of Onsen: Your Guide to Japanese Hot Springs",
      excerpt: "Everything you need to know about experiencing traditional Japanese hot springs, from etiquette to recommendations.",
      date: "February 20, 2024",
      imageSeed: "onsen",
      slug: "onsen-guide"
    },
    {
      title: "Tokyo vs Osaka: Which City Should You Visit?",
      excerpt: "Compare Japan's two largest cities and discover which one matches your travel style and interests.",
      date: "February 15, 2024",
      imageSeed: "tokyo-osaka",
      slug: "tokyo-vs-osaka"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Travel Blog
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Insights, tips, and stories from exploring Japan
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-[4/3] md:aspect-auto">
              <img
                src="https://source.unsplash.com/800x600/?japan,mount-fuji"
                alt="Featured post"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-sm text-accent font-semibold mb-2">FEATURED POST</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Mount Fuji: Complete Guide to Japan's Sacred Mountain
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Everything you need to know about visiting Mount Fuji, from the best viewpoints to seasonal
                considerations and local tips for an unforgettable experience.
              </p>
              <div className="flex items-center gap-4 text-sm text-text-secondary">
                <span>March 20, 2024</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostPreview key={index} {...post} />
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-accent bg-opacity-10 rounded-lg p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Get travel tips, seasonal highlights, and exclusive insights delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
