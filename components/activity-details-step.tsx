"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

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

interface ActivityDetailsStepProps {
  data: ActivityFormData
  onChange: (data: Partial<ActivityFormData>) => void
  onNext: () => void
  errors: Record<string, string>
}

const categories = [
  "Adventure & Games",
  "Creative Expression",
  "Food & Drink",
  "Learning & Development",
  "Sports and Fitness",
  "Volunteering",
  "Other",
]

export function ActivityDetailsStep({
  data,
  onChange,
  onNext,
  errors,
}: ActivityDetailsStepProps) {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-bold text-foreground mb-6">Activity Details</h2>

      {/* Activity Name */}
      <div className="mb-6">
        <Label className="text-sm font-medium text-foreground">
          Activity Name <span className="text-destructive">*</span>
        </Label>
        <Input
          className="mt-2 rounded-full h-11 px-4 border-border"
          placeholder="Eg: cooking food"
          value={data.activityName}
          onChange={(e) => onChange({ activityName: e.target.value })}
        />
        {errors.activityName && (
          <p className="text-sm text-destructive mt-1">{errors.activityName}</p>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <Label className="text-sm font-medium text-foreground">
          Select the best category to describe your activity{" "}
          <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          className="mt-3 gap-2.5"
          value={data.category}
          onValueChange={(val) => onChange({ category: val })}
        >
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-2.5">
              <RadioGroupItem value={cat} id={`cat-${cat}`} />
              <Label htmlFor={`cat-${cat}`} className="text-sm font-normal text-foreground cursor-pointer">
                {cat}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {data.category === "Other" && (
          <Input
            className="mt-3 rounded-full h-11 px-4 border-border"
            placeholder="Specify the category"
            value={data.otherCategory}
            onChange={(e) => onChange({ otherCategory: e.target.value })}
          />
        )}
        {errors.category && (
          <p className="text-sm text-destructive mt-1">{errors.category}</p>
        )}
      </div>

      {/* About the Activity */}
      <div className="mb-6">
        <Label className="text-sm font-medium text-foreground">
          About the Activity <span className="text-destructive">*</span>
        </Label>
        <Textarea
          className="mt-2 min-h-[120px] rounded-xl px-4 py-3 border-border resize-none"
          placeholder="Activity Description"
          value={data.aboutActivity}
          onChange={(e) => onChange({ aboutActivity: e.target.value })}
        />
        {errors.aboutActivity && (
          <p className="text-sm text-destructive mt-1">{errors.aboutActivity}</p>
        )}
      </div>

      {/* Activity Type */}
      <div className="mb-6">
        <Label className="text-sm font-medium text-foreground">
          Please select the activity type{" "}
          <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          className="mt-3 gap-2.5"
          value={data.activityType}
          onValueChange={(val) => onChange({ activityType: val })}
        >
          {["Indoor", "Outdoor", "Virtual"].map((type) => (
            <div key={type} className="flex items-center gap-2.5">
              <RadioGroupItem value={type} id={`type-${type}`} />
              <Label htmlFor={`type-${type}`} className="text-sm font-normal text-foreground cursor-pointer">
                {type}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {errors.activityType && (
          <p className="text-sm text-destructive mt-1">{errors.activityType}</p>
        )}
      </div>

      {/* Location Type */}
      <div className="mb-6">
        <Label className="text-sm font-medium text-foreground">
          Please select the type of location{" "}
          <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          className="mt-3 gap-2.5"
          value={data.locationType}
          onValueChange={(val) => onChange({ locationType: val })}
        >
          {["Provider Location", "User Location"].map((loc) => (
            <div key={loc} className="flex items-center gap-2.5">
              <RadioGroupItem value={loc} id={`loc-${loc}`} />
              <Label htmlFor={`loc-${loc}`} className="text-sm font-normal text-foreground cursor-pointer">
                {loc}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {errors.locationType && (
          <p className="text-sm text-destructive mt-1">{errors.locationType}</p>
        )}
      </div>

      {/* Members */}
      <div className="mb-8">
        <Label className="text-sm font-medium text-foreground">
          How many members can take part in the activity?
        </Label>
        <div className="flex gap-4 mt-2">
          <Input
            className="rounded-full h-11 px-4 border-border flex-1"
            placeholder="Minimum Members"
            type="number"
            min={0}
            value={data.minMembers}
            onChange={(e) => {
              const val = e.target.value
              if (val === "" || Number(val) >= 0) {
                onChange({ minMembers: val })
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") e.preventDefault()
            }}
          />
          <Input
            className="rounded-full h-11 px-4 border-border flex-1"
            placeholder="Maximum Members"
            type="number"
            min={0}
            value={data.maxMembers}
            onChange={(e) => {
              const val = e.target.value
              if (val === "" || Number(val) >= 0) {
                onChange({ maxMembers: val })
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") e.preventDefault()
            }}
          />
        </div>
        {errors.members && (
          <p className="text-sm text-destructive mt-1">{errors.members}</p>
        )}
      </div>

      {/* Save and Continue */}
      <Button
        onClick={onNext}
        className="rounded-full px-6 h-10 bg-[hsl(215,40%,25%)] text-background hover:bg-[hsl(215,40%,20%)] font-semibold text-sm"
      >
        Save and Continue
      </Button>
    </div>
  )
}
