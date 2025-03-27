'use client'

import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Please enter your company name" }),
  jobTitle: z.string().min(1, { message: "Please enter your job title" }),
  phone: z.string().optional(),
  companySize: z.string().min(1, { message: "Please select your company size" }),
  description: z.string().optional(),
});

export default function RequestDemoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      jobTitle: "",
      phone: "",
      companySize: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setFormSubmitted(true);
    toast.success("Demo request submitted successfully!");
  }

  return (
    <MainLayout>
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Request a Demo
            </h1>
            <p className="text-xl text-gray-700">
              See how AI Content Pro can transform your content strategy
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
          >
            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-check-line ri-2x"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Your demo request has been submitted successfully. One of our product specialists will reach out to you shortly to schedule your personalized demo.
                </p>
                <Button asChild variant="outline" className="rounded-button">
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Book Your Personalized Demo</h2>
                  <p className="text-gray-600">
                    Fill out the form below and one of our product specialists will contact you to schedule a personalized demo tailored to your content needs.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Email *</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title *</FormLabel>
                            <FormControl>
                              <Input placeholder="Marketing Manager" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="companySize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Size *</FormLabel>
                            <FormControl>
                              <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...field}
                              >
                                <option value="" disabled>Select company size</option>
                                <option value="1-10">1-10 employees</option>
                                <option value="11-50">11-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="201-500">201-500 employees</option>
                                <option value="501-1000">501-1000 employees</option>
                                <option value="1000+">1000+ employees</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What are you looking to achieve with AI Content Pro?</FormLabel>
                          <FormControl>
                            <textarea
                              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Tell us about your content needs and challenges..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="text-sm text-gray-600">
                      <p>By submitting this form, you agree to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
                    </div>

                    <Button type="submit" className="w-full rounded-button">
                      Request Demo
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What to Expect in Your Demo
              </h2>
              <p className="text-xl text-gray-600">
                During your personalized demo, our product specialists will:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "ri-user-line",
                  title: "Tailored Presentation",
                  description: "We'll customize the demo to focus on the features most relevant to your business needs."
                },
                {
                  icon: "ri-question-answer-line",
                  title: "Q&A Session",
                  description: "Get all your questions answered by our product experts who understand your industry challenges."
                },
                {
                  icon: "ri-tools-line",
                  title: "Feature Walkthrough",
                  description: "See a comprehensive walkthrough of all the powerful features in AI Content Pro."
                },
                {
                  icon: "ri-price-tag-3-line",
                  title: "Pricing Consultation",
                  description: "Receive personalized pricing information based on your specific requirements."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeIn}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex-shrink-0 flex items-center justify-center">
                    <i className={`${item.icon} ri-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Trusted by Marketing Teams Worldwide
            </h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-70">
              <div className="h-10 w-32 bg-gray-400 rounded"></div>
              <div className="h-10 w-32 bg-gray-400 rounded"></div>
              <div className="h-10 w-32 bg-gray-400 rounded"></div>
              <div className="h-10 w-32 bg-gray-400 rounded"></div>
              <div className="h-10 w-32 bg-gray-400 rounded"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
