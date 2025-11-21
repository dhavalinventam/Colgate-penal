import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Box, Tooltip, Avatar, Menu, MenuItem } from '@mui/material'
import { Brightness4, Brightness7, KeyboardArrowDown, Menu as MenuIcon } from '@mui/icons-material'
import { useTheme, useMediaQuery } from '@mui/material'

interface HeaderProps {
  onToggleSidebar: () => void
  onToggleTheme: () => void
  mode: 'light' | 'dark'
  sidebarOpen?: boolean
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onToggleTheme, mode, sidebarOpen = true }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null)
  const profileMenuOpen = Boolean(profileAnchorEl)

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget)
  }

  const handleProfileClose = () => {
    setProfileAnchorEl(null)
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        width: {
          xs: '100%',
          md: sidebarOpen ? `calc(100% - 250px)` : `calc(100% - 60px)`
        },
        ml: {
          xs: 0,
          md: sidebarOpen ? '250px' : '60px'
        },
        minHeight: '64px',
        py: 0,
        justifyContent: 'center',
        top: 0,
        color: 'text.primary',
        zIndex: 1203,
        boxShadow: 'none',
        borderBottom: '1px solid #ecedee',
        backdropFilter: 'blur(8px)',
        background: '#ffffff'
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, md: 3 },
          minHeight: '64px !important',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 1
        }}
      >
        {/* Mobile Toggle Button */}
        {isMobile && (
          <IconButton
            color='inherit'
            aria-label='toggle sidebar'
            edge='start'
            onClick={onToggleSidebar}
            sx={{
              mr: 1,
              color: '#374151',
              '&:hover': { backgroundColor: '#f3f4f6' },
              display: { xs: 'flex', md: 'none' }
            }}
          >
            <MenuIcon sx={{ fontSize: '24px' }} />
          </IconButton>
        )}

        {/* Right Side Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
          {/* Theme Toggle */}
          <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton
              onClick={onToggleTheme}
              sx={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#f3f4f6',
                color: '#374151',
                '&:hover': {
                  backgroundColor: '#e5e7eb'
                }
              }}
            >
              {mode === 'light' ? <Brightness4 sx={{ fontSize: '20px' }} /> : <Brightness7 sx={{ fontSize: '20px' }} />}
            </IconButton>
          </Tooltip>

          {/* Profile Section */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              ml: 1,
              pl: 1,
              cursor: 'pointer',
              borderRadius: '8px',
              px: 1,
              py: 0.5,
              '&:hover': {
                backgroundColor: '#f3f4f6'
              }
            }}
            onClick={handleProfileClick}
          >
            <Avatar
              sx={{
                width: '36px',
                height: '36px',
                backgroundColor: '#3b82f6',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              UR
            </Avatar>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#111827',
                  lineHeight: 1.2
                }}
              >
                Uziel Renta
              </Typography>
            </Box>
            <KeyboardArrowDown
              sx={{
                fontSize: '20px',
                color: '#6b7280',
                display: { xs: 'none', md: 'block' }
              }}
            />
          </Box>

          {/* Profile Menu */}
          <Menu
            anchorEl={profileAnchorEl}
            open={profileMenuOpen}
            onClose={handleProfileClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            sx={{
              mt: 1,
              '& .MuiPaper-root': {
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                minWidth: '200px'
              }
            }}
          >
            <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
            <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
