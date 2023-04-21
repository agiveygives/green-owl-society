import './globals.css'

export const metadata = {
  title: 'Green Owl Society',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
