
import { Container, Row, Card, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CountryCard({ countries }) {



    return (
        <Container className='mt-5'>
            <Row lg={4} xs={12} md={4}  >
                {countries.map(data =>

                    <Stack>
                        <Card className='mt-5' style={{ width: '18rem' }}>
                            <Link to={`countrypage/${data.ccn3}`}>
                                <Card.Img variant="top" src={data.flags.png} />
                            </Link>
                            <Card.Body>
                                <Card.Title>{data.name.common}</Card.Title>
                                <Card.Text>
                                    <p>Population : {data.population}</p>
                                    <p>Region : {data.region}</p>
                                    <p>Capital : {data.capital}: </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>

                )}


            </Row>
        </Container>

    )
}

export default CountryCard