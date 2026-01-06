"use client"

import { useState } from "react"

export default function Vault() {
  const [input, setInput] = useState("")
  const [unlocked, setUnlocked] = useState(false)

  if (!unlocked) {
    return (
      <main style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Helvetica, Arial, sans-serif"
      }}>
        <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>
          vault access
        </h2>

        <input
          type="password"
          placeholder="enter code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            background: "black",
            border: "1px solid white",
            color: "white",
            padding: "12px",
            fontSize: "16px"
          }}
        />

        <button
          onClick={() => input === "EMSEEK" && setUnlocked(true)}
          style={{
            display: "block",
            marginTop: "20px",
            border: "1px solid white",
            background: "black",
            color: "white",
            padding: "12px 24px",
            cursor: "pointer"
          }}
        >
          unlock
        </button>
      </main>
    )
  }

  return (
    <main style={{
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Helvetica, Arial, sans-serif"
    }}>
      <h2 style={{ fontSize: "48px" }}>vault</h2>

      <p style={{ opacity: 0.6, marginTop: "10px" }}>
        private audio drop
      </p>

      <audio
        controls
        style={{ marginTop: "40px", width: "100%" }}
        src="PASTE_YOUR_AUDIO_URL_HERE"
      />
    </main>
  )
}
