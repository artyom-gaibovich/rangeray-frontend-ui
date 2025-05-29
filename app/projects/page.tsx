import {withLayout} from "@/layout/Layout";
import {Col, Container, Row} from "react-bootstrap";
import Image from 'next/image'
import styles from './Page.module.css'


const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
    width: '100px',
    height: 'auto',
}

const imageStyle2 = {
    borderRadius: '50%',
    border: '1px solid #fff',
    width: 'auto',
    height: 'auto',
}



const portfolioItems = [
    {
        title: 'Сайт PHP',
        description: 'Интеграция с CRM Bitrix',
        updated: '5 мин',
        image: '/sitew_og.png',
    },
    {
        title: 'Сайт PHP',
        description: 'Интеграция с CRM Bitrix',
        updated: '5 мин',
        image: '/sitew_og.png',
    },
    {
        title: 'Сайт PHP',
        description: 'Интеграция с CRM Bitrix',
        updated: '5 мин',
        image: '/sitew_og.png',
    },
    {
        title: 'Сайт PHP',
        description: 'Интеграция с CRM Bitrix',
        updated: '5 мин',
        image: '/sitew_og.png',
    },
    {
        title: 'Сайт PHP',
        description: 'Интеграция с CRM Bitrix',
        updated: '5 мин',
        image: '/sitew_og.png',
    },
];


function Projects() {
    return (
        <>
            (
            <section className="page-wrapper d-flex flex-column min-vh-100 py-5">
                <Container>
                    <Row className="pb-2 justify-content-center text-center">
                        <Col md={7}>
                            <h2 className="display-6 mb-1 fw-bold">Портфолио</h2>
                            <p className="lead text-muted mb-4">Результат нашей работы</p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {portfolioItems.map((item, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={3}>
                                <div className="card h-100">
                                    <Image
                                        className="card-img-top"
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                        style={{ objectFit: 'cover', height: '250px' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                Время последнего обновления {item.updated}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            );
        </>
    );
}

export default withLayout(Projects)
