"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

const Login: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate loading delay
    setTimeout(() => {
      const success = login(email, password)

      if (success) {
        navigate("/dashboard")
      } else {
        setError("Invalid email or password. Please try again.")
      }
      setIsLoading(false)
    }, 500)
  }

  const loginStyles: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  }

  const containerStyles: React.CSSProperties = {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  }

  const titleStyles: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#333",
    fontSize: "1.5rem",
  }

  const formGroupStyles: React.CSSProperties = {
    marginBottom: "1rem",
  }

  const labelStyles: React.CSSProperties = {
    display: "block",
    marginBottom: "0.5rem",
    color: "#555",
    fontWeight: "bold",
  }

  const inputStyles: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
    boxSizing: "border-box",
  }

  const buttonStyles: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: isLoading ? "#ccc" : "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: isLoading ? "not-allowed" : "pointer",
    transition: "background-color 0.2s",
  }

  const errorStyles: React.CSSProperties = {
    color: "#dc3545",
    marginBottom: "1rem",
    textAlign: "center",
    fontSize: "0.9rem",
  }

  const credentialsStyles: React.CSSProperties = {
    marginTop: "2rem",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "4px",
    fontSize: "0.8rem",
    color: "#666",
  }

  return (
    <div style={loginStyles}>
      <div style={containerStyles}>
        <h2 style={titleStyles}>Login</h2>

        {error && <div style={errorStyles}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={formGroupStyles}>
            <label style={labelStyles} htmlFor="email">
              Email:
            </label>
            <input
              style={inputStyles}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles} htmlFor="password">
              Password:
            </label>
            <input
              style={inputStyles}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <button style={buttonStyles} type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div style={credentialsStyles}>
          <strong>Test Credentials:</strong>
          <br />
          Admin: admin@gmail.com / admin123
          <br />
          HR: hr@gmail.com / hr1234
          <br />
          Operation: op@gmail.com / op1234
          <br />
          Technical: tech@gmail.com / tech1234
        </div>
      </div>
    </div>
  )
}

export default Login
