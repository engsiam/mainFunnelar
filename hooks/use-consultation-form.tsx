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
      // In a real application, you would send the form data to your API
      // For this example, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSuccess(true)
      resetForm()
    } catch (error) {
      setIsError(true)
    } finally {
      setIsSubmitting(false)
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

