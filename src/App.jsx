import { useEffect,useState } from 'react'
import './App.css'
import AccordionUsage from './components/Accordion'
import axios from 'axios'



function App() {
  const [data,setData] = useState(null)
  useEffect(() => {
    axios.get('https://canopy-frontend-task.vercel.app/api/holdings')
    .then((response) => {
      setData(response.data)
    })
  }, [])
if(!data){
  return <div>Loading...</div>
}
// console.log(data)
const payload = data.payload;
const holdings={};
payload.forEach((item) => {
  if(!holdings[item.asset_class]){
    holdings[item.asset_class] = [];
  }
  holdings[item.asset_class].push(item);
})
// console.log(holdings)

  return (
      <div>
        <AccordionUsage data={holdings} />
      </div>
  )
}

export default App
