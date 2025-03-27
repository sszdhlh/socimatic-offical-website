'use client'

import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactECharts from 'echarts-for-react';

export default function Home() {
  const platformOption = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#e5e7eb',
      textStyle: {
        color: '#1f2937'
      }
    },
    series: [
      {
        name: 'Platform Distribution',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: false,
          }
        },
        data: [
          { value: 1048, name: 'Facebook', itemStyle: { color: 'rgba(87, 181, 231, 1)' } },
          { value: 735, name: 'Instagram', itemStyle: { color: 'rgba(141, 211, 199, 1)' } },
          { value: 580, name: 'Twitter', itemStyle: { color: 'rgba(251, 191, 114, 1)' } },
          { value: 484, name: 'LinkedIn', itemStyle: { color: 'rgba(252, 141, 98, 1)' } }
        ]
      }
    ]
  };

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

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
        <div className="container py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-Powered <span className="text-primary">Content Creation</span> for Modern Business
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl">
                Automate your content creation, management, and publishing across all platforms with our advanced AI solution. Engage your audience with personalized, high-quality content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="rounded-button">
                  <Link href="/request-demo">Request a Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-button">
                  <Link href="/features">Explore Features</Link>
                </Button>
              </div>
              <div className="pt-4">
                <p className="text-sm text-gray-600 mb-3">Trusted by innovative companies worldwide</p>
                <div className="flex flex-wrap gap-8 items-center opacity-70">
                  <div className="h-8 w-24 bg-gray-400 rounded"></div>
                  <div className="h-8 w-20 bg-gray-400 rounded"></div>
                  <div className="h-8 w-28 bg-gray-400 rounded"></div>
                  <div className="h-8 w-24 bg-gray-400 rounded"></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-2xl bg-white p-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-medium text-gray-800">Content Performance</h3>
                    <div className="flex items-center space-x-2">
                      <div className="px-3 py-1 text-xs font-medium text-primary bg-primary-100 rounded-full">Today</div>
                      <div className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">Week</div>
                      <div className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">Month</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-gray-500">Total Posts</p>
                        <i className="ri-article-line text-primary"></i>
                      </div>
                      <p className="text-2xl font-semibold text-gray-900">2,847</p>
                      <p className="text-xs text-green-500">
                        ↑ 12.5% vs yesterday
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-gray-500">Engagement</p>
                        <i className="ri-heart-line text-primary"></i>
                      </div>
                      <p className="text-2xl font-semibold text-gray-900">4.8%</p>
                      <p className="text-xs text-green-500">
                        ↑ 2.1% vs yesterday
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-medium text-gray-700">Platform Distribution</h4>
                      <i className="ri-pie-chart-line text-primary"></i>
                    </div>
                    <div className="h-48">
                      <ReactECharts
                        option={platformOption}
                        style={{ height: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionize Your Content Strategy
            </h2>
            <p className="text-xl text-gray-600">
              Harness the power of AI to create, manage, and optimize content across all your platforms
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 text-primary rounded-lg flex items-center justify-center mb-6">
                <i className="ri-magic-line ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Content Generation</h3>
              <p className="text-gray-600">
                Generate high-quality, engaging content tailored to your brand's voice with advanced AI models.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 text-primary rounded-lg flex items-center justify-center mb-6">
                <i className="ri-global-line ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Platform Publishing</h3>
              <p className="text-gray-600">
                Schedule and publish content seamlessly across multiple social media platforms from a single dashboard.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 text-primary rounded-lg flex items-center justify-center mb-6">
                <i className="ri-chat-3-line ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Responses</h3>
              <p className="text-gray-600">
                Engage with your audience 24/7 using AI-powered chat responses that sound natural and on-brand.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 text-primary rounded-lg flex items-center justify-center mb-6">
                <i className="ri-bar-chart-line ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Insights</h3>
              <p className="text-gray-600">
                Gain valuable insights with comprehensive analytics to optimize your content strategy.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 text-primary rounded-lg flex items-center justify-center mb-6">
                <i className="ri-calendar-line ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Scheduling</h3>
              <p className="text-gray-600">
                Post at the perfect time with AI-optimized scheduling based on audience engagement patterns.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 text-primary rounded-lg flex items-center justify-center mb-6">
                <i className="ri-customer-service-line ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Audience Management</h3>
              <p className="text-gray-600">
                Understand and segment your audience to create highly targeted content that converts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One Platform, All Your Content Needs
            </h2>
            <p className="text-xl text-gray-600">
              AI Content Pro integrates with all major social media platforms to streamline your content workflow
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {[
              { name: "Facebook", icon: "ri-facebook-fill", color: "#1877F2" },
              { name: "Instagram", icon: "ri-instagram-fill", color: "#E4405F" },
              { name: "Twitter", icon: "ri-twitter-x-fill", color: "#000000" },
              { name: "LinkedIn", icon: "ri-linkedin-fill", color: "#0A66C2" },
              { name: "YouTube", icon: "ri-youtube-fill", color: "#FF0000" },
              { name: "TikTok", icon: "ri-tiktok-fill", color: "#000000" },
              { name: "Pinterest", icon: "ri-pinterest-fill", color: "#E60023" },
              { name: "WeChat", icon: "ri-wechat-fill", color: "#07C160" },
              { name: "Weibo", icon: "ri-weibo-fill", color: "#E6162D" },
              { name: "WordPress", icon: "ri-wordpress-fill", color: "#21759B" },
              { name: "Shopify", icon: "ri-shopping-bag-fill", color: "#7AB55C" },
              { name: "Medium", icon: "ri-medium-fill", color: "#000000" },
            ].map((platform, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <i className={`${platform.icon} ri-2x`} style={{ color: platform.color }}></i>
                <h3 className="text-sm font-medium mt-3 text-gray-800">{platform.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Marketing Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying about AI Content Pro
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "AI Content Pro transformed our content strategy. We're now producing 3x the content with half the resources, and engagement has increased by 40%."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Marketing Director, TechCorp</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The AI-generated responses have dramatically improved our customer engagement. Our social media team can now focus on strategy rather than repetitive replies."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Social Media Manager, BrandX</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The analytics insights alone are worth the investment. We've optimized our posting schedule and content types, resulting in a 52% boost in conversion rates."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-500">CEO, Growth Solutions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of businesses that are saving time and increasing engagement with AI Content Pro
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
