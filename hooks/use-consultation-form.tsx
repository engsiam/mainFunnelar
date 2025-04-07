"use client"

import type React from "react"

import { useState } from "react"

interface FormData {
  name: string
  email: string
  message: string
}

interface UseConsultationFormReturn {
  formData: FormData
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
}

export function useConsultationForm(): UseConsultationFormReturn {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)
    setIsError(false)

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      setIsSuccess(true);
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsError(true)
      
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return {
    formData,
    isSubmitting,
    isSuccess,
    isError,
    handleChange,
    handleSubmit,
    resetForm,
  }
}

