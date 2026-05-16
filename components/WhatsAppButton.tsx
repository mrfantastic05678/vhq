"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ArrowRight, MessageSquare } from "lucide-react"
import { RiWhatsappFill } from "react-icons/ri"
import { WHATSAPP_NUMBER } from "@/lib/constants"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  tooltipMessages?: string[]
  initialDelay?: number
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = WHATSAPP_NUMBER,
  message = "Assalamu Alaikum, I'm interested in joining. Please share details about the courses and fee structure.",
  tooltipMessages = [
    "Assalamu Alaikum! How can we help?",
    "Book your FREE trial class now",
    "Learn Quran with Tajweed online",
    "Need help with enrollment?"
  ],
  initialDelay = 5000,
}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [currentTooltipIndex, setCurrentTooltipIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const cycleRef = useRef<boolean>(false)

  // Format phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, "")

  // Generate WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`

  // Handle click
  const handleClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  // Function to get random time within range (in ms)
  const getRandomTime = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // Tooltip cycle management
  useEffect(() => {
    // Initial delay before starting the cycle
    const initialTimer = setTimeout(() => {
      cycleRef.current = true
      runTooltipCycle()
    }, initialDelay)

    // Function to run the tooltip show/hide cycle
    function runTooltipCycle() {
      if (!cycleRef.current) return

      // Show tooltip
      setShowTooltip(true)

      // Hide tooltip after 5 seconds
      timerRef.current = setTimeout(() => {
        setShowTooltip(false)

        // Wait 5-8 seconds before showing next message
        const hideTime = getRandomTime(5000, 8000)
        timerRef.current = setTimeout(() => {
          // Move to next message
          setCurrentTooltipIndex((prevIndex) => (prevIndex + 1) % tooltipMessages.length)

          // Show tooltip with next message
          setShowTooltip(true)

          // Hide tooltip after 8-10 seconds
          const showTime = getRandomTime(8000, 10000)
          timerRef.current = setTimeout(() => {
            setShowTooltip(false)

            // Continue the cycle after a short delay
            timerRef.current = setTimeout(runTooltipCycle, 1000)
          }, showTime)
        }, hideTime)
      }, 5000)
    }

    return () => {
      clearTimeout(initialTimer)
      if (timerRef.current) clearTimeout(timerRef.current)
      cycleRef.current = false
    }
  }, [tooltipMessages.length, initialDelay])

  // Handle mouse enter/leave
  const handleMouseEnter = () => {
    // Clear any existing timers to prevent conflicts
    if (timerRef.current) clearTimeout(timerRef.current)
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setShowTooltip(false)
    }, 1000)
  }

  return (
    <div className="fixed right-4 bottom-6 md:right-6 z-[999] flex items-end">
      <div
        className={`mb-1 md:mb-2 mr-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 py-2 px-3 sm:px-5 sm:py-3 shadow-lg relative transition-all duration-500 ease-in-out ${
          showTooltip ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-90 translate-x-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center">
          <MessageSquare className="mr-2 h-4 w-4 text-white" />
          <p className="whitespace-nowrap text-[10px] md:text-sm font-medium text-white">
            {tooltipMessages[currentTooltipIndex]}
          </p>
          <ArrowRight className="ml-2 h-4 w-4 text-white" />
        </div>

        {/* Tooltip arrow - positioned on the right side */}
        <div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 transform bg-emerald-600"
          style={{ right: "-4px" }}
        ></div>
      </div>

      <div className="relative">
        <button
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:h-16 sm:w-16 z-10"
          aria-label="Contact us on WhatsApp"
        >
          <RiWhatsappFill className="h-7 w-7 fill-white stroke-white sm:h-8 sm:w-8 animate-whatsapp-bounce" />

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-whatsapp-ripple pointer-events-none" />
        </button>
      </div>
    </div>
  )
}

export default WhatsAppButton;
