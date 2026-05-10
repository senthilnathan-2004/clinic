import { motion } from "framer-motion"
import { blogPosts } from "../data/mockData"
import { BlogPost } from "../types"
import { Search, Calendar, User, ArrowRight, Bookmark } from "lucide-react"
import blogFeatured from "../assets/blog-featured.jpg"
import author1 from "../assets/author-1.jpg"

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Health Insights</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert medical advice, health tips, and clinic updates to help you lead a healthier life.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-border cursor-pointer shadow-2xl"
          >
            <img
              src={blogFeatured}
              alt="Featured Post"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-12">
              <div className="space-y-6 max-w-3xl">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Featured</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">The Future of Personalized Medicine: AI in Healthcare</h2>
                <p className="text-xl text-gray-300 leading-relaxed line-clamp-2">
                  Discover how artificial intelligence is revolutionizing the way we diagnose and treat complex medical conditions.
                </p>
                <div className="flex items-center gap-8 text-sm text-gray-400">
                  <span className="flex items-center gap-2"><User size={16} /> Dr. Sarah Mitchell</span>
                  <span className="flex items-center gap-2"><Calendar size={16} /> May 10, 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search and Categories */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex flex-wrap gap-4">
            {["All Posts", "Health Tips", "Skincare", "Mental Health", "Nutrition"].map((cat) => (
              <button key={cat} className="px-6 py-2.5 rounded-full bg-muted border border-border font-medium hover:bg-primary hover:text-white transition-all">
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.concat(blogPosts).map((post: BlogPost, index: number) => (
            <motion.article
              key={`${post.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-[2.5rem] border border-border overflow-hidden hover:shadow-2xl transition-all flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-primary hover:text-white transition-all">
                  <Bookmark size={18} />
                </button>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-primary">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted overflow-hidden">
                      <img src={author1} alt="Author" />
                    </div>
                    <span className="text-sm font-medium">By Sarah M.</span>
                  </div>
                  <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
