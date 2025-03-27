'use client'

import { MainLayout } from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GuidesPage() {
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

  const guides = [
    {
      title: "Getting Started with AI Content Pro",
      description: "A comprehensive guide to help you hit the ground running with our AI content platform.",
      image: "https://same-assets.com/images/guides/getting-started.jpg",
      chapters: 5,
      level: "Beginner",
      duration: "20 min",
      category: "Platform"
    },
    {
      title: "Mastering AI-Powered Content Generation",
      description: "Learn how to create high-quality, engaging content with the help of artificial intelligence.",
      image: "https://same-assets.com/images/guides/content-generation.jpg",
      chapters: 8,
      level: "Intermediate",
      duration: "45 min",
      category: "Content Creation"
    },
    {
      title: "SEO Optimization with AI",
      description: "Discover how to use AI tools to improve your search engine rankings and drive more organic traffic.",
      image: "https://same-assets.com/images/guides/seo-optimization.jpg",
      chapters: 6,
      level: "Advanced",
      duration: "35 min",
      category: "SEO"
    },
    {
      title: "Building a Content Strategy with AI",
      description: "Learn how to develop a comprehensive content strategy that leverages AI for maximum impact.",
      image: "https://same-assets.com/images/guides/content-strategy.jpg",
      chapters: 7,
      level: "Intermediate",
      duration: "40 min",
      category: "Strategy"
    },
    {
      title: "Social Media Content Creation",
      description: "Create engaging social media content at scale using AI-powered tools and techniques.",
      image: "https://same-assets.com/images/guides/social-media.jpg",
      chapters: 5,
      level: "Beginner",
      duration: "25 min",
      category: "Social Media"
    },
    {
      title: "Email Marketing with AI",
      description: "Boost your email marketing results with AI-generated content that converts.",
      image: "https://same-assets.com/images/guides/email-marketing.jpg",
      chapters: 6,
      level: "Intermediate",
      duration: "30 min",
      category: "Email"
    }
  ];

  // Featured guide is the first one
  const featuredGuide = guides[0];

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
              Learning Guides & Resources
            </h1>
            <p className="text-xl text-gray-700">
              Master AI-powered content creation with our comprehensive guides
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Guide */}
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
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs font-medium bg-blue-500 text-white px-3 py-1 rounded-full">
                      Featured Guide
                    </span>
                  </div>
                  <img
                    src={featuredGuide.image}
                    alt={featuredGuide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className="text-xs font-medium bg-primary-100 text-primary px-2 py-1 rounded-full">
                      {featuredGuide.level}
                    </span>
                    <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {featuredGuide.chapters} Chapters
                    </span>
                    <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {featuredGuide.duration}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredGuide.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredGuide.description}</p>
                  <Button className="rounded-button bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                    Start Learning
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Guides</h2>
            <p className="text-lg text-gray-600">
              Browse our collection of guides to help you master AI content creation
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {guides.slice(1).map((guide, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap gap-2">
                      <span className="text-xs font-medium bg-primary-100 text-primary px-2 py-1 rounded-full">
                        {guide.level}
                      </span>
                      <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {guide.chapters} Chapters
                      </span>
                      <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {guide.duration}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{guide.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full rounded-button bg-blue-600 hover:bg-blue-700">
                      View Guide
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Guide Categories */}
      <div className="bg-white py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Guide Categories
            </h2>
            <p className="text-lg text-gray-600">
              Browse our guides by topic area to find exactly what you need
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "Getting Started", icon: "ri-rocket-line", count: 4 },
              { name: "Content Creation", icon: "ri-article-line", count: 8 },
              { name: "SEO", icon: "ri-search-line", count: 6 },
              { name: "Social Media", icon: "ri-instagram-line", count: 5 },
              { name: "Email Marketing", icon: "ri-mail-line", count: 3 },
              { name: "Strategy", icon: "ri-strategy-line", count: 7 },
              { name: "Analytics", icon: "ri-bar-chart-line", count: 4 },
              { name: "AI Training", icon: "ri-brain-line", count: 5 }
            ].map((category, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="flex flex-col items-center text-center pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary mb-4">
                      <i className={`${category.icon} text-2xl`}></i>
                    </div>
                    <h3 className="text-lg font-medium mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} guides</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our support team is here to help you with any questions you may have
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-button bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
              <Button variant="outline" className="rounded-button">
                Browse FAQ
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
