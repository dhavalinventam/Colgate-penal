import logo from './logo.png'
import headerLogo from './header-logo.png'
import favIcon from './fav-icon.png'
import amnealLogo from './amneal-logo.svg'
import notFoundImage from './404-image.jpeg'

export const Logo = logo
export const HeaderLogo = headerLogo
export const FavIcon = favIcon
export const AmnealLogo = amnealLogo
export const NotFoundImage = notFoundImage

// Placeholder exports for missing icons (using existing images as fallbacks)
export const UserIcon = favIcon // Using fav-icon as fallback for user icon
export const DesktopIcon = headerLogo // Using header-logo as fallback for desktop icon

export default {
  Logo,
  HeaderLogo,
  FavIcon,
  AmnealLogo,
  NotFoundImage,
  UserIcon,
  DesktopIcon
}
