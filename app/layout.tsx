import './globals.css'
import NavMenu from './NavMenu'


export const metadata = {
  title: 'NextSpace',
  description: 'Social Media Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavMenu />
        {children}
        </body>
    </html>
  )
}
