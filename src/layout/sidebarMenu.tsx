import { DashboardOutlined, PlayCircleOutlined } from '@mui/icons-material'

export const menuItems = [
  {
    text: 'Dashboard',
    icon: <DashboardOutlined />,
    path: '/dashboard',
    hasArrow: false
  },
  // {
  //   text: 'Masters',
  //   icon: <PeopleOutlined />,
  //   hasArrow: true,
  //   subItems: [
  //     { text: 'Users', path: '/masters/users' },
  //     { text: 'Roles', path: '/masters/roles' },
  //     { text: 'Rights', path: '/masters/rights' },
  //     { text: 'Stages', path: '/masters/stages' },
  //     { text: 'Containers', path: '/masters/containers' },
  //     { text: 'Products', path: '/masters/products' },
  //     { text: 'Devices', path: '/masters/devices' },
  //     { text: 'Audit Logs', path: '/masters/audit-logs' }
  //   ]
  // },
  {
    text: 'Process',
    icon: <PlayCircleOutlined />,
    hasArrow: false
  }
]
