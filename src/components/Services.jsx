import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Services() {

    const services = [
        {
            title: "Автобояджийски услуги",
            text: "За качеството на извършената работа се грижи високо-квалифицираният ни персонал, който периодично се обучава на иновативните световни подходи в и извън страната.",
            image: "https://comunicatorbg.com/autoscrpion/head.jpg"
        },
        {
            title: "Реставрация на стари дограми и врати",
            text: "Ремонтът на дървени прозорци понастоящем е желание на собствениците на къщи и апартаменти за да запазят екологосъобразния материал и индивидуалността на жилището.",
            image: "https://sunnyblind.com/wp-content/uploads/2018/10/%D0%B4%D1%8A%D1%80%D0%B2%D0%B5%D0%BD%D0%B0-%D0%B4%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0.jpg"
        },
        {
            title: "Реставрация на стари дограми и врати",
            text: "Ремонтът на дървени прозорци понастоящем е желание на собствениците на къщи и апартаменти за да запазят екологосъобразния материал и индивидуалността на жилището.",
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