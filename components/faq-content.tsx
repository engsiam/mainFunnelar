"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqContent() {
  const faqs = [
    {
      question: "What services does Amazon Growth Lab offer?",
      answer:
        "Amazon Growth Lab offers a comprehensive suite of services including Amazon SEO, PPC management, listing optimization, product photography, review management, and brand growth strategies. We provide end-to-end solutions to help businesses succeed on Amazon.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results vary depending on your starting point, competition, and the specific services you choose. Some clients see improvements in as little as 2-4 weeks, while more comprehensive strategies may take 3-6 months to fully realize their potential. We provide regular reporting and updates so you can track progress.",
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer:
        "Yes, we work with businesses of all sizes, from startups launching their first product to established brands with millions in revenue. Our strategies are tailored to your specific needs, goals, and budget.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing is customized based on your specific needs and goals. We offer flexible packages designed to accommodate different budgets and objectives. Contact us for a free consultation to discuss your requirements and get a personalized quote.",
    },
    {
      question: "Do you offer any guarantees?",
      answer:
        "While we can't guarantee specific results due to the dynamic nature of Amazon's marketplace and algorithms, we do guarantee our commitment to implementing proven strategies and best practices. We work closely with you to establish realistic goals and continuously optimize our approach to achieve the best possible outcomes.",
    },
    {
      question: "How do I get started with Amazon Growth Lab?",
      answer:
        "Getting started is easy! Simply fill out our contact form or schedule a free consultation. One of our Amazon experts will reach out to discuss your business, goals, and how we can help you succeed on Amazon.",
    },
    {
      question: "Do you handle Amazon account setup?",
      answer:
        "Yes, we can assist with Amazon account setup, including seller central configuration, brand registry, and all the necessary steps to get your business ready to sell on Amazon.",
    },
    {
      question: "Can you help with international Amazon marketplaces?",
      answer:
        "We have experience helping businesses expand into international Amazon marketplaces including Europe, Canada, Japan, and Australia. We can guide you through the process of international expansion and optimize your listings for each market.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-lg p-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

