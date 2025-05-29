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
        icon: "shield-lock", // Надежность и безопасность
        title: 'Надежность и безопасность',
        description:
            'Все проекты проходят тщательное тестирование и защищены от основных уязвимостей, включая SQL-инъекции, XSS и другие распространённые угрозы.',
    },
    {
        icon: "phone", // Адаптивный дизайн
        title: 'Адаптивный дизайн',
        description:
            'Мы создаём сайты и приложения, которые отлично работают на любых устройствах — от мобильных телефонов до больших экранов.',
    },
    {
        icon: "cpu", // Современные технологии
        title: 'Современные технологии',
        description:
            'Используем актуальные стеки и фреймворки, такие как React, Node.js, TypeScript и Kubernetes для масштабируемых и производительных решений.',
    },
    {
        icon: "person-check", // Индивидуальный подход
        title: 'Индивидуальный подход',
        description:
            'Проектируем интерфейсы и функционал под уникальные потребности каждого клиента, создавая удобные и эффективные решения.',
    },
    {
        icon: "tools", // Поддержка и сопровождение
        title: 'Поддержка и сопровождение',
        description:
            'Оказываем техническую поддержку и регулярное обновление проектов, чтобы ваши интернет-сервисы всегда оставались современными и работали без сбоев.',
    },
];


const portfolioItems = [
    {
        title: "Telegram Bot / АС для автоматического ведения канала",
        description:
            "Автоматизация управления телеграм-каналом с использованием Node.js, TypeScript, React и Telegram API. Запуск в Kubernetes.",
        techStack: ["Node.js", "TypeScript", "React", "Telegram API", "Kubernetes"],
        image: '/image-5_orig.webp',
        updated: "2024-04-10",
    },
    {
        title: "Bybit Trading Bot",
        description:
            "Торговый бот для криптобиржи Bybit с продвинутыми стратегиями и мониторингом в реальном времени.",
        techStack: ["Python", "Asyncio", "REST API", "Docker"],
        image: '/RU_2405-T26987_PM_CopyPro_1600x900.png',
        updated: "2024-03-05",
    },
    {
        title: "Сайт мебель на заказ для Ленинградской области",
        description:
            "Сайт-витрина с заказом мебели на заказ, адаптивный дизайн и удобный UX/UI.",
        techStack: ["React", "Next.js", "CSS Modules", "Node.js"],
        image: '/ytf1cpnvpe8vkn6sm7cl0y3x6haxctnh.jpg',
        updated: "2023-12-20",
    },
    {
        title: "Bitrix Migrator",
        description:
            "Система миграций для проектов на Bitrix, автоматизация переноса данных и структуры.",
        techStack: ["PHP", "Bitrix Framework", "MySQL", "Composer"],
        image: '/8ec9bcc4-27d9-4031-a680-69f2b20f38ad.webp',
        updated: "2024-01-15",
    },
    {
        title: "Vega Content System",
        description:
            "CMS для управления контентом с расширяемой архитектурой, поддержкой мультиязычности и кастомных модулей.",
        techStack: ["Laravel", "Vue.js", "MySQL", "Redis"],
        image: '/nature-pixel-art-ai-generated-3840-x-2160-v0-hdoiobp7mzfc1.webp',
        updated: "2024-02-28",
    },
];


const teamMembers = [
    {
        name: "Артём",
        role: "JavaScript программист",
        image: "/telegram-cloud-photo-size-2-3978908276710549647-c.jpg"
    },
    {
        name: "Алексей",
        role: "PHP программист",
        image: "/5da1ff409f459e8654c8eb93d5ea0b04.jpg"
    },
    {
        name: "Сергей",
        role: "Менеджер",
        image: "/telegram-peer-photo-size-2-4394551365959002028-1-0-0.jpg"
    },
    {
        name: "Егор",
        role: "Тестировщик ПО",
        image: "/telegram-peer-photo-size-2-5433942415187767234-1-0-0.jpg"
    },
    {
        name: "Валентин",
        role: "Bitrix программист",
        image: "/Anonymous_emblem.svg.png"
    }
];

const showcases = [
    {
        title: "Полностью адаптивный дизайн",
        text: `Мы создаём интернет-проекты, которые идеально отображаются и работают на любых устройствах — от мобильных телефонов до десктопов. Адаптивность — ключ к комфортному пользовательскому опыту и высокой конверсии.`,
        image: "/bg-showcase-1.jpg",
        orderImageFirst: false,
    },
    {
        title: "Современные технологии и инструменты",
        text: `Используем передовые технологии, включая Bootstrap 5, React, Node.js и Kubernetes, чтобы создавать масштабируемые, производительные и легко поддерживаемые веб-решения.`,
        image: "/bg-showcase-1.jpg",
        orderImageFirst: true,
    },
    {
        title: "Индивидуальный подход и гибкость",
        text: `Наши проекты легко адаптируются под ваши бизнес-задачи: от простого сайта-визитки до сложных интернет-магазинов и сервисов недвижимости. Мы создаём удобные и масштабируемые решения с возможностью дальнейшего развития.`,
        image: "/bg-showcase-1.jpg",
        orderImageFirst: false,
    },
    {
        title: "Интеграция с внешними сервисами",
        text: `Интегрируем сайты с Telegram, CRM, платёжными системами, картами и другими API. Автоматизируем процессы и упрощаем управление бизнесом.`,
        image: "/bg-showcase-1.jpg",
        orderImageFirst: true,
    },
    {
        title: "Поддержка и развитие проектов",
        text: `Мы не просто сдаём сайт — мы сопровождаем его, развиваем, добавляем новые функции и следим за стабильной работой. Долгосрочное сотрудничество — наша цель.`,
        image: "/bg-showcase-1.jpg",
        orderImageFirst: false,
    },
    {
        title: "SEO и производительность",
        text: `Уделяем внимание быстрой загрузке, чистому коду и оптимизации под поисковые системы, чтобы ваши клиенты быстрее находили вас в интернете.`,
        image: "/bg-showcase-1.jpg",
        orderImageFirst: true,
    },
];


function Home({}: HomeProps) {
    return (<div className="page-wrapper d-flex flex-column min-vh-100">
        <>
            <Row xl={2} className="justify-content-center">
                <Col lg={12}>
                    <h1 className="heading mb-4 display-3 aos-init aos-animate">
                        Разработка и поддержка сайтов
                    </h1>
                    <h2 className="h4 lh-base fw-normal aos-int aos-animate">
                        "Range-Ray" - интернет-агентство, основная деятельность которого направлена на разработку и
                        поддержку
                        интернет-проектов. Мы можем создать продукт любой сложности - от простого сайта-визитки до
                        интернет-магазина и сервиса недвижимости
                    </h2>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col lg={12}>
                    <h2 className="h4 text-center mb-4">Наши преимущества</h2>
                    <Container>
                        <Row className="g-5 justify-content-center">
                            {features.map((feature, idx) => (
                                <Col key={idx} lg={3} sm={6}>
                                    <div className="text-center">
                                        <div className="mb-3">
                                            <i
                                                className={`bi bi-${feature.icon} fs-1`}
                                                style={{color: '#d33c44'}}
                                            ></i>
                                        </div>
                                        <h5>{feature.title}</h5>
                                        <p className="text-muted">{feature.description}</p>
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
                                <div key={idx} className="card" style={{width: '18rem'}}>
                                    <Image
                                        className="card-img-top"
                                        src={item.image}
                                        alt="..."
                                        width={500}
                                        height={500}
                                        style={{objectFit: 'cover'}}
                                    />

                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text flex-grow-1">{item.description}</p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                Технологии: {item.techStack.join(', ')}
                                            </small>
                                        </p>
                                        {item.updated && (
                                            <p className="card-text">
                                                <small className="text-muted">Последнее
                                                    обновление: {item.updated}</small>
                                            </p>
                                        )}

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
                            {showcases.map(({title, text, image, orderImageFirst}, idx) => (
                                <div key={idx} className="row g-0">
                                    {orderImageFirst ? (
                                        <>
                                            <div className="col-lg-6 text-white showcase-img">
                                                <Image
                                                    src={image}
                                                    alt={title}
                                                    width={300}
                                                    height={400}
                                                    layout="responsive"
                                                    objectFit="cover"
                                                />
                                            </div>
                                            <div className="col-lg-6 my-auto showcase-text">
                                                <h2>{title}</h2>
                                                <p className="lead mb-0">{text}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="col-lg-6 order-lg-2 text-white showcase-img">
                                                <Image
                                                    src={image}
                                                    alt={title}
                                                    width={300}
                                                    height={400}
                                                    layout="responsive"
                                                    objectFit="cover"
                                                />
                                            </div>
                                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                                <h2>{title}</h2>
                                                <p className="lead mb-0">{text}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </Col>
            </Row>


            <Row className="justify-content-center my-5">
                <Col lg={12}>
                    <section className="testimonials text-center bg-light py-5">
                        <div className="container">
                            <h2 className="mb-5">Состав команды</h2>
                            <div className="row justify-content-center">
                                {teamMembers.map((member, index) => (
                                    <div className="col-6 col-md-4 col-lg-2 mb-4" key={index}>
                                        <div className="testimonial-item text-center">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={200}
                                                height={200}
                                                style={imageStyle}
                                                layout="responsive"
                                            />
                                            <h5 className="mt-3">{member.name}</h5>
                                            <p className="font-weight-light mb-0">{member.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>

            <Row className="justify-content-center my-5 px-3">
                <Container>
                    <Row className="align-items-start justify-content-center g-5">
                        <Col xs={12} lg={5}>
                            <h4 className="mb-3">Форма обратной связи</h4>
                            <p>Предлагаемый удобный в сопровождении инструмент</p>
                            <p>По вопросам сотрудничества пишите:</p>
                            <div className="mb-2">
                                <i className="bi bi-envelope-fill me-2"></i><b>Mail:</b> mail@rangeray.ru
                            </div>
                            <div>
                                <i className="bi bi-phone-fill me-2"></i><b>Phone:</b> +7 (914) 484-9962
                            </div>
                        </Col>

                        <Col xs={12} lg={6}>
                            <form style={{maxWidth: '500px', margin: '0 auto'}}>
                                <Row className="mb-3">
                                    <Col>
                                        <label htmlFor="firstName" className="form-label">Имя</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="Имя"/>
                                    </Col>
                                    <Col>
                                        <label htmlFor="lastName" className="form-label">Фамилия</label>
                                        <input type="text" className="form-control" id="lastName"
                                               placeholder="Фамилия"/>
                                    </Col>
                                </Row>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="example@email.com"/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Напишите нам вопрос</label>
                                    <textarea className="form-control" id="message" rows={4}
                                              placeholder="Ваш вопрос..."/>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Отправить</button>
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