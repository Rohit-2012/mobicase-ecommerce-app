import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  })

  return formatter.format(price)
}

export function constructMetadata({
  title = 'MobiCase - custom high-quality phone cases',
  description = "Create your personalized mobile case with our easy-to-use customizer. Upload your favorite image, design your unique case, and purchase it seamlessly. Stand out with a case that truly represents you. Shop now!",
  image = '/thumbnail.png',
  icons = '/favicon.ico',
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@rohit-2012',
    },
    icons,
    metadataBase: new URL("https://mobicase.vercel.app/")
  }
}