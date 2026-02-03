import React from 'react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate, useLocation } from 'react-router-dom'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone'
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone'
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone'
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone'
import Diversity2TwoToneIcon from '@mui/icons-material/Diversity2TwoTone'
import WidgetsTwoToneIcon from '@mui/icons-material/WidgetsTwoTone'
import InfoIcon from '@mui/icons-material/Info'
import GroupIcon from '@mui/icons-material/Group'
import SettingsIcon from '@mui/icons-material/Settings'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { lightTheme, darkTheme } from './theme'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import FoundersModal from './components/FoundersModal'
import AboutModal from './components/AboutModal'

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeButton, setActiveButton] = React.useState('home')
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [optionsAnchor, setOptionsAnchor] = React.useState<null | HTMLElement>(null)
  const [foundersModalOpen, setFoundersModalOpen] = React.useState(false)
  const [aboutModalOpen, setAboutModalOpen] = React.useState(false)
  const [showAdmin, setShowAdmin] = React.useState(location.pathname === '/admin')

  React.useEffect(() => {
    setShowAdmin(location.pathname === '/admin')
  }, [location.pathname])

  const handleNavClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const handleOptionsClick = (event: React.MouseEvent<HTMLElement>) => {
    setOptionsAnchor(event.currentTarget)
  }

  const handleOptionsClose = () => {
    setOptionsAnchor(null)
  }

  const handleThemeChange = (mode: 'light' | 'dark') => {
    setIsDarkMode(mode === 'dark')
    handleOptionsClose()
  }

  const currentTheme = React.useMemo(
    () => createTheme(isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  )

  const getButtonStyle = (buttonName: string) => ({
    color: 'text.primary',
    p: { xs: 0.5, sm: 1 },
    position: 'relative',
    '&::after': activeButton === buttonName ? {
      content: '""',
      position: 'absolute',
      bottom: -8,
      left: 0,
      right: 0,
      height: 3,
      backgroundColor: '#3b82f6',
      borderRadius: '2px',
    } : {},
  })

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header with Logo */}
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e4e4e7' }}>
          <Toolbar sx={{ justifyContent: 'space-between', p: 1, minHeight: { xs: 56, sm: 64 } }}>
            <Box
              component="img"
              src="/logo.jpeg"
              alt="Logo"
              sx={{
                height: { xs: 30, sm: 40, md: 50 },
                width: 'auto',
                cursor: 'pointer',
              }}
            />
            <IconButton
              sx={{ color: 'text.primary', fontSize: { xs: 24, sm: 28, md: 32 } }}
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <WidgetsTwoToneIcon sx={{ fontSize: 'inherit' }} />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Drawer Menu */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
          sx={{
            zIndex: 1300,
            '& .MuiDrawer-paper': {
              backgroundColor: '#3b82f6',
              color: 'white',
              width: { xs: '50%', sm: '40%', md: '30%' },
              zIndex: 1300,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              p: 2,
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/logo.jpeg"
                alt="Logo"
                sx={{
                  height: 50,
                  width: 'auto',
                  mb: 1,
                }}
              />
            </Box>
            <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)', mb: 2 }} />
            
            <List sx={{ flex: 1 }}>
              <ListItem
                button
                onClick={() => {
                  setAboutModalOpen(true)
                  handleDrawerClose()
                }}
                sx={{
                  borderRadius: '8px',
                  mb: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>

              <ListItem
                button
                onClick={() => {
                  setFoundersModalOpen(true)
                  handleDrawerClose()
                }}
                sx={{
                  borderRadius: '8px',
                  mb: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Founders" />
              </ListItem>

              <ListItem
                button
                onClick={handleOptionsClick}
                sx={{
                  borderRadius: '8px',
                  mb: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </List>

            <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)', mb: 2 }} />
          </Box>
        </Drawer>

        {/* Theme Options Menu */}
        <Menu
          anchorEl={optionsAnchor}
          open={Boolean(optionsAnchor)}
          onClose={handleOptionsClose}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: 'background.paper',
              color: 'text.primary',
            },
          }}
        >
          <MenuItem onClick={() => handleThemeChange('light')}>
            <Brightness7Icon sx={{ mr: 1 }} />
            Light Mode
          </MenuItem>
          <MenuItem onClick={() => handleThemeChange('dark')}>
            <Brightness4Icon sx={{ mr: 1 }} />
            Dark Mode
          </MenuItem>
        </Menu>

        {/* Navigation Bar with Icon Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: { xs: 0.5, sm: 2, md: 3 }, py: { xs: 1, sm: 2 }, px: { xs: 1, sm: 2, md: 3 }, borderBottom: '1px solid #e4e4e7', overflow: 'auto' }}>
          <IconButton sx={getButtonStyle('home')} aria-label="home" onClick={() => handleNavClick('home')}>
            <HomeTwoToneIcon sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
          </IconButton>
          <IconButton sx={getButtonStyle('analytics')} aria-label="analytics" onClick={() => handleNavClick('analytics')}>
            <TrendingUpTwoToneIcon sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
          </IconButton>
          <IconButton sx={getButtonStyle('games')} aria-label="games" onClick={() => handleNavClick('games')}>
            <SportsEsportsTwoToneIcon sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
          </IconButton>
          <IconButton sx={getButtonStyle('sponsor')} aria-label="sponsor" onClick={() => handleNavClick('sponsor')}>
            <CurrencyExchangeTwoToneIcon sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
          </IconButton>
          <IconButton sx={getButtonStyle('social')} aria-label="social" onClick={() => handleNavClick('social')}>
            <Diversity2TwoToneIcon sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
          </IconButton>
        </Box>

        <HomePage activeButton={activeButton} showAdmin={showAdmin} />

        <FoundersModal
          open={foundersModalOpen}
          onClose={() => setFoundersModalOpen(false)}
        />

        <AboutModal
          open={aboutModalOpen}
          onClose={() => setAboutModalOpen(false)}
        />
      </Box>
    </ThemeProvider>
  )
}