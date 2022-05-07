import { Navbar, Container, Nav } from 'react-bootstrap'
import BrightnessLowSharpIcon from '@mui/icons-material/BrightnessLowSharp';

function NavigationBar() {
    return (
        <>
            <Navbar className='navbar' bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Where In The World ?</Navbar.Brand>
                    <Nav className="me-4">
                        <BrightnessLowSharpIcon/>
                        <span>Day Mode</span>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar