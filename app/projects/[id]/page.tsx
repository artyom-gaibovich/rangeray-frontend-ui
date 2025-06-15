import { Metadata } from 'next';
import { withLayout } from '@/layout/Layout';
import { notFound } from 'next/navigation';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  updated: string;
  image: string;
  content: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const res = await fetch(`http://localhost:3001/api/projects/${id}`);
  if (!res.ok) {
    notFound();
  }
  const item: ProjectItem = await res.json();
  return {
    title: `${item.title} | Портфолио`,
    description: item.description,
  };
}

async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3001/api/projects/${id}`);
  const item: ProjectItem = await res.json();

  return (
    <>
      <article className='min-vh-100 container py-5'>
        <Row className='g-4'>
          <Col sm={6} md={6} lg={6}>
            <Image
              className='card-img-top'
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              style={{ objectFit: 'cover', height: '250px' }}
            />
          </Col>
          <Col className='p-6'>
            <h1 className='mb-2 text-2xl font-bold'>{item.title}</h1>
            <span className='text-sm text-gray-500'>{item.updated}</span>
            <p className='mb-4 text-gray-600'>{item.description}</p>
            <p>{item.content}</p>
          </Col>
        </Row>
      </article>
    </>
  );
}

export default withLayout(ProjectDetail);
