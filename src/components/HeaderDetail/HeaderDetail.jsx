import { Link } from 'react-router-dom'
import { TbArrowNarrowLeft } from "react-icons/tb";


const HeaderDetail = ({name, siren}) => {
  
  return <header className="hedaer-detail flex w-full">

      <div>
        <Link to="/dashboard">
          <span className="flex rounded-full">
            <TbArrowNarrowLeft />
          </span>
        </Link>
        <div className="flex flex-col">
          <h2>{name}</h2>
          <span className="uppercase">{siren}</span>
        </div>
      </div>
      
    
  </header>
}

export default HeaderDetail