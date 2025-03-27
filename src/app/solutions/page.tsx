'use client'

import { MainLayout } from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SolutionsPage() {
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

  // Solutions by Industry
  const industrySolutions = [
    {
      title: "Marketing Agencies",
      description: "Scale your content production without scaling your team.",
      icon: "ri-building-line",
      features: [
        "Create client-ready content in minutes",
        "Generate on-brand copy across platforms",
        "Scale content production for multiple clients"
      ]
    },
    {
      title: "E-commerce",
      description: "Convert browsers into buyers with compelling product content.",
      icon: "ri-shopping-cart-line",
      features: [
        "Create product descriptions at scale",
        "Generate SEO-optimized category pages",
        "Write persuasive email campaigns"
      ]
    },
    {
      title: "Publishers & Media",
      description: "Produce more content while maintaining editorial standards.",
      icon: "ri-newspaper-line",
      features: [
        "Draft articles and stories with AI assistance",
        "Generate headlines that drive engagement",
        "Optimize content for search visibility"
      ]
    },
    {
      title: "Small Businesses",
      description: "Get professional content without the professional price tag.",
      icon: "ri-store-2-line",
      features: [
        "Create website copy that converts",
        "Generate social media content consistently",
        "Build email newsletters that engage customers"
      ]
    }
  ];

  // Solutions by Use Case
  const useCaseSolutions = [
    {
      title: "Content Creation",
      description: "Generate high-quality articles, blog posts, and web copy.",
      icon: "ri-article-line"
    },
    {
      title: "Social Media Management",
      description: "Create, schedule, and analyze posts across all platforms.",
      icon: "ri-instagram-line"
    },
    {
      title: "Email Marketing",
      description: "Craft compelling email campaigns that drive conversions.",
      icon: "ri-mail-send-line"
    },
    {
      title: "SEO Optimization",
      description: "Improve search rankings with AI-powered content strategies.",
      icon: "ri-line-chart-line"
    },
    {
      title: "Ad Copy",
      description: "Write high-converting ad copy for any platform.",
      icon: "ri-advertisement-line"
    },
    {
      title: "Content Repurposing",
      description: "Transform existing content for different channels and formats.",
      icon: "ri-refresh-line"
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
              AI-Powered Solutions for Every Content Need
            </h1>
            <p className="text-xl text-gray-700">
              Tailored content automation for your industry and use case
            </p>
          </motion.div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions by Industry</h2>
            <p className="text-lg text-gray-600">
              Tailored AI content strategies designed for your specific industry challenges
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            {industrySolutions.map((solution, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary">
                      <i className={`${solution.icon} text-2xl`}></i>
                    </div>
                    <div>
                      <CardTitle>{solution.title}</CardTitle>
                      <CardDescription className="mt-1">{solution.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <i className="ri-check-line text-primary mt-0.5 mr-2"></i>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 rounded-button w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Use Case Solutions */}
      <div className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions by Use Case</h2>
            <p className="text-lg text-gray-600">
              Solve specific content challenges with our specialized AI tools
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {useCaseSolutions.map((solution, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="flex items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary mx-auto">
                      <i className={`${solution.icon} text-2xl`}></i>
                    </div>
                    <CardTitle className="mt-4">{solution.title}</CardTitle>
                    <CardDescription className="mt-1">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Button variant="outline" className="rounded-button">
                      <i className="ri-arrow-right-line mr-1"></i> Explore
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to transform your content strategy?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get started today and see how our AI content platform can help your business grow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-button">
                <Link href="/request-demo">Request Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-button">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
