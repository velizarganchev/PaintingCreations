import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Services() {

    const services = [
        {
            title: "Автобояджийски услуги",
            text: "За качеството на извършената работа се грижи високо-квалифицираният ни персонал.",
            image: "https://comunicatorbg.com/autoscrpion/head.jpg"
        },
        {
            title: "Боядисване на мебели",
            text: "За качеството на извършената работа се грижи високо-квалифицираният ни персонал.",
            image: "https://comunicatorbg.com/autoscrpion/head.jpg"
        },
        {
            title: "Авиобояджийски услуги",
            text: "За качеството на извършената работа се грижи високо-квалифицираният ни персонал.",
            image: "https://comunicatorbg.com/autoscrpion/head.jpg"
        }
    ];

    return (
        <>
            <h2 className="text-center m-5">Услуги</h2>
            <Row xs={1} md={3} className="g-4">
                {services.map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={_.image} />
                            <Card.Body>
                                <Card.Title>{_.title}</Card.Title>
                                <Card.Text>
                                    {_.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Services;