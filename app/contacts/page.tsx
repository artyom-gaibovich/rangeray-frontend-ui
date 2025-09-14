'use client';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const imageStyle = {
  border: '1px solid #fff',
  width: '100%',
};

function Contacts() {
  const formAction = async (formData: FormData) => {
    console.log('formData', formData);

    const name = formData.get('name');
    const surname = formData.get('surname');

    const email = formData.get('email');

    console.log(name, surname, email);

    /*await bot.sendMessage(JSON.stringify({ name, surname, email }));*/
  };

  return (
    <Box className='page-wrapper d-flex flex-column min-vh-100'>
      <Card sx={{ mb: 3 }}>
        <Image
          src='/06_large.png'
          height={200}
          width={999}
          alt='Карта проезда'
          style={{ width: '100%', objectFit: 'cover' }}
        />
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
      </Card>

      <Container>
        <Grid container spacing={3}>
          {/* Контакты */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant='h6'>Форма обратной связи</Typography>
            <Typography>
              Предлагаемый удобный в сопровождении инструмент
            </Typography>
            <Typography>По вопросам сотрудничества пишите:</Typography>
            <Typography>
              <b>Mail:</b> mail@rangeray.ru
            </Typography>
            <Typography>
              <b>Phone:</b> +7(914)484 9962
            </Typography>
          </Grid>

          {/* Форма */}
          <Grid size={{ xs: 12, md: 6 }}>
            <form action={formAction}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <TextField fullWidth label='Имя' name='name' />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField fullWidth label='Фамилия' name='surname' />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label='Email'
                    type='email'
                    name='email'
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label='Напишите нам вопрос'
                    name='question'
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button type='submit' variant='contained' color='primary'>
                    Отправить
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default withLayout(Contacts);
