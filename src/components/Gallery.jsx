import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Gallery() {


  
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://audimediacenter-a.akamaihd.net/system/production/media/100588/images/46b10046b96a11e6002f0e53dd1dbbdafe7bc452/A212363_full.jpg?1619008991" />          
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Gallery;