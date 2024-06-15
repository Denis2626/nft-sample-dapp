// app/layout.tsx
import React from 'react'; // Add import statement for React

import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}