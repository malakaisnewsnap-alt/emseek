export default function Home() {
  return (
    <div style={{
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Helvetica, Arial, sans-serif"
    }}>
      <h1 style={{
        fontSize: "20vw",
        fontWeight: "900",
        letterSpacing: "-0.05em",
        lineHeight: "0.9"
      }}>
        !EM
      </h1>

      <p style={{
        textTransform: "uppercase",
        opacity: 0.6,
        marginTop: "20px"
      }}>
        private archive · audio · visuals
      </p>

      <div style={{ marginTop: "80px" }}>
        <a href="/vault" style={{
          color: "white",
          textDecoration: "underline",
          fontSize: "18px"
        }}>
          enter vault
        </a>
      </div>
    </div>
  )
}
