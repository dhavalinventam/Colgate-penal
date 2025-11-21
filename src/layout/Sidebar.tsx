import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useTheme,
  useMediaQuery,
  IconButton
} from '@mui/material'
import { ChevronRight, ExpandLess, ExpandMore, Menu as MenuIcon } from '@mui/icons-material'
import { menuItems } from './sidebarMenu'

interface SidebarProps {
  open: boolean
  onToggle: () => void
}

const drawerWidth = 250
const miniDrawerWidth = 60

const Sidebar: React.FC<SidebarProps> = ({ open, onToggle }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({})

  const handleToggleMenu = (itemText: string) => {
    setOpenMenus(prev => ({ ...prev, [itemText]: !prev[itemText] }))
  }

  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(18, 24, 37)' : '#ffffff',
        boxShadow: 'none',
        borderRight: '1px solid #ecedee',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        }),
        width: open ? drawerWidth : miniDrawerWidth
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          px: open ? 2.5 : 1,
          py: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: open ? 'flex-start' : 'center',
          gap: 1.5
        }}
      >
        {open ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, width: '100%' }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}
              >
                C
              </Box>
              <IconButton
                onClick={onToggle}
                sx={{
                  color: '#374151',
                  '&:hover': { backgroundColor: '#f3f4f6' },
                  width: '32px',
                  height: '32px',
                  padding: '4px'
                }}
              >
                <MenuIcon sx={{ fontSize: '20px' }} />
              </IconButton>
            </Box>
          </>
        ) : (
          <IconButton
            onClick={onToggle}
            sx={{
              color: '#374151',
              '&:hover': { backgroundColor: '#f3f4f6' },
              width: '40px',
              height: '40px',
              padding: '8px'
            }}
          >
            <MenuIcon sx={{ fontSize: '24px' }} />
          </IconButton>
        )}
      </Box>

      {/* Main Navigation Menu */}
      <Box sx={{ flex: 1, overflowY: 'auto', pt: 1 }}>
        {menuItems.map((section: any, sectionIndex: number) => (
          <React.Fragment key={section.section || sectionIndex}>
            <List sx={{ px: 1 }}>
              {(section.items || [section]).map((item: any) => (
                <React.Fragment key={item.text}>
                  <ListItem disablePadding sx={{ mb: 0.5 }}>
                    <ListItemButton
                      onClick={() => {
                        if (item.subItems) {
                          handleToggleMenu(item.text)
                        } else if (item.path) {
                          navigate(item.path)
                        }
                      }}
                      selected={
                        item.path &&
                        (currentPath?.startsWith(item.path) ||
                          (item.subItems && item.subItems.some((sub: any) => sub.path?.startsWith(currentPath))))
                      }
                      sx={{
                        mx: 1,
                        borderRadius: '8px',
                        transition: 'all 0.2s ease-in-out',
                        justifyContent: open ? 'initial' : 'center',
                        minHeight: '40px',
                        px: open ? 1.5 : 1,
                        py: 0.75,
                        '& .MuiListItemText-primary': {
                          fontSize: '14px',
                          lineHeight: 1.5,
                          fontWeight: 400
                        },
                        '&.Mui-selected': {
                          backgroundColor: '#3b82f6',
                          color: '#ffffff',
                          '&:hover': {
                            backgroundColor: '#2563eb'
                          },
                          '& .MuiListItemIcon-root': {
                            color: '#ffffff !important'
                          },
                          '& .MuiListItemText-primary': {
                            color: '#ffffff',
                            fontWeight: 500
                          }
                        },
                        '&.MuiButtonBase-root.Mui-active': {
                          backgroundColor: '#3b82f6',
                          color: '#ffffff',
                          '&:hover': {
                            backgroundColor: '#2563eb'
                          },
                          '& .MuiListItemIcon-root': {
                            color: '#ffffff !important'
                          },
                          '& .MuiListItemText-primary': {
                            color: '#ffffff',
                            fontWeight: 500
                          }
                        },
                        '&:hover': {
                          backgroundColor: open ? '#f3f4f6' : 'transparent'
                        }
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 1.5 : 0,
                          justifyContent: 'center',
                          color:
                            item.path &&
                            (currentPath?.startsWith(item.path) ||
                              (item.subItems && item.subItems.some((sub: any) => sub.path?.startsWith(currentPath))))
                              ? '#ffffff'
                              : '#6b7280',
                          '& svg': {
                            fontSize: '20px'
                          }
                        }}
                      >
                        {item.icon && item.icon}
                      </ListItemIcon>
                      {open && (
                        <ListItemText
                          primary={item.text}
                          primaryTypographyProps={{
                            fontWeight:
                              item.path &&
                              (currentPath === item.path ||
                                (item.subItems && item.subItems.some((sub: any) => sub.path === currentPath)))
                                ? 500
                                : 400,
                            color:
                              item.path &&
                              (currentPath === item.path ||
                                (item.subItems && item.subItems.some((sub: any) => sub.path === currentPath)))
                                ? '#ffffff'
                                : '#374151'
                          }}
                        />
                      )}
                      {item.subItems ? (
                        open ? (
                          openMenus[item.text] ? (
                            <ExpandLess sx={{ fontSize: 18, color: '#6b7280' }} />
                          ) : (
                            <ExpandMore sx={{ fontSize: 18, color: '#6b7280' }} />
                          )
                        ) : null
                      ) : item.hasArrow && open ? (
                        <ChevronRight
                          sx={{
                            fontSize: 16,
                            color: '#9ca3af'
                          }}
                        />
                      ) : null}
                    </ListItemButton>
                  </ListItem>
                  {/* Sub-menu items */}
                  {item.subItems && open && (
                    <Collapse in={openMenus[item.text]} timeout='auto' unmountOnExit>
                      <List component='div' disablePadding>
                        {item.subItems.map((sub: any) => (
                          <ListItem key={sub.text} disablePadding>
                            <ListItemButton
                              onClick={() => navigate(sub.path)}
                              selected={currentPath?.startsWith(sub.path)}
                              sx={{
                                ml: 4,
                                mr: 1,
                                borderRadius: '8px',
                                marginBottom: '4px',
                                transition: 'all 0.2s ease-in-out',
                                justifyContent: open ? 'initial' : 'center',
                                minHeight: '36px',
                                px: open ? 2 : 1,
                                py: 0.5,
                                backgroundColor: 'transparent',
                                color: '#6b7280',
                                '& .MuiListItemText-primary': {
                                  fontSize: '14px',
                                  lineHeight: 1.5,
                                  fontWeight: 400
                                },
                                '&.Mui-selected': {
                                  backgroundColor: '#3b82f6',
                                  color: '#ffffff',
                                  '&:hover': {
                                    backgroundColor: '#2563eb'
                                  },
                                  '& .MuiListItemText-primary': {
                                    color: '#ffffff',
                                    fontWeight: 500
                                  }
                                },
                                '&:hover': {
                                  backgroundColor: '#f3f4f6'
                                }
                              }}
                            >
                              <ListItemText
                                primary={sub.text}
                                primaryTypographyProps={{
                                  fontWeight: currentPath === sub.path ? 500 : 400,
                                  color: currentPath === sub.path ? '#ffffff' : '#6b7280'
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              ))}
            </List>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  )

  if (isMobile) {
    return (
      <Drawer
        variant='temporary'
        open={open}
        onClose={onToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: 1300,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            border: 'none',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
            top: 0,
            height: '100vh',
            left: 0,
            zIndex: 1300
          }
        }}
      >
        {drawerContent}
      </Drawer>
    )
  }

  return (
    <Drawer
      variant='permanent'
      sx={{
        display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: open ? drawerWidth : miniDrawerWidth,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
          }),
          overflowX: 'hidden',
          border: 'none',
          borderRight: '1px solid #ecedee',
          boxShadow: 'none',
          backgroundColor: theme.palette.background.paper,
          left: 0, // Position at left edge
          top: 0,
          height: '100vh',
          zIndex: '1 !important'
        }
      }}
      open={open}
    >
      {drawerContent}
    </Drawer>
  )
}

export default Sidebar
