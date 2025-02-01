import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'named after women',
    description: 'a project dedicated to the legacy of women in berlin street names',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
  }