
import CompagnieItem from "./CompagnieItem"


const CompagnieList = ({compagnies}) => {

  console.log('ompagnies: ', compagnies )
  return <table className="w-full flex flex-col text-left">
    <thead className="w-full flex">
      <tr className="w-full flex">
        <th className="w-1/3">Compagny</th>
        <th className="w-1/3">N° Siren</th>
        <th className="w-1/3">Category</th>
      </tr>
    </thead>
    <tbody>
      {compagnies && compagnies.length > 0 && compagnies.map((c) => (
        <CompagnieItem key={`compagnie-${c.id}`} compagnie={c} />))
      }
    </tbody>
  </table>
}
export default CompagnieList