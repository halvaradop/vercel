import type { Metadata } from "next"
import "@/ui/globals.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: ["400", "500", "700"],
    style: "normal",
    subsets: ["latin"],
    variable: "--font-roboto",
})

export const metadata: Metadata = {
    title: "Next.js + Vercel",
    description: "Deploy Next.js to Vercel",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased`}>{children}</body>
        </html>
    )
}
