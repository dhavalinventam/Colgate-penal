import {
  DashboardOutlined,
  HomeOutlined,
  AnalyticsOutlined,
  PersonOutlined,
  AccountBoxOutlined
} from '@mui/icons-material'

export const menuItems = [
  {
    section: 'MENU',
    items: [
      {
        text: 'Dashboard',
        icon: <DashboardOutlined />,
        path: '/dashboard',
        hasArrow: false
      },
      {
        text: 'Homepage',
        icon: <HomeOutlined />,
        path: '/homepage',
        hasArrow: false
      },
      {
        text: 'Sales analytics',
        icon: <AnalyticsOutlined />,
        path: '/sales-analytics',
        hasArrow: false
      },
      {
        text: 'Sales manager',
        icon: <PersonOutlined />,
        path: '/sales-manager',
        hasArrow: false
      },
      {
        text: 'Accounts',
        icon: <AccountBoxOutlined />,
        path: '/accounts',
        hasArrow: false
      }
    ]
  }
]
