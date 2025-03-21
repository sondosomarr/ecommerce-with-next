import React from 'react'
export const metadata = {
    title: "About Us!",
    description: "a simple shopping website",
  }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
