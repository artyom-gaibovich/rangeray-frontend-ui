import {withLayout} from "@/layout/Layout";
import {Col, Container, Form, Row} from "react-bootstrap";
import Image from 'next/image'


const imageStyle = {
    border: '1px solid #fff',
    width: '100%',
}



function Contacts() {
    return <div className="page-wrapper d-flex flex-column min-vh-100">
        <div className="card mb-3">
            <Image src="/06_large.png" height={200} width={999} alt="Карта проезда" style={imageStyle}/>

            <div className="card-body">
                <h5 className="card-title">Адрес</h5>
                <p className="card-text">
                    Адрес: г. Москва, ул. Примерная, д. 12<br/>
                    Ближайшее метро: Примерная станция<br/>
                    Пешком 5 минут от метро вдоль улицы Примерной.
                </p>
            </div>
        </div>
        <Container>
            <Row>
                <Col>
                    <p>Форма обратной связи</p>
                    <p>Предлагаемый удобный в сопровождении инструмент</p>
                    <p>По вопросам сотрудничества пишите</p>
                        <Row>
                            <Col>
                                <i className={`bi-mailbox`}> </i><b>Mail:</b> mail@rangeray.ru
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <i className={`bi-phone-fill`}></i><b>Phone:</b> +7(914)484 9962
                            </Col>
                        </Row>
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
                                        <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
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

    </div>;
}

export default withLayout(Contacts)
