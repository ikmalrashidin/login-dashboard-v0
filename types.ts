export interface User {
  role: "Admin" | "HR" | "Operation" | "Technical"
  email: string
  password: string
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => boolean
  logout: () => void
}

export interface DashboardData {
  title: string
  items: string[]
}
