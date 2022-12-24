import {Col, Container, Row, Button, Nav} from "react-bootstrap"
const Intro = () => {
  return(
      <div className= "intro"> 
        <Container className= "text-white text-center d-flex justify-content-center align-item-center">
          <Row>
            <Col>
              <div className="title"> Welcome My Fans </div>
              <div className="title">  In My Cinema </div>
              <div className="introButton mt-4 text-center"> 
              <Button variant="success" as={Nav.Link} href="#trending">LIST FILM</Button>
        </div>
        </Col>
        </Row>
        </Container>
        </div>
              )
};

export default Intro