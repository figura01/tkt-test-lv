import { useParams, useSearchParams } from "react-router-dom"; 
import HeaderDetail from "../../components/HeaderDetail/HeaderDetail";

import useFetch from '../../hooks/useFetch';

const CompagnieDetail = () => {

  const { id, results } = useParams()

  let idsResult = results.split(',');

  const {data, loading } = useFetch(`https://test.wertkt.com/api/result/${idsResult[0]}/`);

  const {data2, loading2} = useFetch(`https://test.wertkt.com/api/result/${idsResult[1]}/`);
  
  if (loading && loading2 ) {
    console.log(data, data2)
  }

  console.log(data2)
  const [searchParams] = useSearchParams();
  let name = searchParams.get('name')
  let siren = searchParams.get('siren')
  return <div className="page compagnie-detail flex flex-col w-full">
    <HeaderDetail name={name} siren={siren} />

    <div className="flex w-full">
      <div className="flex w-1/2">
        <h3>Chiffre d affaire</h3>
        {data && !loading && data.ca} / {data2 && !loading2 && data2.ca}
      </div>
      <div className="flex w-1/2">
        <h3>EBITDA</h3>
        {data && !loading && data.ebitda} / {data2 && !loading2 && data2.ebitda}
      </div>
      <div className="flex w-1/2">
        <h3>Loss</h3>
        {data && !loading && data.loss} / {data2 && !loading2 && data2.loss}
      </div>
      <div className="flex w-1/2">
        <h3>Margin</h3>
        {data && !loading && data.margin} / {data2 && !loading2 && data2.margin}
      </div>
    </div>

  </div>
}

export default CompagnieDetail