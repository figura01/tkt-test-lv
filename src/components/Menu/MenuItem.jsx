import { NavLink } from "react-router-dom";
import { TbDashboard,TbBell,TbQuestionCircle } from "react-icons/tb";
import './MenuItem.css'

const MenuItem = ({text, path, icone }) => {
  console.log(icone)
  return <NavLink to={path} className="nav-link" activeClassName="active">
    <div className="flex justify-start items-center py-3 my-1">
      <span className="flex  px-3 ">
        {icone === 'TbDashboard' ? <TbDashboard size={20} /> : icone==='TbBell' ? <TbBell  /> : <TbQuestionCircle size={20} />}
      </span>
      {text}
    </div>
    
  </NavLink>
}

export default MenuItem