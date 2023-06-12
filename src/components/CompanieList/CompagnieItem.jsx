import { Link } from 'react-router-dom'

import './CompagnieItem.css'

const CompagnieItem = ({compagnie}) => {

  return <tr className="flex w-100 rounded border my-4">
      <Link to={`${compagnie.id}/${compagnie.results}?name=${compagnie.name}?siren=${compagnie.siren}`} className="flex w-full px-4 py-6">
        <td className="w-1/3">
          {compagnie.name}
        </td>
        <td className="w-1/3">
          {compagnie.siren}
        </td>
        <td className="w-1/3">
          <span className="categorie-compagnie">{compagnie.sector}</span>
        </td>
    
      </Link>
    </tr>
}

export default CompagnieItem