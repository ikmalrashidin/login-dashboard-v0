"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode } from "react"
import type { User, AuthContextType } from "./types"

const users: User[] = [
  { role: "Admin", email: "admin@gmail.com", password: "admin123" },
  { role: "HR", email: "hr@gmail.com", password: "hr1234" },
  { role: "Operation", email: "op@gmail.com", password: "op1234" },
  { role: "Technical", email: "tech@gmail.com", password: "tech1234" },
]

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, password: string): boolean => {
    const foundUser = users.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      setUser(foundUser)
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
