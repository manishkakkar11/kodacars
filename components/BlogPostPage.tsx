import React, { useEffect } from 'react';
import { Calendar, Clock, User, Share2, Linkedin, Twitter, Facebook, ArrowLeft, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts, type BlogPost } from '../data/blogData';

interface BlogPostPageProps {
  slug: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const post = getBlogPostBySlug(slug);
  const relatedPosts = post ? getRelatedPosts(post, 3) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <a href="#blog" className="text-koda-blue font-bold hover:underline">← Back to Blog</a>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const renderMarkdownContent = (content: string) => {
    // Simple markdown rendering
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('## ')) {
        elements.push(<h2 key={key++} className="text-3xl lg:text-4xl font-bold text-koda-black mt-16 mb-6 leading-tight">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={key++} className="text-2xl lg:text-3xl font-bold text-koda-black mt-12 mb-4">{line.substring(4)}</h3>);
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(<p key={key++} className="text-xl font-bold text-koda-black mt-6 mb-3">{line.replace(/\*\*/g, '')}</p>);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={key++} className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-3 ml-6">{line.substring(2)}</li>);
      } else if (line.trim() === '') {
        elements.push(<div key={key++} className="h-4"></div>);
      } else if (line.length > 0) {
        // Regular paragraph with bold text support
        const parts = line.split(/(\*\*[^*]+\*\*)/);
        const processedParts = parts.map((part, idx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={idx}>{part.replace(/\*\*/g, '')}</strong>;
          }
          return <span key={idx}>{part}</span>;
        });
        elements.push(<p key={key++} className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 font-medium">{processedParts}</p>);
      }
    }

    return elements;
  };

  const shareOnSocial = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    const url = window.location.href;
    const text = post.title;
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-koda-blue transition-colors">Home</a>
            <span>/</span>
            <a href="#blog" className="hover:text-koda-blue transition-colors">Blog</a>
            <span>/</span>
            <span className="text-koda-black">{post.category}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="bg-koda-blue text-white px-5 py-2 text-xs font-bold uppercase tracking-widest">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-normal text-koda-black mb-8 leading-[1.1] tracking-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b-2 border-gray-100">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-14 h-14 rounded-full object-cover" />
            <div>
              <div className="font-bold text-base text-koda-black">{post.author.name}</div>
              <div className="text-sm text-gray-600 font-medium">{post.author.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {formatDate(post.publishDate)}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {post.readingTime} min read
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 lg:mb-16">
          <img src={post.featuredImage} alt={post.title} className="w-full h-auto object-cover border border-gray-200" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {renderMarkdownContent(post.content)}
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t-2 border-gray-100">
          <div className="flex flex-wrap gap-3">
            {post.tags.map(tag => (
              <span key={tag} className="bg-purple-50 text-koda-purple px-4 py-2 text-sm font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-12 p-8 bg-gray-50 border-l-4 border-koda-blue">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-bold text-koda-black mb-1">Found this helpful?</h3>
              <p className="text-gray-600 font-medium">Share this article with your network</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => shareOnSocial('linkedin')} className="w-12 h-12 bg-[#0077b5] text-white flex items-center justify-center hover:bg-[#006399] transition-colors">
                <Linkedin size={20} fill="currentColor" />
              </button>
              <button onClick={() => shareOnSocial('twitter')} className="w-12 h-12 bg-[#1DA1F2] text-white flex items-center justify-center hover:bg-[#1a8cd8] transition-colors">
                <Twitter size={20} fill="currentColor" />
              </button>
              <button onClick={() => shareOnSocial('facebook')} className="w-12 h-12 bg-[#1877f2] text-white flex items-center justify-center hover:bg-[#166fe5] transition-colors">
                <Facebook size={20} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-10 bg-white border-2 border-gray-200">
          <div className="flex items-start gap-6">
            <img src={post.author.avatar} alt={post.author.name} className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-koda-black mb-2">About {post.author.name}</h3>
              <p className="text-base text-gray-600 font-medium mb-2">{post.author.role}</p>
              <p className="text-base text-gray-700 leading-relaxed font-medium">{post.author.bio}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-200 py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-16">
            <div className="mb-12">
              <div className="w-12 h-1.5 bg-koda-green mb-6"></div>
              <h2 className="text-4xl lg:text-5xl font-normal text-koda-black">
                Related <span className="font-bold">Articles</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <a
                  key={relatedPost.id}
                  href={`#blog/${relatedPost.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative overflow-hidden h-48">
                    <img src={relatedPost.featuredImage} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-koda-black mb-3 leading-tight group-hover:text-koda-blue transition-colors">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-2 text-koda-blue font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                      Read Article <ArrowRight size={14} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-koda-purple text-white py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal mb-6">
            Ready to <span className="font-bold">Maximize Your Revenue?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 font-medium leading-relaxed">
            Schedule a free consultation with our team to discover how KodaCars can transform your parking operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center px-10 py-5 bg-white text-koda-purple font-bold text-lg hover:bg-gray-100 transition-colors gap-2">
              Contact Sales <ArrowRight size={20} />
            </a>
            <a href="#blog" className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors gap-2">
              <ArrowLeft size={20} /> Back to Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
