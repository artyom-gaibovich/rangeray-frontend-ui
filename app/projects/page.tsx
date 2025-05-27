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


function Projects() {
    return (
        <>
            <Container className="position-relative">
                <Row xl={2} className="justify-content-center">
                    <Col className="m-auto" xl={6}>
                        <h1 className="mb-5">
                            Разработка и поддержка сайтов
                        </h1>
                    </Col>
                </Row>
            </Container>

            <p>"Range-Ray" - интернет-агентство, основная деятельность которого направлена на разработку и поддержку
                интернет-проектов. Мы можем создать продукт любой сложности - от простого сайта-визитки до
                интернет-магазина и сервиса недвижимости.</p>

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
                <div className="col-lg-6 my-auto showcase-text">
                    <h2>Услуги</h2>
                    <div className="lead mb-0">
                        <p><strong>Дизайн:</strong> Веб-дизайн, Фирменный стиль, Логотипы, Брендбуки</p>
                        <p><strong>Разработка:</strong> Разработка сайтов, ПО, Индивидуальные решения "под ключ",
                            Сложные и нестандартные проекты</p>
                        <p><strong>Верстка:</strong> HTML5 + CSS3, Кроссбраузерность и адаптивность (Chrome, Firefox,
                            Opera, Safari)</p>
                        <p><strong>Интеграция:</strong> 1С, Геолокация, Платежные системы, Сервисы доставки, CRM-системы
                        </p>
                        <p><strong>Хостинг и поддержка:</strong> Мониторинг, Развертывание, Резервное копирование, Проф.
                            хостинг, Виртуальный сервер</p>
                        <p><strong>Мобильная разработка:</strong> Адаптация сайтов под мобильные устройства, Разработка
                            мобильных версий</p>
                    </div>
                </div>
            </div>
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
                                пользователей, которым нужны расширенные возможности настройки. Сразу из коробки вы
                                можете просто добавить свой контент и изображения — и ваша новая лендинг-страница будет
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
                                Улучшено и наполнено полезными утилитарными классами — Bootstrap 5 лидирует в разработке
                                мобильных адаптивных сайтов! Все темы от Start Bootstrap теперь используют Bootstrap 5!
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
                                пользователей, которым нужны расширенные возможности настройки. Сразу из коробки вы
                                можете просто добавить свой контент и изображения — и ваша новая лендинг-страница будет
                                готова к использованию!
                            </p>
                        </div>
                    </div>


                </div>
            </section>


            <section className="testimonials text-center bg-light ">
                <div className="container">
                    <h2 className="mb-5">Состав команды</h2>
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-2">
                            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                <Image src="/telegram-cloud-photo-size-2-3978908276710549647-c.jpg" alt={"..."} width={200} height={200} style={imageStyle} layout="responsive">
                                </Image>
                                <h5>Артём</h5>
                                <p className="font-weight-light mb-0">JavaScript программист</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                <Image src="/5da1ff409f459e8654c8eb93d5ea0b04.jpg" alt={"..."} width={200} height={200} style={imageStyle} layout="responsive">
                                </Image>
                                <h5>Алексей</h5>
                                <p className="font-weight-light mb-0">PHP программист</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                <Image src="/telegram-peer-photo-size-2-4394551365959002028-1-0-0.jpg" alt={"..."} width={200} height={200} style={imageStyle}     layout="responsive">

                                </Image>
                                <h5>Сергей</h5>
                                <p className="font-weight-light mb-0">Менеджер</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                <Image src="/telegram-peer-photo-size-2-5433942415187767234-1-0-0.jpg" alt={"..."} width={200} height={200 } style={imageStyle}     layout="responsive">

                                </Image>
                                <h5>Егор</h5>
                                <p className="font-weight-light mb-0">Тестировщик ПО</p>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                <Image src="/Anonymous_emblem.svg.png" alt={"..."} width={200} height={200} style={imageStyle}     layout="responsive">

                                </Image>
                                <h5>Валентин</h5>
                                <p className="font-weight-light mb-0">Bitrix программист</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default withLayout(Projects)
