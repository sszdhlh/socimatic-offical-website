'use client'

import { MainLayout } from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";

type UpcomingWebinar = {
  title: string;
  date: string;
  time?: string; // Made time optional to handle type error
  image: string;
  host: string;
  hostTitle: string;
  description: string;
  featured?: boolean;
};

type PastWebinar = {
  title: string;
  date: string;
  image: string;
  host: string;
  hostTitle: string;
  description: string;
  recordingUrl: string;
};

export default function WebinarsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

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

  const upcomingWebinars: UpcomingWebinar[] = [
    {
      title: "The Future of AI in Content Marketing: Trends and Predictions",
      date: "April 10, 2025",
      time: "11:00 AM - 12:00 PM PST",
      image: "https://same-assets.com/images/webinars/future-ai.jpg",
      host: "Dr. Jennifer Miller",
      hostTitle: "AI Research Director",
      description: "Join us as we explore emerging trends in AI-driven content creation and what to expect in the coming years.",
      featured: true
    },
    {
      title: "Mastering Personalization at Scale with AI",
      date: "April 17, 2025",
      time: "1:00 PM - 2:00 PM PST",
      image: "https://same-assets.com/images/webinars/personalization.jpg",
      host: "Marcus Chen",
      hostTitle: "Head of Marketing Technology",
      description: "Learn how to create hyper-personalized content for different audience segments while maintaining efficiency."
    },
    {
      title: "AI and SEO: Creating Content That Ranks",
      date: "April 24, 2025",
      time: "10:00 AM - 11:30 AM PST",
      image: "https://same-assets.com/images/webinars/seo-webinar.jpg",
      host: "Sophia Rodriguez",
      hostTitle: "SEO Strategy Lead",
      description: "Discover proven techniques for using AI to create SEO-optimized content that drives organic traffic."
    }
  ];

  const pastWebinars: PastWebinar[] = [
    {
      title: "Getting Started with AI Content Pro: Platform Tour",
      date: "March 20, 2025",
      image: "https://same-assets.com/images/webinars/platform-tour.jpg",
      host: "Thomas Jackson",
      hostTitle: "Product Manager",
      description: "A comprehensive walkthrough of the AI Content Pro platform and its key features.",
      recordingUrl: "https://www.youtube.com/watch?v=example1"
    },
    {
      title: "AI Content Compliance and Ethics",
      date: "March 13, 2025",
      image: "https://same-assets.com/images/webinars/ethics.jpg",
      host: "Dr. Sarah Williams",
      hostTitle: "Digital Ethics Consultant",
      description: "Understanding the ethical considerations and compliance requirements for AI-generated content.",
      recordingUrl: "https://www.youtube.com/watch?v=example2"
    },
    {
      title: "Scaling Your Content Strategy with AI",
      date: "March 6, 2025",
      image: "https://same-assets.com/images/webinars/scaling-content.jpg",
      host: "Michael Thompson",
      hostTitle: "Content Strategy Director",
      description: "Strategies for using AI to scale your content production without sacrificing quality.",
      recordingUrl: "https://www.youtube.com/watch?v=example3"
    },
    {
      title: "AI Content for Social Media Marketing",
      date: "February 27, 2025",
      image: "https://same-assets.com/images/webinars/social-media.jpg",
      host: "Emma Davis",
      hostTitle: "Social Media Strategist",
      description: "How to leverage AI to create engaging, platform-specific content for social media channels.",
      recordingUrl: "https://www.youtube.com/watch?v=example4"
    },
    {
      title: "Measuring ROI of AI-Generated Content",
      date: "February 20, 2025",
      image: "https://same-assets.com/images/webinars/roi.jpg",
      host: "Robert Kim",
      hostTitle: "Analytics Director",
      description: "Frameworks and metrics for measuring the effectiveness and ROI of your AI content initiatives.",
      recordingUrl: "https://www.youtube.com/watch?v=example5"
    },
    {
      title: "AI Content for E-commerce: Converting Browsers to Buyers",
      date: "February 13, 2025",
      image: "https://same-assets.com/images/webinars/ecommerce.jpg",
      host: "Lisa Chen",
      hostTitle: "E-commerce Marketing Lead",
      description: "Specific techniques for using AI to create compelling product descriptions and marketing content.",
      recordingUrl: "https://www.youtube.com/watch?v=example6"
    }
  ];

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
              AI Content Pro Webinars
            </h1>
            <p className="text-xl text-gray-700">
              Expert-led sessions on AI-powered content creation and strategy
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="container">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-4 font-medium text-sm ${
                activeTab === "upcoming"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Upcoming Webinars
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-4 font-medium text-sm ${
                activeTab === "past"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Past Webinars
            </button>
          </div>
        </div>
      </div>

      {/* Featured Upcoming Webinar */}
      {activeTab === "upcoming" && upcomingWebinars.some(w => w.featured) && (
        <div className="bg-white py-12">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {upcomingWebinars.filter(w => w.featured).map((webinar, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="h-64 lg:h-auto bg-gray-200 relative">
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-xs font-medium bg-blue-500 text-white px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8">
                      <div className="mb-2">
                        <span className="text-sm font-medium text-blue-600">
                          {webinar.date} {webinar.time && `• ${webinar.time}`}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{webinar.title}</h2>
                      <p className="text-gray-600 mb-6">{webinar.description}</p>
                      <div className="flex items-center mb-6">
                        <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                        <div>
                          <p className="font-medium">{webinar.host}</p>
                          <p className="text-sm text-gray-600">{webinar.hostTitle}</p>
                        </div>
                      </div>
                      <Button className="rounded-button bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* Content Based on Active Tab */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {activeTab === "upcoming" ? "Upcoming Webinars" : "Past Webinars & Recordings"}
            </h2>
            <p className="text-lg text-gray-600">
              {activeTab === "upcoming"
                ? "Register for our live sessions to learn from industry experts"
                : "Browse our library of recorded webinars available on-demand"}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeTab === "upcoming" ? (
              upcomingWebinars.filter(w => !w.featured).map((webinar, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                    <div className="h-48 bg-gray-200 relative">
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="mb-1">
                        <span className="text-sm font-medium text-blue-600">
                          {webinar.date} {webinar.time && `• ${webinar.time}`}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{webinar.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{webinar.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                        <div>
                          <p className="text-sm font-medium">{webinar.host}</p>
                          <p className="text-xs text-gray-500">{webinar.hostTitle}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full rounded-button bg-blue-600 hover:bg-blue-700">
                        Register
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              pastWebinars.map((webinar, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                    <div className="h-48 bg-gray-200 relative">
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <i className="ri-play-fill text-primary text-3xl"></i>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="mb-1">
                        <span className="text-sm font-medium text-blue-600">
                          {webinar.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{webinar.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{webinar.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                        <div>
                          <p className="text-sm font-medium">{webinar.host}</p>
                          <p className="text-xs text-gray-500">{webinar.hostTitle}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full rounded-button bg-blue-600 hover:bg-blue-700">
                        Watch Recording
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-primary py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Never Miss a Webinar
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our webinar alerts and be the first to know about upcoming sessions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="h-12 rounded-button bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Request Custom Webinar */}
      <div className="bg-white py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Training?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team can create custom webinars and training sessions tailored to your organization's specific needs
            </p>
            <Button className="rounded-button bg-blue-600 hover:bg-blue-700">
              Request Custom Webinar
            </Button>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
