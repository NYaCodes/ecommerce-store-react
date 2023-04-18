import{Button, Container, Navbar, Modal} from 'react-bootstrap'


function NavbarComponet() {
return (
    <Navbar expand="sm">
<Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className='justify-content-end'>
<Button> Cart 0 Items</Button>
</Navbar.Collapse>
    </Navbar>
)
}
export default NavbarComponet;