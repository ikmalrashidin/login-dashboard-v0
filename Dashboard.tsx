"use client"

import type React from "react"
import { useAuth } from "./AuthContext"
import type { DashboardData } from "./types"

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth()

  if (!user) {
    return <div>Loading...</div>
  }

  const getDashboardData = (): DashboardData => {
    switch (user.role) {
      case "Admin":
        return {
          title: "Admin Dashboard",
          items: [
            "Total Users: 1,234",
            "System Logs: 45 new entries",
            "Server Status: Online",
            "Database Health: Good",
            "Security Alerts: 2 pending",
          ],
        }
      case "HR":
        return {
          title: "HR Dashboard",
          items: [
            "Leave Requests: 12 pending",
            "New Hires: 5 this month",
            "Employee Reviews: 8 due",
            "Training Sessions: 3 scheduled",
            "Payroll Status: Processed",
          ],
        }
      case "Operation":
        return {
          title: "Operations Dashboard",
          items: [
            "Daily Reports: 15 completed",
            "Shift Schedules: Updated",
            "Equipment Status: All operational",
            "Production Metrics: On target",
            "Quality Checks: 98% pass rate",
          ],
        }
      case "Technical":
        return {
          title: "Technical Dashboard",
          items: [
            "Bug Reports: 23 open",
            "System Uptime: 99.9%",
            "Code Deployments: 3 today",
            "Performance Metrics: Optimal",
            "Security Scans: All clear",
          ],
        }
      default:
        return {
          title: "Dashboard",
          items: ["No data available"],
        }
    }
  }

  const dashboardData = getDashboardData()

  const dashboardStyles: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
  }

  const headerStyles: React.CSSProperties = {
    backgroundColor: "#343a40",
    color: "white",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const titleStyles: React.CSSProperties = {
    margin: 0,
    fontSize: "1.5rem",
  }

  const userInfoStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  }

  const logoutButtonStyles: React.CSSProperties = {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
  }

  const contentStyles: React.CSSProperties = {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  }

  const welcomeStyles: React.CSSProperties = {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem",
  }

  const cardStyles: React.CSSProperties = {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }

  const cardTitleStyles: React.CSSProperties = {
    color: "#333",
    marginBottom: "1rem",
    fontSize: "1.25rem",
    borderBottom: "2px solid #007bff",
    paddingBottom: "0.5rem",
  }

  const listStyles: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  }

  const listItemStyles: React.CSSProperties = {
    padding: "0.75rem",
    borderBottom: "1px solid #eee",
    fontSize: "1rem",
    color: "#555",
  }

  const roleTagStyles: React.CSSProperties = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "0.25rem 0.5rem",
    borderRadius: "12px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  }

  return (
    <div style={dashboardStyles}>
      <header style={headerStyles}>
        <h1 style={titleStyles}>{dashboardData.title}</h1>
        <div style={userInfoStyles}>
          <span style={roleTagStyles}>{user.role}</span>
          <span>{user.email}</span>
          <button style={logoutButtonStyles} onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      <main style={contentStyles}>
        <div style={welcomeStyles}>
          <h2>Welcome, {user.role}!</h2>
          <p>Here's your personalized dashboard with role-specific information.</p>
        </div>

        <div style={cardStyles}>
          <h3 style={cardTitleStyles}>Dashboard Overview</h3>
          <ul style={listStyles}>
            {dashboardData.items.map((item, index) => (
              <li key={index} style={listItemStyles}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
