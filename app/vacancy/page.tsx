'use client';
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  TextField,
  Paper,
  CircularProgress,
  Snackbar,
  Modal,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const basePrompt = `Вакансия:
Ты — эксперт по проверке вакансий на адекватность и фейки.
Твоя задача — анализировать вакансии, представленные в формате JSON, 
и классифицировать их как "адекватная", "подозрительная" или "фейковая".

Критерии анализа:
1. Срок публикации: если вакансия висит >1 месяца без обновлений — подозрительно.
2. Размытые требования: ищи формулировки вроде "быть проактивным", 
   "желание развиваться" вместо конкретных навыков.
3. Зарплата: слишком широкая или необоснованная вилка — подозрительно.
4. Обещания: золотые горы, льготы, но работы мало — потенциальный фейк.
5. Информация о компании: отсутствие конкретики о бизнесе и проектах — подозрительно.
6. Условия известной компании: если список обязанностей слишком длинный, 
   а зарплата занижена — подозрительно.

Входные данные: JSON вакансии.
Вывод должен быть читаемым и структурированным. 

Пример формата:
---
Вакансия: [название вакансии]  
Компания: [название компании]  
Ссылка: [URL вакансии]  
Вердикт: [адекватная / подозрительная / фейковая]

Причины:
- Критерий 1 (Срок публикации): ...
- Критерий 2 (Размытые требования): ...
- Критерий 3 (Зарплата): ...
- Критерий 4 (Обещания): ...
- Критерий 5 (Информация о компании): ...
- Критерий 6 (Условия известной компании): ...
---

Вакансия:`;

export default function Vacancy() {
  const [url, setUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customPrompt, setCustomPrompt] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [tempPrompt, setTempPrompt] = useState('');

  // Загружаем пользовательский промпт из localStorage
  useEffect(() => {
    const savedPrompt = localStorage.getItem('customPrompt');
    if (savedPrompt) {
      setCustomPrompt(savedPrompt);
    }
  }, []);

  const extractVacancyId = (link: string) => {
    try {
      const urlObj = new URL(link);
      const pathMatch = urlObj.pathname.match(/vacancy\/(\d+)/);
      return pathMatch ? pathMatch[1] : null;
    } catch {
      return null;
    }
  };

  const handleFetch = async () => {
    const vacancyId = extractVacancyId(url);
    if (!vacancyId) {
      alert('Неверный формат ссылки HH');
      return;
    }

    setLoading(true);
    setPrompt('');

    try {
      const res = await fetch(`https://api.hh.ru/vacancies/${vacancyId}`);
      if (!res.ok) throw new Error('Ошибка при получении вакансии');
      const data = await res.json();

      const activePrompt = customPrompt || basePrompt;

      const generatedPrompt = `
${activePrompt}
${JSON.stringify(data, null, 2)}

`;
      setPrompt(generatedPrompt);
    } catch (err) {
      console.error(err);
      alert('Ошибка при получении данных вакансии');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
  };

  const handleOpenModal = () => {
    setTempPrompt(customPrompt || basePrompt);
    setModalOpen(true);
  };

  const handleSavePrompt = () => {
    localStorage.setItem('customPrompt', tempPrompt);
    setCustomPrompt(tempPrompt);
    setModalOpen(false);
  };

  const handleResetPrompt = () => {
    localStorage.removeItem('customPrompt');
    setCustomPrompt(null);
    setModalOpen(false);
  };

  return (
    <Box sx={{ bgcolor: '#18202A', color: '#fff', py: 10, minHeight: '100vh' }}>
      <Container maxWidth='md'>
        <Typography
          variant='h4'
          gutterBottom
          textAlign='center'
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#D33C44',
            mb: 6,
          }}
        >
          Генератор промптов для вакансий hh.ru моему котёнку❤️
          <Box
            sx={{
              mt: 5,
              width: 160,
              height: 160,
              borderRadius: '50%',
              overflow: 'hidden',
              mx: 'auto',
              boxShadow: 3,
            }}
          >
            <Image
              src='/kotenok.jpeg'
              alt='kotenok'
              width={160}
              height={160}
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Typography>

        <Grid container spacing={3} justifyContent='center'>
          <Grid sx={{ xs: 12 }}>
            <TextField
              fullWidth
              variant='outlined'
              label='Вставьте ссылку на вакансию'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              sx={{
                input: { color: '#fff' },
                label: { color: '#fff' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#D33C44' },
                },
                '&:hover .MuiOutlinedInput-root fieldset': {
                  borderColor: '#FF5C5C',
                },
                mb: 2,
              }}
            />

            <Button
              variant='contained'
              color='error'
              onClick={handleFetch}
              fullWidth
              sx={{ py: 1.5 }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color='inherit' />
              ) : (
                'Сгенерировать промпт'
              )}
            </Button>

            <Button
              onClick={handleOpenModal}
              sx={{
                mt: 1.5,
                color: '#aaa',
                textTransform: 'none',
                fontSize: 14,
                '&:hover': { color: '#fff' },
              }}
            >
              Изменить промпт
            </Button>
          </Grid>

          {prompt && (
            <Grid sx={{ xs: 12 }}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: '#1E293B',
                  border: '1px solid #D33C44',
                  position: 'relative',
                  wordBreak: 'break-word',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#fff',
                    mb: 2,
                  }}
                >
                  {prompt.slice(0, 300)}
                </Typography>
                <Button
                  variant='outlined'
                  color='error'
                  startIcon={<ContentCopyIcon />}
                  onClick={handleCopy}
                  sx={{ mt: 2 }}
                >
                  Копировать
                </Button>
              </Paper>
            </Grid>
          )}
        </Grid>

        {/* Модалка для редактирования промпта */}
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: '#1E293B',
              color: '#fff',
              p: 4,
              borderRadius: 3,
              width: '90%',
              maxWidth: 600,
              boxShadow: 24,
            }}
          >
            <Typography variant='h6' sx={{ mb: 2 }}>
              Редактировать промпт
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={12}
              value={tempPrompt}
              onChange={(e) => setTempPrompt(e.target.value)}
              variant='outlined'
              sx={{
                mb: 3,
                '& textarea': { color: '#fff' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#D33C44' },
                },
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={handleResetPrompt} color='error'>
                Сбросить на базовый
              </Button>
              <Button
                onClick={handleSavePrompt}
                variant='contained'
                color='error'
              >
                Сохранить
              </Button>
            </Box>
          </Box>
        </Modal>

        <Snackbar
          open={copied}
          autoHideDuration={2000}
          onClose={() => setCopied(false)}
          message='Скопировано в буфер обмена'
        />
      </Container>
    </Box>
  );
}
