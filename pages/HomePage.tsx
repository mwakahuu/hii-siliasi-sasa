import React, { useState, useEffect } from 'react'
import HomeSection from './sections/HomeSection'
import AnalyticsSection from './sections/AnalyticsSection'
import GamesSection from './sections/GamesSection'
import SponsorSection from './sections/SponsorSection'
import SocialSection from './sections/SocialSection'
import AdminPage from './AdminPage'
import AdminLogin from './AdminLogin'

interface HomePageProps {
  activeButton: string
  showAdmin: boolean
}

export default function HomePage({ activeButton, showAdmin }: HomePageProps) {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)

  useEffect(() => {
    // Check if admin is already authenticated
    const adminAuth = localStorage.getItem('adminAuth')
    setIsAdminAuthenticated(adminAuth === 'true')
  }, [])

  const handleAdminLoginSuccess = () => {
    setIsAdminAuthenticated(true)
  }

  if (showAdmin) {
    if (!isAdminAuthenticated) {
      return <AdminLogin onLoginSuccess={handleAdminLoginSuccess} />
    }
    return <AdminPage />
  }

  return (
    <>
      {activeButton === 'home' && <HomeSection />}
      {activeButton === 'analytics' && <AnalyticsSection />}
      {activeButton === 'games' && <GamesSection />}
      {activeButton === 'sponsor' && <SponsorSection />}
      {activeButton === 'social' && <SocialSection />}
    </>
  )
}

