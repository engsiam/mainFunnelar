"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useConsultationForm } from "@/hooks/use-consultation-form"
import { Check } from "lucide-react"

export function ContactForm() {
  const { formData, isSubmitting, isSuccess, isError, handleChange, handleSubmit, resetForm } = useConsultationForm()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {isSuccess ? (
            <div className="text-center py-8 bg-white rounded-lg shadow-lg p-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for contacting us. We've received your message and will get back to you as soon as possible.
              </p>
              <Button onClick={resetForm}>Send Another Message</Button>
            </div>
          ) : (
            <form className="space-y-6 bg-white rounded-lg shadow-lg p-8" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={6}
                  required
                />
              </div>
              {isError && (
                <p className="text-red-500 text-sm">There was an error submitting your message. Please try again.</p>
              )}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

