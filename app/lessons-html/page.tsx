'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { withLayout } from '@/layout/Layout';
import { Section } from '@/components/Section/Section';

function LessonHTML() {
  return (
    <Box sx={{ bgcolor: '#18202A', color: '#fff', minHeight: '100vh' }}>
      <Container sx={{ py: 8 }}>
        {/* Заголовок */}
        <Typography
          variant='h3'
          textAlign='center'
          gutterBottom
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#D33C44',
            mb: 6,
          }}
        >
          HTML: параграфы и переносы
        </Typography>

        {/* Вступление */}
        <Section>
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              textAlign: 'center',
              maxWidth: '700px',
              mx: 'auto',
              mb: 4,
            }}
          >
            Почему текст в HTML выглядит как одно длинное полотно? 🤔 Решение
            простое — параграфы и переносы!
          </Typography>
        </Section>

        {/* Пример параграфов */}
        <Section>
          <Typography
            variant='h5'
            sx={{
              color: '#D33C44',
              mb: 2,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Тег &lt;p&gt; — создаём абзац
          </Typography>

          <Grid container spacing={4} alignItems='center'>
            <Grid item xs={12} md={6}>
              <Typography>
                Каждый абзац автоматически получает перенос строки и отступы.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, bgcolor: '#0f172a' }}>
                <SyntaxHighlighter language='html' style={oneDark}>
                  {`<p>Первый абзац...</p>
<p>Второй абзац...</p>`}
                </SyntaxHighlighter>
              </Paper>
            </Grid>
          </Grid>
        </Section>

        {/* Пример br */}
        <Section>
          <Typography
            variant='h5'
            sx={{
              color: '#D33C44',
              mb: 2,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Тег &lt;br&gt; — перенос строки
          </Typography>

          <Grid container spacing={4} alignItems='center'>
            <Grid item xs={12} md={6}>
              <Typography>
                Один тег = перенос строки. Два тега подряд = пустая строка.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, bgcolor: '#0f172a' }}>
                <SyntaxHighlighter language='html' style={oneDark}>
                  {`Привет<br>Мир`}
                </SyntaxHighlighter>
              </Paper>
            </Grid>
          </Grid>
        </Section>

        {/* Итог */}
        <Section>
          <Typography
            variant='h6'
            sx={{
              textAlign: 'center',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#fff',
              mt: 6,
            }}
          >
            🔑 Помни:
            <br /> <span style={{ color: '#D33C44' }}>&lt;p&gt;</span> = абзац
            <br /> <span style={{ color: '#D33C44' }}>&lt;br&gt;</span> =
            перенос строки
          </Typography>
        </Section>

        {/* Анимация подписки */}
        <Box textAlign='center' mt={8}>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#D33C44',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Подписывайся 🚀
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default withLayout(LessonHTML);
