import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book an Appointment | LePro Wellness Center Ottawa",
  description:
    "Contact LePro Wellness Center in Ottawa to book a physiotherapy, massage therapy, or athletic therapy appointment. Located at Suite 104 - 2 Gurdwara Road, Ottawa ON K2E 1A2.",
  keywords: [
    "book physiotherapy Ottawa",
    "book massage therapy Ottawa",
    "wellness center appointment Ottawa",
    "contact LePro Wellness",
    "physiotherapy clinic Ottawa contact",
    "Ottawa wellness appointment",
    "2 Gurdwara Road Ottawa",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book an Appointment | LePro Wellness Center Ottawa",
    description:
      "Book your physiotherapy, massage therapy, or athletic therapy appointment at LePro Wellness Center in Ottawa, Ontario.",
    url: "/contact",
    siteName: "LePro Wellness Center",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book an Appointment | LePro Wellness Center Ottawa",
    description:
      "Book your wellness appointment at LePro Wellness Center in Ottawa. Expert physiotherapy, massage therapy & athletic therapy.",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
