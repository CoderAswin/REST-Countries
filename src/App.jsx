
import CountryCard from "./components/CountryCard";
import NavigationBar from "./components/NavigationBar";
import ResponsivePage from "./components/ResponsivePage";
import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import CountryPage from "./components/CountryPage";

function App() {

  const [countries, setCountries] = useState([])

  const [value , setValue] = useState('Oceania')

  const [countryInput , setCountryInput] = useState('india')




  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://restcountries.com/v3.1/all')
        .then(data => data.json())
        .then(data => setCountries(data))

    }

    fetchData()

  }, [])

  useEffect(() => {

    const fetchRegion = async () => {
      await fetch(`https://restcountries.com/v3.1/region/${value}`)
        .then(data => data.json())
        .then(data => setCountries(data))
    }
    fetchRegion()

    }, [value])


    useEffect(() => {

      const fetchCountry = async () => {
        await fetch(`https://restcountries.com/v3.1/name/${countryInput}`)
          .then(data => data.json())
          .then(data => setCountries(data))
      }
      fetchCountry()
      
  
      }, [countryInput])
  
    
      console.log(countries);
    


  const filterRegion = (filteredValue) => {
    filteredValue === 'Filter By Region' ? setValue('Oceania') : setValue(filteredValue)
    
  
  }


  const searchCountry = (countryName) => {
    console.log(countryName);
    countryName === '' ? setCountryInput('i') : setCountryInput(countryName)
  }
  



  return (
    <Router>
      <NavigationBar />
      <ResponsivePage filterRegion={filterRegion} searchCountry = {searchCountry} />
      <Routes>
        <Route path = '/' element = {<CountryCard countries={countries} />} />
        <Route path = '/countrypage/:id' element = {<CountryPage  />} />
      </Routes>
    </Router>
  );
}

export default App;


