"use client"

import { useState, useCallback } from "react"
import { StepSidebar } from "./step-sidebar"
import { ActivityDetailsStep } from "./activity-details-step"
import { LocationDetailsStep } from "./location-details-step"
import { SuccessModal } from "./success-modal"

interface ActivityFormData {
  activityName: string
  category: string
  otherCategory: string
  aboutActivity: string
  activityType: string
  locationType: string
  minMembers: string
  maxMembers: string
}

interface LocationFormData {
  addressLine1: string
  addressLine2: string
  zipCode: string
  city: string
  state: string
  contactNumber: string
  contactName: string
  countryCode: string
}

const initialActivityData: ActivityFormData = {
  activityName: "",
  category: "",
  otherCategory: "",
  aboutActivity: "",
  activityType: "",
  locationType: "",
  minMembers: "",
  maxMembers: "",
}

const initialLocationData: LocationFormData = {
  addressLine1: "",
  addressLine2: "",
  zipCode: "",
  city: "",
  state: "",
  contactNumber: "",
  contactName: "",
  countryCode: "+91",
}

export function CreateActivityForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [activityData, setActivityData] = useState<ActivityFormData>(initialActivityData)
  const [locationData, setLocationData] = useState<LocationFormData>(initialLocationData)
  const [activityErrors, setActivityErrors] = useState<Record<string, string>>({})
  const [locationErrors, setLocationErrors] = useState<Record<string, string>>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const updateActivity = useCallback((partial: Partial<ActivityFormData>) => {
    setActivityData((prev) => ({ ...prev, ...partial }))
    // Clear errors for changed fields
    const keys = Object.keys(partial) as (keyof ActivityFormData)[]
    setActivityErrors((prev) => {
      const next = { ...prev }
      keys.forEach((k) => delete next[k])
      return next
    })
  }, [])

  const updateLocation = useCallback((partial: Partial<LocationFormData>) => {
    setLocationData((prev) => ({ ...prev, ...partial }))
    const keys = Object.keys(partial) as (keyof LocationFormData)[]
    setLocationErrors((prev) => {
      const next = { ...prev }
      keys.forEach((k) => delete next[k])
      return next
    })
  }, [])

  const validateActivityStep = (): boolean => {
    const errors: Record<string, string> = {}

    if (!activityData.activityName.trim()) {
      errors.activityName = "Activity name is required"
    }
    if (!activityData.category) {
      errors.category = "Please select a category"
    }
    if (activityData.category === "Other" && !activityData.otherCategory.trim()) {
      errors.category = "Please specify the category"
    }
    if (!activityData.aboutActivity.trim()) {
      errors.aboutActivity = "Activity description is required"
    }
    if (!activityData.activityType) {
      errors.activityType = "Please select an activity type"
    }
    if (!activityData.locationType) {
      errors.locationType = "Please select a location type"
    }

    if (
      activityData.minMembers &&
      activityData.maxMembers &&
      Number(activityData.minMembers) > Number(activityData.maxMembers)
    ) {
      errors.members = "Minimum members must be less than or equal to maximum members"
    }

    setActivityErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validateLocationStep = (): boolean => {
    const errors: Record<string, string> = {}

    if (!locationData.addressLine1.trim()) {
      errors.addressLine1 = "Address line 1 is required"
    }
    if (!locationData.zipCode.trim()) {
      errors.zipCode = "ZIP code is required"
    }
    if (!locationData.city.trim()) {
      errors.city = "City is required"
    }
    if (!locationData.state) {
      errors.state = "State is required"
    }
    if (!locationData.contactNumber.trim()) {
      errors.contactNumber = "Contact number is required"
    } else if (locationData.contactNumber.replace(/[^0-9]/g, "").length !== 10) {
      errors.contactNumber = "Contact number must be exactly 10 digits"
    }

    setLocationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleNext = () => {
    if (validateActivityStep()) {
      setCurrentStep(1)
    }
  }

  const handlePrevious = () => {
    setCurrentStep(0)
  }

  const handleSubmit = () => {
    if (validateLocationStep()) {
      const formData = {
        ...activityData,
        ...locationData,
      }
      console.log("Form submitted:", formData)
      setShowSuccess(true)
    }
  }

  const handleCloseSuccess = () => {
    setShowSuccess(false)
    setCurrentStep(0)
    setActivityData(initialActivityData)
    setLocationData(initialLocationData)
    setActivityErrors({})
    setLocationErrors({})
  }

  return (
    <>
      <div className="px-8 py-8 max-w-5xl">
        <h1 className="text-xl font-bold text-foreground mb-8">Create new Activity</h1>
        <div className="flex gap-6">
          <StepSidebar currentStep={currentStep} />
          <div className="flex-1 border-l border-border pl-6 max-w-2xl">
            {currentStep === 0 ? (
              <ActivityDetailsStep
                data={activityData}
                onChange={updateActivity}
                onNext={handleNext}
                errors={activityErrors}
              />
            ) : (
              <LocationDetailsStep
                data={locationData}
                onChange={updateLocation}
                onPrevious={handlePrevious}
                onSubmit={handleSubmit}
                errors={locationErrors}
              />
            )}
          </div>
        </div>
      </div>
      <SuccessModal open={showSuccess} onClose={handleCloseSuccess} />
    </>
  )
}
