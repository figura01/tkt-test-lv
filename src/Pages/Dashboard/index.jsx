
import useFetch from '../../hooks/useFetch';
import Header from "../../components/Header/Header";
import CompagnieList from '../../components/CompanieList';
const Dashboard = () => {
  const {data,loading,error} = useFetch("https://test.wertkt.com/api/biz/?format=json")

  if(error){
      console.log(error)
  }

  return <div className="dashboard w-full">
    {loading && <div>Loading...</div>}
    <Header />

    {!loading && data && <CompagnieList compagnies={data} compagnie={data} /> }
  </div>
}
export default Dashboard