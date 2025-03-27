'use client'

import { MainLayout } from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "ai-content", name: "AI Content" },
    { id: "seo", name: "SEO" },
    { id: "marketing", name: "Marketing" },
    { id: "guides", name: "Guides" }
  ];

  const blogPosts = [
    {
      title: "The Future of Content Creation: AI-Powered Writing Tools",
      description: "Discover how AI is transforming the way businesses approach content creation and what it means for your marketing strategy.",
      image: "https://same-assets.com/images/blog/ai-writing-tools.jpg",
      category: "ai-content",
      date: "Mar 24, 2025",
      readTime: "5 min read",
      author: {
        name: "Sarah Johnson",
        role: "Content Strategist"
      }
    },
    {
      title: "10 Ways to Optimize Your Content for Search Engines in 2025",
      description: "Learn the latest SEO techniques to ensure your AI-generated content ranks high in search engine results.",
      image: "https://same-assets.com/images/blog/seo-optimization.jpg",
      category: "seo",
      date: "Mar 20, 2025",
      readTime: "8 min read",
      author: {
        name: "Michael Chen",
        role: "SEO Specialist"
      }
    },
    {
      title: "How to Create a Content Calendar That Drives Results",
      description: "A step-by-step guide to planning your content strategy and executing it flawlessly with AI assistance.",
      image: "https://same-assets.com/images/blog/content-calendar.jpg",
      category: "marketing",
      date: "Mar 18, 2025",
      readTime: "6 min read",
      author: {
        name: "Jessica Lee",
        role: "Marketing Director"
      }
    },
    {
      title: "The Ethics of AI Content: Balancing Automation and Authenticity",
      description: "Explore the ethical considerations of using AI for content creation and how to maintain your brand's authentic voice.",
      image: "https://same-assets.com/images/blog/ai-ethics.jpg",
      category: "ai-content",
      date: "Mar 15, 2025",
      readTime: "7 min read",
      author: {
        name: "David Wilson",
        role: "AI Ethics Researcher"
      }
    },
    {
      title: "Beginner's Guide to AI Content Generation",
      description: "Everything you need to know to get started with AI-powered content creation for your business.",
      image: "https://same-assets.com/images/blog/beginners-guide.jpg",
      category: "guides",
      date: "Mar 12, 2025",
      readTime: "10 min read",
      author: {
        name: "Olivia Martinez",
        role: "Content Coach"
      }
    },
    {
      title: "Case Study: How We Increased Organic Traffic by 300% with AI Content",
      description: "See how our client used AI Content Pro to dramatically improve their search visibility and drive more qualified leads.",
      image: "https://same-assets.com/images/blog/case-study.jpg",
      category: "marketing",
      date: "Mar 8, 2025",
      readTime: "9 min read",
      author: {
        name: "Robert Kim",
        role: "Growth Marketing Lead"
      }
    }
  ];

  const filteredPosts = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Content Pro Blog
            </h1>
            <p className="text-xl text-gray-700">
              Insights, strategies, and guides for AI-powered content creation
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="bg-white py-12">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-64 lg:h-auto bg-gray-200 relative">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="mb-2">
                    <span className="text-xs font-medium bg-primary-100 text-primary px-2 py-1 rounded-full">
                      {blogPosts[0].category.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      {blogPosts[0].date} · {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-4">{blogPosts[0].description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">{blogPosts[0].author.name}</p>
                        <p className="text-xs text-gray-500">{blogPosts[0].author.role}</p>
                      </div>
                    </div>
                    <Button className="rounded-button bg-blue-600 hover:bg-blue-700">
                      Read Article
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2">
                      <span className="text-xs font-medium bg-primary-100 text-primary px-2 py-1 rounded-full">
                        {post.category.replace('-', ' ').toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">
                        {post.date} · {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <p className="text-xs text-gray-500">{post.author.role}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full rounded-button">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length > 6 && (
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" className="rounded-button">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary-50 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest content marketing insights delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground"
              />
              <Button className="rounded-button bg-blue-600 hover:bg-blue-700 shrink-0">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
