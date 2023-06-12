import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.svg";
import MenuItem from "./MenuItem";

const navigation = [
  {
    text: 'Dashboard',
    path: '/dashboard',
    iconName: 'TbDashboard'
  },
  {
    text: 'Lorem',
    path: '/lo',
    iconName: 'TbBell',
  },
  {
    text: 'Lorem',
    path: '/',
    iconName: 'TbQuestionCircle',
  }
]

import "./Menu.css"
const Menu = () => {

  
  return <nav className="menu">
    <Link to="/">
      <img src={Logo} alt="#" />
    </Link>
    <ul className="flex flex-col">
      {navigation.map((nav,i) => (
        <MenuItem key={`nav-${i}`} text={nav.text} path={nav.path} icone={nav.iconName} />
      ))}
      
    </ul>
  </nav>
}

export default Menu