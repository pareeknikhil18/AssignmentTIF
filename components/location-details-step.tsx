"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

interface LocationDetailsStepProps {
  data: LocationFormData
  onChange: (data: Partial<LocationFormData>) => void
  onPrevious: () => void
  onSubmit: () => void
  errors: Record<string, string>
}

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
]

const COUNTRY_CODES = [
  { code: "+91", label: "India", short: "IN" },
  { code: "+1", label: "United States", short: "US" },
  { code: "+44", label: "United Kingdom", short: "UK" },
  { code: "+61", label: "Australia", short: "AU" },
  { code: "+49", label: "Germany", short: "DE" },
  { code: "+33", label: "France", short: "FR" },
  { code: "+81", label: "Japan", short: "JP" },
  { code: "+86", label: "China", short: "CN" },
  { code: "+55", label: "Brazil", short: "BR" },
  { code: "+52", label: "Mexico", short: "MX" },
  { code: "+971", label: "UAE", short: "AE" },
  { code: "+65", label: "Singapore", short: "SG" },
  { code: "+966", label: "Saudi Arabia", short: "SA" },
  { code: "+82", label: "South Korea", short: "KR" },
  { code: "+39", label: "Italy", short: "IT" },
]

function IndiaFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect y="13.33" width="30" height="6.67" fill="#138808" />
      <circle cx="15" cy="10" r="2.5" fill="none" stroke="#000080" strokeWidth="0.5" />
      <circle cx="15" cy="10" r="0.5" fill="#000080" />
    </svg>
  )
}

function USFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" fill="#B22234" />
      <rect y="1.54" width="30" height="1.54" fill="#fff" />
      <rect y="4.62" width="30" height="1.54" fill="#fff" />
      <rect y="7.69" width="30" height="1.54" fill="#fff" />
      <rect y="10.77" width="30" height="1.54" fill="#fff" />
      <rect y="13.85" width="30" height="1.54" fill="#fff" />
      <rect y="16.92" width="30" height="1.54" fill="#fff" />
      <rect width="12" height="10.77" fill="#3C3B6E" />
    </svg>
  )
}

function UKFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" fill="#012169" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" strokeWidth="3" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M15,0 V20 M0,10 H30" stroke="#fff" strokeWidth="5" />
      <path d="M15,0 V20 M0,10 H30" stroke="#C8102E" strokeWidth="3" />
    </svg>
  )
}

function GenericFlag({ label, className }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-muted border border-border rounded-[2px] text-[7px] font-bold text-foreground ${className}`} style={{ width: 20, height: 14 }}>
      {label}
    </div>
  )
}

function CountryFlag({ code, className }: { code: string; className?: string }) {
  const country = COUNTRY_CODES.find((c) => c.code === code)
  const short = country?.short || ""
  const cls = className || "w-5 h-3.5 rounded-[2px]"

  if (short === "IN") return <IndiaFlag className={cls} />
  if (short === "US") return <USFlag className={cls} />
  if (short === "UK") return <UKFlag className={cls} />
  return <GenericFlag label={short} className={cls} />
}

export function LocationDetailsStep({
  data,
  onChange,
  onPrevious,
  onSubmit,
  errors,
}: LocationDetailsStepProps) {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-bold text-foreground">Location Details</h2>
      <p className="text-sm text-muted-foreground mt-1 mb-6">
        Please specify the address for where the activity takes place.
      </p>

      {/* Address Line 1 */}
      <div className="mb-5">
        <Label className="text-sm font-medium text-foreground">
          Address Line 1 <span className="text-destructive">*</span>
        </Label>
        <Input
          className="mt-2 rounded-full h-11 px-4 border-border"
          placeholder="House number and street name"
          value={data.addressLine1}
          onChange={(e) => onChange({ addressLine1: e.target.value })}
        />
        {errors.addressLine1 && (
          <p className="text-sm text-destructive mt-1">{errors.addressLine1}</p>
        )}
      </div>

      {/* Address Line 2 */}
      <div className="mb-5">
        <Label className="text-sm font-medium text-foreground">
          Address Line 2
        </Label>
        <Input
          className="mt-2 rounded-full h-11 px-4 border-border"
          placeholder="Other information, e.g., building name, landmark, etc."
          value={data.addressLine2}
          onChange={(e) => onChange({ addressLine2: e.target.value })}
        />
      </div>

      {/* ZIP Code */}
      <div className="mb-5">
        <Label className="text-sm font-medium text-foreground">
          ZIP Code <span className="text-destructive">*</span>
        </Label>
        <Input
          className="mt-2 rounded-full h-11 px-4 border-border"
          placeholder="eg: 123 467"
          value={data.zipCode}
          onChange={(e) => onChange({ zipCode: e.target.value })}
        />
        {errors.zipCode && (
          <p className="text-sm text-destructive mt-1">{errors.zipCode}</p>
        )}
      </div>

      {/* City / State Row */}
      <div className="flex gap-4 mb-5">
        <div className="flex-1">
          <Label className="text-sm font-medium text-foreground">
            City <span className="text-destructive">*</span>
          </Label>
          <Input
            className="mt-2 rounded-full h-11 px-4 border-border"
            placeholder="Your City"
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
          />
          {errors.city && (
            <p className="text-sm text-destructive mt-1">{errors.city}</p>
          )}
        </div>
        <div className="flex-1">
          <Label className="text-sm font-medium text-foreground">
            State <span className="text-destructive">*</span>
          </Label>
          <Select
            value={data.state}
            onValueChange={(val) => onChange({ state: val })}
          >
            <SelectTrigger className="mt-2 rounded-full h-11 px-4 border-border">
              <SelectValue placeholder="Your State" />
            </SelectTrigger>
            <SelectContent>
              {INDIAN_STATES.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.state && (
            <p className="text-sm text-destructive mt-1">{errors.state}</p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border my-8" />

      {/* Contact Details */}
      <div>
        <h3 className="text-base font-semibold text-foreground">Contact details</h3>
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          Please provide contact information for this activity.
        </p>

        <div className="flex gap-4">
          {/* Phone with country code */}
          <div className="flex-1">
            <div className="flex items-center rounded-full border border-border h-11 overflow-visible">
              <Select
                value={data.countryCode || "+91"}
                onValueChange={(val) => onChange({ countryCode: val })}
              >
                <SelectTrigger className="w-auto gap-1 border-0 border-r rounded-l-full rounded-r-none h-11 px-3 shadow-none focus:ring-0 focus:ring-offset-0 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <CountryFlag code={data.countryCode || "+91"} />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {COUNTRY_CODES.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <span className="flex items-center gap-2">
                        <CountryFlag code={country.code} />
                        <span>{country.label}</span>
                        <span className="text-muted-foreground">{country.code}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                className="flex-1 h-full px-3 text-sm bg-transparent text-foreground placeholder:text-muted-foreground outline-none min-w-0"
                placeholder="Contact Number  *"
                value={data.contactNumber}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, "")
                  if (val.length <= 10) {
                    onChange({ contactNumber: val })
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    data.contactNumber.length >= 10 &&
                    e.key !== "Backspace" &&
                    e.key !== "Delete" &&
                    e.key !== "ArrowLeft" &&
                    e.key !== "ArrowRight" &&
                    e.key !== "Tab"
                  ) {
                    e.preventDefault()
                  }
                }}
                type="tel"
                inputMode="numeric"
                maxLength={10}
              />
            </div>
            {errors.contactNumber && (
              <p className="text-sm text-destructive mt-1">{errors.contactNumber}</p>
            )}
          </div>

          {/* Contact Name */}
          <div className="flex-1">
            <Input
              className="rounded-full h-11 px-4 border-border"
              placeholder="Contact Name"
              value={data.contactName}
              onChange={(e) => onChange({ contactName: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-10">
        <Button
          onClick={onPrevious}
          variant="outline"
          className="rounded-full px-6 h-10 font-medium text-sm border-border text-foreground"
        >
          Previous
        </Button>
        <Button
          onClick={onSubmit}
          className="rounded-full px-6 h-10 bg-[hsl(215,40%,25%)] text-[#fff] hover:bg-[hsl(215,40%,20%)] font-semibold text-sm"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
