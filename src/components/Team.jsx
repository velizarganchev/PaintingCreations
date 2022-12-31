import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sergo from '../Sergo.png';
import Dancho from '../Dancho.png';

function Team() {

    const team = [
        {
            name: "Сергей Средков",
            position: "SEO",
            text: "Занимава се със всичко",
            image: Sergo
        },
        {
            name: "Данчо Атанасов",
            position: "SEO",
            text: "Занимава се със всичко",
            image: Dancho
        }
    ]
    return (
        <Row xs={1} md={2} className="g-4">
            {team.map((_, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={_.image} />
                        <Card.Body>
                            <Card.Title>{_.name}</Card.Title>
                            <Card.Text>
                                {_.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Team;