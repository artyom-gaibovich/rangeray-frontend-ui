import { withLayout } from '@/layout/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  {
    id: 1,
    title: 'Сайт PHP',
    description:
      'Интеграция с CRM Bitrix Интеграция с CRM BitrixИнтеграция с CRM BitrixИнтеграция с CRM BitrixИнтеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 2,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 3,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 4,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 5,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
];

function Projects() {
  return (
    <>
      <section className='page-wrapper d-flex flex-column min-vh-100 py-5'>
        <Container>
          <Row className='justify-content-center pb-2 text-center'>
            <Col md={7}>
              <h2 className='display-6 fw-bold mb-1'>Портфолио</h2>
              <p className='lead text-muted mb-4'>Результат нашей работы</p>
            </Col>
          </Row>
          <Row className='g-4'>
            {portfolioItems.map((item, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <Link
                  href={`/projects/${item.id}`}
                  className='text-decoration-none text-reset'
                >
                  <div className='card h-100'>
                    <Image
                      className='card-img-top'
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      style={{ objectFit: 'cover', height: '250px' }}
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.title}</h5>
                      <p className='card-text'>{item.description}</p>
                      <p className='card-text'>
                        <small className='text-muted'>
                          Время последнего обновления {item.updated}
                        </small>
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      );
    </>
  );
}

export default withLayout(Projects);
