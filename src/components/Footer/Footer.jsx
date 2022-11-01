import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './footer.css';

const Footer = () => {

  const year = new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
          <div className="logo">
            <div>
              <h1 className='text-white'>Jon Snow</h1>
            </div>
          </div>
          <p className="footer_text mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur ut velit laborum cum tempora nisi
            blanditiis aliquam ea libero dignissimos.
          </p>
        </Col>

        <Col lg='3' md='3' className='mb-4'>
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='card'>Card</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='2' md='3' className='mb-4'>
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Top Categories</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Snowboard</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Gafas</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Cascos</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Pantalones</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4'>
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Contact</h4>
            <ListGroup className='footer_contact'>
              <ListGroupItem className='ps-0 border-0 d-flex 
              align-items-center gap-2'>
                <span><i className="ri-map-pin-line"></i></span>
                <p>The Great Wall of Ice, Northern Kingdom</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex 
              align-items-center gap-2'>
                <span><i className="ri-phone-line"></i></span>
                <p>+1 1234567890</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex 
              align-items-center gap-2'>
                <span><i className="ri-mail-line"></i></span>
                <p>jon_snow@e-mail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='12'>
          <p className="footer_copyright">
            Copyright {year} full stack developed by Rolando Duarte.
            All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer;