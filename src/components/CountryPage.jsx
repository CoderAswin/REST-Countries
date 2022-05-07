import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CountryPage() {
    const [countries, setCountries] = useState([])


    const { id } = useParams()

    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://restcountries.com/v3.1/all')
                .then(data => data.json())
                .then(data => setCountries(data))

        }

        fetchData()

    }, [])

    var currentCountry = countries.find(data => data.ccn3 === id)
    console.log(currentCountry);


    return (
        <>
            <Container className='mt-4 container'>
                <Row>
                    <Col>
                        <button>Back</button>
                    </Col>
                </Row>
                {currentCountry ? (
                    <Row className='mt-5'>
                        <Col lg={6} >
                            <img src={currentCountry.flags.png} alt="" />
                        </Col>
                        <Col lg={3}>
                            <ListGroup>
                                <h1>{currentCountry.name.common}</h1>
                                <p>Population  : {currentCountry.population}</p>
                                <p>Area  :  {currentCountry.area}</p>
                                <p>Continent  :  {currentCountry.subregion}</p>
                                <p>Capital  :  {currentCountry.capital[0]}</p>
                                <p>TimeZone  :  {currentCountry.timezones}</p>
                            </ListGroup>
                        </Col>
                        <Col lg={3} >
                            <ListGroup>
                                <img src={currentCountry.coatOfArms.png} alt="" />
                            </ListGroup>
                        </Col>
                    </Row>
                ) : null}



            </Container>
        </>
    )
}

export default CountryPage