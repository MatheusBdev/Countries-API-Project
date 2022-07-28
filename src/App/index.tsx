import Header from "../components/Header"
import "../globals.css"
import { Container, DataContainer, SpinLoad } from "./styles"
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import ReactCountryFlag from "react-country-flag"
import {TailSpin} from  'react-loader-spinner'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
})

const LIST_COUNTRIES = gql`
  {
    countries {
      code
      name
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`

interface ICountry {
  name: string
  code: string
  capital: string
  currency: string
  emoji: string
  languages: {
    code: string
    name: string
  }
}

function App() {

  const { data, loading  } = useQuery(LIST_COUNTRIES, { client })
  const [selectedCountry, setSelectedCountry] = useState<any>("")
  const [sortData, setSort] = useState<boolean>(false)
  const [allCountries, setAllCountries] = useState<any>([])

  const handleSort = () => {
    if (sortData) {
      return setSort(false)
    }
      return setSort(true)
  }

  const changeSelectedCountry = (countryCode: any) => {
    setSelectedCountry(
      allCountries.find((country: any) => country.code === countryCode)
    )
  }

  useEffect(() => {
    setAllCountries(data && data.countries)
  }, [data, allCountries])

  if(loading){
    return <SpinLoad>
    <TailSpin
    color="#FFF"
    height={100}
    width={100}
    wrapperClass="spin"
    />
    </SpinLoad>
  }

  const  dataSort = () => {
    if (sortData) {
      return allCountries
        .map((item: ICountry, index: any) => (
          <option key={index} value={item.code}>
            {item.name}
          </option>
        ))
        .sort((a: any, b: any) => {
          return a > b ? 1 : -1
        })
    } else {
      return allCountries.map((item: ICountry, index: any) => (
        <option key={index} value={item.code}>
          {item.name}
        </option>
      ))
    }
  }

  return (
    <div className="App">
      <Header HandleSort={handleSort}>
        <span>Ordenar</span>
        {sortData ? (
          <AiOutlineArrowDown size={25} />
        ) : (
          <AiOutlineArrowUp size={25} />
        )}
      </Header>
      <Container>
        <select defaultValue="selecione" onChange={(event) => changeSelectedCountry(event.target.value)}>
          <option value="selecione" disabled >Selecione</option>
          {allCountries &&  dataSort()}
        </select>
        <DataContainer>
          <h3>Nome: {selectedCountry.name}</h3>
          <h3>Capital: {selectedCountry.capital}</h3>
          <h3>
            Bandeira:{" "}
            <ReactCountryFlag
              countryCode={selectedCountry.code}
              svg
              cdnSuffix="svg"
            />
          </h3>
          <h3>Moeda: {selectedCountry.currency}</h3>
          <h3>
            Idioma:{" "}
            {selectedCountry.languages && selectedCountry.languages[0].name}
          </h3>
        </DataContainer>
      </Container>
    </div>
  )
}

export default App
