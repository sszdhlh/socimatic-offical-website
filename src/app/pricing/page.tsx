'use client'

import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

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

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and solopreneurs.",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "AI content generation (20,000 words/month)",
        "Social media scheduling for 5 platforms",
        "Basic analytics and insights",
        "AI-powered chat responses",
        "Email support"
      ],
      popular: false,
      cta: "Get Started",
      href: "/signup",
      color: "bg-gray-100"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and marketing teams.",
      monthlyPrice: 14,
      annualPrice: 10,
      features: [
        "AI content generation (100,000 words/month)",
        "Social media scheduling for all platforms",
        "Advanced analytics and insights",
        "Custom AI response training",
        "Content calendar planning",
        "SEO optimization tools",
        "Priority email & chat support"
      ],
      popular: true,
      cta: "Get Started",
      href: "/signup",
      color: "bg-primary-50"
    },
    {
      name: "Enterprise",
      description: "For companies with advanced content needs.",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "AI content generation (unlimited words)",
        "White-label publishing options",
        "Enterprise-grade analytics",
        "API access for custom integrations",
        "Custom AI model training",
        "Multi-team collaboration tools",
        "Account manager",
        "24/7 priority support"
      ],
      popular: false,
      cta: "Contact Sales",
      href: "/contact-sales",
      color: "bg-gray-100"
    }
  ];

  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-700">
              Choose the plan that fits your content creation needs
            </p>

            <div className="mt-8 inline-flex items-center bg-white p-1.5 rounded-lg shadow-sm">
              <button
                onClick={() => setAnnual(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  annual
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Annual
                <span className="ml-1.5 text-xs font-normal bg-green-100 text-green-800 rounded-full px-2 py-0.5">
                  Save 20%
                </span>
              </button>
              <button
                onClick={() => setAnnual(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  !annual
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Monthly
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInStagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className={`relative h-full ${plan.popular ? 'shadow-lg border-primary/50' : 'shadow-sm'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-0 right-0 flex justify-center">
                      <div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className={`${plan.color} rounded-t-lg`}>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="mt-1">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        {annual && plan.annualPrice !== null ? `$${plan.annualPrice}` :
                         !annual && plan.monthlyPrice !== null ? `$${plan.monthlyPrice}` :
                         "Contact Sales"}
                      </span>
                      {(annual && plan.annualPrice !== null) || (!annual && plan.monthlyPrice !== null) ? (
                        <>
                          <span className="text-gray-500 ml-1">/ month</span>
                          {annual && (
                            <p className="text-sm text-gray-500 mt-1">Billed annually</p>
                          )}
                        </>
                      ) : null}
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <i className="ri-check-line text-primary mt-0.5 mr-2"></i>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className={`w-full rounded-button ${
                        plan.popular ? '' :
                        index === 0 ? 'bg-blue-600 hover:bg-blue-700' :
                        'bg-blue-600 hover:bg-blue-700'}`}
                    >
                      <Link href={plan.href}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
            className="max-w-3xl mx-auto divide-y divide-gray-200"
          >
            {[
              {
                question: "Can I switch plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated based on the remaining days in your billing period."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial. You can explore all features and see if AI Content Pro is right for your business."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we also offer invoicing and wire transfer options."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. Your access will remain until the end of your current billing period. We don't offer refunds for partial months."
              },
              {
                question: "Are there any setup fees?",
                answer: "No, there are no setup fees for any of our plans. You only pay the advertised price."
              },
              {
                question: "Do you offer custom plans?",
                answer: "Yes, for businesses with specific needs, we offer custom plans. Please contact our sales team to discuss your requirements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="py-6"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is here to help you find the perfect plan for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-button">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-button">
                <Link href="/request-demo">Request a Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
