import { Box, Button, Grid, TextField, Typography } from '@mui/material';

export default function ContactForm() {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, lg: 5 }}>
        <Typography variant='h5' mb={2}>
          Форма обратной связи
        </Typography>
        <Typography variant='body2' mb={1}>
          Предлагаемый удобный в сопровождении инструмент
        </Typography>
        <Typography variant='body2' mb={2}>
          По вопросам сотрудничества пишите:
        </Typography>
        <Typography variant='body2'>
          <b>Mail:</b> mail@rangeray.ru
        </Typography>
        <Typography variant='body2'>
          <b>Phone:</b> +7 (914) 447-2000
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, lg: 7 }}>
        <Box
          component='form'
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label='Имя' variant='outlined' />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label='Фамилия' variant='outlined' />
            </Grid>
          </Grid>
          <TextField fullWidth label='Email' variant='outlined' />
          <TextField
            fullWidth
            label='Ваш вопрос...'
            multiline
            rows={4}
            variant='outlined'
          />
          <Button variant='contained' color='primary' fullWidth>
            Отправить
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
