'use client';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import { Box, Card, CardContent, Typography } from '@mui/material';
import ContactForm from '@/components/ContactForm/ContactForm';
import { Section } from '@/components/Section/Section';

function Contacts() {
  const formAction = async (formData: FormData) => {
    console.log('formData', formData);

    const name = formData.get('name');
    const surname = formData.get('surname');

    const email = formData.get('email');

    console.log(name, surname, email);

    /*await bot.sendMessage(JSON.stringify({ name, surname, email }));*/
  };

  console.log(formAction);
  return (
    <Box className='page-wrapper d-flex flex-column min-vh-100'>
      <Card sx={{ mb: 3, border: 'none' }}></Card>
      <Image
        src='/lngr.jpeg'
        alt='Карта проезда'
        width={2048} // исходная ширина
        height={682} // исходная высота
        style={{
          width: '100%', // ширина под контейнер
          height: 'auto', // пропорции сохраняются
          maxWidth: '2048px', // чтобы не растягивалась больше оригинала
        }}
        unoptimized // отключает конвертацию в WebP, сохраняет jpeg
      />

      <Section>
        <CardContent>
          <Typography variant='h6'>Адрес</Typography>
          <Typography variant='body2' color='text.secondary'>
            Адрес: г. Москва, ул. Примерная, д. 12
            <br />
            Ближайшее метро: Примерная станция
            <br />
            Пешком 5 минут от метро вдоль улицы Примерной.
          </Typography>
        </CardContent>
      </Section>
      <Section>
        <ContactForm></ContactForm>
      </Section>
    </Box>
  );
}

export default withLayout(Contacts);
