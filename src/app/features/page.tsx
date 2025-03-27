'use client'

import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features to Transform Your Content Strategy
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Discover how AI Content Pro's comprehensive suite of tools can help you create, manage, and optimize your content workflow
            </p>
            <Button asChild size="lg" className="rounded-button">
              <Link href="/request-demo">Request a Demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: "ri-magic-line",
                title: "AI Content Generation",
                description: "Create high-quality blog posts, social media updates, product descriptions, and more with our advanced AI writing assistant."
              },
              {
                icon: "ri-global-line",
                title: "Multi-Platform Publishing",
                description: "Schedule and publish your content across all major social media platforms from a single, unified dashboard."
              },
              {
                icon: "ri-chat-3-line",
                title: "Automated Responses",
                description: "Deploy AI-powered chat responses that sound natural and on-brand to engage with your audience 24/7."
              },
              {
                icon: "ri-bar-chart-line",
                title: "Advanced Analytics",
                description: "Gain deep insights into your content performance with comprehensive analytics and actionable recommendations."
              },
              {
                icon: "ri-calendar-line",
                title: "Smart Scheduling",
                description: "Optimize your posting schedule with AI-driven recommendations based on when your audience is most engaged."
              },
              {
                icon: "ri-customer-service-line",
                title: "Audience Management",
                description: "Understand and segment your audience to create highly targeted content that drives engagement and conversions."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <i className={`${feature.icon} ri-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlights */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Feature Spotlight
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-xl text-gray-600"
            >
              Take a closer look at our most powerful features
            </motion.p>
          </div>

          {/* AI Content Generation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <i className="ri-magic-line mr-2"></i>
                AI Content Generation
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Create Engaging Content in Seconds</h3>
              <p className="text-lg text-gray-600">
                Our AI content generation engine is built on advanced language models, trained on millions of high-quality articles and optimized for marketing content. Generate blog posts, social media updates, emails, product descriptions, and more with just a few clicks.
              </p>
              <ul className="space-y-3">
                {[
                  "Content tailored to your brand voice and style",
                  "Topic suggestions based on trending conversations",
                  "Multilingual content generation for global reach",
                  "SEO-optimized content that ranks well"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <i className="ri-check-line text-primary ri-lg mr-2"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="rounded-xl overflow-hidden shadow-lg bg-white p-4"
            >
              <div className="aspect-video bg-gray-200 rounded-lg"></div>
            </motion.div>
          </div>

          {/* Multi-Platform Publishing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="rounded-xl overflow-hidden shadow-lg bg-white p-4 order-1 lg:order-2"
            >
              <div className="aspect-video bg-gray-200 rounded-lg"></div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-6 order-2 lg:order-1"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <i className="ri-global-line mr-2"></i>
                Multi-Platform Publishing
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Publish Everywhere from One Place</h3>
              <p className="text-lg text-gray-600">
                Say goodbye to switching between multiple platforms. Our multi-platform publishing tool allows you to schedule and publish content across all major social media networks, blogs, and email marketing platforms from a single dashboard.
              </p>
              <ul className="space-y-3">
                {[
                  "Unified content calendar across all platforms",
                  "Platform-specific content customization",
                  "Batch scheduling for efficient workflow",
                  "Automated posting at optimal times"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <i className="ri-check-line text-primary ri-lg mr-2"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Analytics & Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <i className="ri-bar-chart-line mr-2"></i>
                Analytics & Insights
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Actionable Insights to Drive Results</h3>
              <p className="text-lg text-gray-600">
                Our powerful analytics tools provide deep insights into your content performance across all platforms. Understand what's working, what isn't, and get AI-powered recommendations to optimize your content strategy.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time performance tracking and reporting",
                  "Custom dashboard for your most important metrics",
                  "Content attribution to understand ROI",
                  "Competitive benchmarking"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <i className="ri-check-line text-primary ri-lg mr-2"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="rounded-xl overflow-hidden shadow-lg bg-white p-4"
            >
              <div className="aspect-video bg-gray-200 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              AI Content Pro integrates with all your favorite tools and platforms
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              { name: "Facebook", icon: "ri-facebook-fill", color: "#1877F2" },
              { name: "Instagram", icon: "ri-instagram-fill", color: "#E4405F" },
              { name: "Twitter", icon: "ri-twitter-x-fill", color: "#000000" },
              { name: "LinkedIn", icon: "ri-linkedin-fill", color: "#0A66C2" },
              { name: "YouTube", icon: "ri-youtube-fill", color: "#FF0000" },
              { name: "TikTok", icon: "ri-tiktok-fill", color: "#000000" },
              { name: "WordPress", icon: "ri-wordpress-fill", color: "#21759B" },
              { name: "Shopify", icon: "ri-shopping-bag-fill", color: "#7AB55C" },
              { name: "Mailchimp", icon: "ri-mail-fill", color: "#FFE01B" },
              { name: "Slack", icon: "ri-slack-fill", color: "#4A154B" },
              { name: "Google Analytics", icon: "ri-google-fill", color: "#4285F4" },
              { name: "Zapier", icon: "ri-link", color: "#FF4A00" },
            ].map((integration, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <i className={`${integration.icon} ri-2x`} style={{ color: integration.color }}></i>
                <h3 className="text-sm font-medium mt-3 text-gray-800">{integration.name}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Content Strategy?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of businesses using AI Content Pro to create better content in less time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-button">
                <Link href="/request-demo">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-button">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
