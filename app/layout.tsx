export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        backgroundColor: "black",
        color: "white",
        fontFamily: "Helvetica, Arial, sans-serif"
      }}>
        {children}
      </body>
    </html>
  )
}
