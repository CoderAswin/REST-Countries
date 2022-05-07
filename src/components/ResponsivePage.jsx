
import {Container , Form, Row, Col } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';

function ResponsivePage({filterRegion , searchCountry}) {
    return (
        <>
            <Container className='mt-5'>
                <Row >
                    <Col lg={10} xs={8} sm={8}>
                        <Form onChange={(e)=>searchCountry(e.target.value)} className='searchInput'>
                            <Row>
                                <Col xs={12} lg={5}>
                                    <Form.Control  className='textInput' placeholder="Search For A Country" />
                                    <SearchIcon className='searchIcon' />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={2} xs={4} sm={4}>
                        <select onChange={(e)=>filterRegion(e.target.value)} className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option >Filter By Region</option>
                            <option >Africa</option>
                            <option >Americas</option>
                            <option >Asia</option>
                            <option >Europe</option>
                            <option >Oceania</option>
                        </select>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ResponsivePage