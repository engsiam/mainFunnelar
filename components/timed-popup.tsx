"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useConsultationForm } from "@/hooks/use-consultation-form";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";

const EXPIRY_DAYS = 30; // <--- You can change this

export function TimedPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const {
    formData,
    isSubmitting,
    isSuccess,
    isError,
    handleChange,
    handleSubmit,
    resetForm,
  } = useConsultationForm();

  useEffect(() => {
    const popupData = localStorage.getItem("popupSubmitted");
    if (popupData) {
      const { timestamp, status } = JSON.parse(popupData);
      const now = new Date().getTime();

      // Only re-show if 30 days have passed
      if (now - timestamp < EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
        setHasShown(true);
        return;
      }
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem(
        "popupSubmitted",
        JSON.stringify({
          timestamp: new Date().getTime(),
        })
      );
      setIsOpen(false);
    }
  }, [isSuccess]);

  const closePopup = () => {
    setIsOpen(false);
    if (isSuccess) resetForm();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Grow Your Amazon Business Today
              </h2>
              <Button variant="ghost" size="icon" onClick={closePopup}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We've received your request and will get back to you shortly.
                </p>
                <Button onClick={closePopup} className="mt-6">
                  Close
                </Button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <p className="text-gray-600 mb-4">
                  Ready to take your Amazon business to the next level? Fill out
                  this form for a free consultation with our experts at
                  Funnelar.
                </p>
                <div>
                  <Label htmlFor="popup-name">Name</Label>
                  <Input
                    id="popup-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="popup-email">Email</Label>
                  <Input
                    id="popup-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="popup-message">Message</Label>
                  <Textarea
                    id="popup-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your Amazon business"
                    required
                  />
                </div>
                {isError && (
                  <p className="text-red-500 text-sm">
                    There was an error submitting your request. Please try
                    again.
                  </p>
                )}
                <div className="flex flex-col space-y-2 mt-4">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Get Free Consultation"}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      localStorage.setItem(
                        "popupSubmitted",
                        JSON.stringify({
                          timestamp: new Date().getTime(),
                          status: "dismissed",
                        })
                      );
                      setIsOpen(false);
                    }}
                  >
                    Don't show again
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
