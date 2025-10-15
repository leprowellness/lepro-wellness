import { getDatabase } from "./mongodb"
import { ObjectId } from "mongodb"

export interface Booking {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  createdAt: string
  updatedAt: string
}

const COLLECTION_NAME = "bookings"

export async function getAllBookings(): Promise<Booking[]> {
  const db = await getDatabase()
  const bookings = await db.collection(COLLECTION_NAME).find({}).sort({ createdAt: -1 }).toArray()

  return bookings.map((booking) => ({
    id: booking._id.toString(),
    name: booking.name,
    email: booking.email,
    phone: booking.phone,
    service: booking.service,
    message: booking.message,
    status: booking.status,
    createdAt: booking.createdAt,
    updatedAt: booking.updatedAt,
  }))
}

export async function getBookingById(id: string): Promise<Booking | null> {
  const db = await getDatabase()
  const booking = await db.collection(COLLECTION_NAME).findOne({ _id: new ObjectId(id) })

  if (!booking) return null

  return {
    id: booking._id.toString(),
    name: booking.name,
    email: booking.email,
    phone: booking.phone,
    service: booking.service,
    message: booking.message,
    status: booking.status,
    createdAt: booking.createdAt,
    updatedAt: booking.updatedAt,
  }
}

export async function createBooking(
  data: Omit<Booking, "id" | "status" | "createdAt" | "updatedAt">,
): Promise<Booking> {
  const db = await getDatabase()
  const now = new Date().toISOString()

  const newBooking = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,
    message: data.message,
    status: "pending" as const,
    createdAt: now,
    updatedAt: now,
  }

  const result = await db.collection(COLLECTION_NAME).insertOne(newBooking)

  return {
    id: result.insertedId.toString(),
    ...newBooking,
  }
}

export async function updateBookingStatus(id: string, status: Booking["status"]): Promise<Booking | null> {
  const db = await getDatabase()
  const now = new Date().toISOString()

  const result = await db
    .collection(COLLECTION_NAME)
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { status, updatedAt: now } }, { returnDocument: "after" })

  if (!result) return null

  return {
    id: result._id.toString(),
    name: result.name,
    email: result.email,
    phone: result.phone,
    service: result.service,
    message: result.message,
    status: result.status,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  }
}

export async function deleteBooking(id: string): Promise<boolean> {
  const db = await getDatabase()
  const result = await db.collection(COLLECTION_NAME).deleteOne({ _id: new ObjectId(id) })
  return result.deletedCount > 0
}

export async function getBookingStats() {
  const db = await getDatabase()
  const bookings = await db.collection(COLLECTION_NAME).find({}).toArray()

  const total = bookings.length
  const pending = bookings.filter((b) => b.status === "pending").length
  const confirmed = bookings.filter((b) => b.status === "confirmed").length
  const completed = bookings.filter((b) => b.status === "completed").length
  const cancelled = bookings.filter((b) => b.status === "cancelled").length

  return { total, pending, confirmed, completed, cancelled }
}
