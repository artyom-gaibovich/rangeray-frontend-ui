import {withLayout} from "@/layout/Layout";
import {ReactNode} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Image from "next/image";
import styles from "@/layout/Footer/Footer.module.css";


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
const features = [
    {
        title: 'Надежность',
        description:
            'Librix на 100% защищен от SQL-инъекций — уязвимости, которая затрагивает большинство CMS.',
    },
];

const portfolioItems = Array(5).fill({
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
});


function Home({}: HomeProps) {
    return (<div className="page-wrapper d-flex flex-column min-vh-100">
        <>
            <Row xl={2} className="justify-content-center">
                <Col lg={12}>
                    <h1 className="heading mb-4 display-3 aos-init aos-animate">
                        Разработка и поддержка сайтов
                    </h1>
                    <h2 className="h4 lh-base fw-normal aos-int aos-animate">
                        "Range-Ray" - интернет-агентство, основная деятельность которого направлена на разработку и поддержку
                        интернет-проектов. Мы можем создать продукт любой сложности - от простого сайта-визитки до
                        интернет-магазина и сервиса недвижимости
                    </h2>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col lg={12}>
                    <h2 className="h4 text-center mb-4">Наши преимущества</h2>
                    <Container>
                        <Row className="g-5">
                            {features.map((feature, idx) => (
                                <Col key={idx} lg={3} sm={6}>
                                    <div className="text-center">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Row className="justify-content-center m-5">
                <Col lg={12}>
                    <Container>
                        <Row className="pb-2 justify-content-center text-center">
                            <h2 className="display-6 mb-1 fw-bold">Портфолио</h2>
                            <p className="lead text-muted mb-4">Результат нашей работы</p>
                        </Row>
                        <div className="d-flex gap-4 flex-wrap justify-content-center">
                            {portfolioItems.map((item, idx) => (
                                <div key={idx} className="card" style={{ width: '18rem' }}>
                                    <Image
                                        className="card-img-top"
                                        src={item.image}
                                        alt="..."
                                        width={500}
                                        height={500}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text">
                                            <small className="text-muted">Время последнего обновления {item.updated}</small>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Col>
            </Row>
   {/*         <Row xl={2} className="justify-content-center m-5">
                <Col lg={12}>
                    <section>
                        <Container>
                            <Row className="pb-2 justify-content-center">
                                <Col md={7} className="text-center"></Col>
                                <h2 className="text-center display-6 mb-1 fw-bold">Портфолио</h2>
                                <p className="lead text-center text-muted mb-4">Результат нашей работы</p>
                            </Row>
                            <div className="d-flex gap-5">
                                <div className="card">
                                    <Image className="card-img-top" src={'/sitew_og.png'} alt={'...'} width={500}
                                           height={500}
                                           style={imageStyle2}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Сайт PHP</h5>
                                        <p className="card-text">Интеграция с CRM Bitrix</p>
                                        <p className="card-text"><small className="text-muted">Время последнего
                                            обновления 5 мин</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <Image className="card-img-top" src={'/sitew_og.png'} alt={'...'} width={500}
                                           height={500}
                                           style={imageStyle2}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Сайт PHP</h5>
                                        <p className="card-text">Интеграция с CRM Bitrix</p>
                                        <p className="card-text"><small className="text-muted">Время последнего
                                            обновления 5 мин</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <Image className="card-img-top" src={'/sitew_og.png'} alt={'...'} width={500}
                                           height={500}
                                           style={imageStyle2}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Сайт PHP</h5>
                                        <p className="card-text">Интеграция с CRM Bitrix</p>
                                        <p className="card-text"><small className="text-muted">Время последнего
                                            обновления 5 мин</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <Image className="card-img-top" src={'/sitew_og.png'} alt={'...'} width={500}
                                           height={500}
                                           style={imageStyle2}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Сайт PHP</h5>
                                        <p className="card-text">Интеграция с CRM Bitrix</p>
                                        <p className="card-text"><small className="text-muted">Время последнего
                                            обновления 5 мин</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <Image className="card-img-top" src={'/sitew_og.png'} alt={'...'} width={500}
                                           height={500}
                                           style={imageStyle2}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Сайт PHP</h5>
                                        <p className="card-text">Интеграция с CRM Bitrix</p>
                                        <p className="card-text"><small className="text-muted">Время последнего
                                            обновления 5 мин</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Container>

                    </section>
                </Col>
            </Row>*/}


            <Row xl={2} className="justify-content-center g-5">
                <Col lg={12}>
                    <section className="showcase">
                        <div className="container-fluid p-0">


                            <div className="row g-0">
                                <div className="col-lg-6 order-lg-2 text-white showcase-img">
                                    <Image
                                        src="/bg-showcase-1.jpg"
                                        alt="..."
                                        width={300}
                                        height={400}
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="col-lg-6 order-lg-1 my-auto showcase-text">

                                    <h2>Полностью адаптивный дизайн</h2>
                                    <p className="lead mb-0">
                                        Landing Page — это всего лишь HTML и CSS с небольшим использованием SCSS для
                                        пользователей, которым нужны расширенные возможности настройки. Сразу из коробки
                                        вы
                                        можете просто добавить свой контент и изображения — и ваша новая
                                        лендинг-страница будет
                                        готова к использованию!
                                    </p>
                                </div>
                            </div>

                            <div className="row g-0">
                                <div className="col-lg-6 text-white showcase-img">
                                    <Image
                                        src="/bg-showcase-1.jpg"
                                        alt="..."
                                        width={300}
                                        height={400}
                                        layout="responsive"
                                        objectFit="cover"


                                    />
                                </div>
                                <div className="col-lg-6 my-auto showcase-text test">
                                    <h2>Обновлено для Bootstrap 5</h2>
                                    <p className="lead mb-0">
                                        Улучшено и наполнено полезными утилитарными классами — Bootstrap 5 лидирует в
                                        разработке
                                        мобильных адаптивных сайтов! Все темы от Start Bootstrap теперь используют
                                        Bootstrap 5!
                                    </p>
                                </div>
                            </div>

                            <div className="row g-0">
                                <div className="col-lg-6 order-lg-2 text-white showcase-img">
                                    <Image
                                        src="/bg-showcase-1.jpg"
                                        alt="..."
                                        width={300}
                                        height={400}
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                    <h2>Простота использования и настройки</h2>
                                    <p className="lead mb-0">
                                        Landing Page — это всего лишь HTML и CSS с небольшим использованием SCSS для
                                        пользователей, которым нужны расширенные возможности настройки. Сразу из коробки
                                        вы
                                        можете просто добавить свой контент и изображения — и ваша новая
                                        лендинг-страница будет
                                        готова к использованию!
                                    </p>
                                </div>
                            </div>


                        </div>
                    </section>


                </Col>
            </Row>

            <Row xl={2} className="justify-content-center">
                <Col lg={12}>
                    <section className="testimonials text-center bg-light ">
                        <div className="container">
                            <h2 className="mb-5">Состав команды</h2>
                            <div className="row d-flex justify-content-between">
                                <div className="col-lg-2">
                                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                        <Image src="/telegram-cloud-photo-size-2-3978908276710549647-c.jpg" alt={"..."}
                                               width={200} height={200} style={imageStyle} layout="responsive">
                                        </Image>
                                        <h5>Артём</h5>
                                        <p className="font-weight-light mb-0">JavaScript программист</p>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                        <Image src="/5da1ff409f459e8654c8eb93d5ea0b04.jpg" alt={"..."} width={200}
                                               height={200}
                                               style={imageStyle} layout="responsive">
                                        </Image>
                                        <h5>Алексей</h5>
                                        <p className="font-weight-light mb-0">PHP программист</p>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                        <Image src="/telegram-peer-photo-size-2-4394551365959002028-1-0-0.jpg"
                                               alt={"..."}
                                               width={200} height={200} style={imageStyle} layout="responsive">

                                        </Image>
                                        <h5>Сергей</h5>
                                        <p className="font-weight-light mb-0">Менеджер</p>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                        <Image src="/telegram-peer-photo-size-2-5433942415187767234-1-0-0.jpg"
                                               alt={"..."}
                                               width={200} height={200} style={imageStyle} layout="responsive">

                                        </Image>
                                        <h5>Егор</h5>
                                        <p className="font-weight-light mb-0">Тестировщик ПО</p>
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                        <Image src="/Anonymous_emblem.svg.png" alt={"..."} width={200} height={200}
                                               style={imageStyle} layout="responsive">

                                        </Image>
                                        <h5>Валентин</h5>
                                        <p className="font-weight-light mb-0">Bitrix программист</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </Col>
            </Row>


            <Row xl={2} className="justify-content-center m-5">
                <Container>
                    <Row>
                        <Col>
                            <p>Форма обратной связи</p>
                            <p>Предлагаемый удобный в сопровождении инструмент</p>
                            <p>По вопросам сотрудничества пишите</p>
                            <p>
                                <Row>
                                    <Col>
                                        <i className={`bi-mailbox`}> </i><b>Mail:</b> mail@rangeray.ru

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <i className={`bi-phone-fill`} ></i><b>Phone:</b> +7(914)484 9962
                                    </Col>
                                </Row>
                            </p>
                        </Col>
                        <Col>
                            <form>
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputText2">Имя</label>
                                                <input type="text" className="form-control" id="exampleInputText2"
                                                       aria-describedby="emailHelp" placeholder="Имя"/>

                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputText1">Фамилия</label>
                                                <input type="text" className="form-control" id="exampleInputText1"
                                                       placeholder="Фамилия"/>
                                            </div>

                                        </Col>


                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Адрес электронной почты</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1"
                                                       placeholder="Email"/>
                                            </div>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlTextarea1">Напишите нам вопрос</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                                          rows="3"></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <button type="submit" className="btn btn-primary m-1">Отправить</button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Row>

        </>
    </div>);
}


interface HomeProps extends Record<string, unknown> {
    children?: ReactNode;
}


export default withLayout(Home)