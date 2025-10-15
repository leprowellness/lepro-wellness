import { type NextRequest, NextResponse } from "next/server"
import { createBooking, getAllBookings } from "@/lib/bookings-storage"
import { sendCustomerConfirmation, sendAdminNotification } from "@/lib/email"

export async function GET(request: NextRequest) {
  try {
    const bookings = await getAllBookings()
    return NextResponse.json({ bookings })
  } catch (error) {
    console.error("[v0] Error fetching bookings:", error)
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, phone, service, message } = data

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const booking = await createBooking({
      name,
      email,
      phone: phone || "",
      service: service || "",
      message,
    })

    try {
      await Promise.all([sendCustomerConfirmation(booking), sendAdminNotification(booking)])
    } catch (emailError) {
      console.error("[v0] Error sending emails:", emailError)
      // Don't fail the request if email fails, booking is already created
    }

    return NextResponse.json({ success: true, booking }, { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating booking:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
