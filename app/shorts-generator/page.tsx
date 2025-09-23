'use client';

import { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeBlockProps = {
  language: string;
  value: string;
};

/**
 * lucario
 holiTheme
 gruvboxDark

 dracula ?

 dark
 darcula
 */
function CodeBlock({ language, value }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={{
        ...lucario,
        'pre[class*="language-"]': {
          background: '#18202A',
          //border: '1px solid #D33C44',
          borderRadius: '12px',
          padding: '16px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
        },
        '.token.string': { color: '#A5D6FF' }, // строки
        '.token.function': { color: '#FFFFFF' }, // функции
        '.token.number': { color: '#A5D6FF' }, // числа
        '.token.operator': { color: '#FFFFFF' }, // операторы
        '.token.comment': { color: '#777777', fontStyle: 'italic' }, // комменты
        '.token.punctuation': { color: '#FFFFFF' }, // скобки, ; и т.д.
      }}
      PreTag='div'
    >
      {value}
    </SyntaxHighlighter>
  );
}

export default function ShortsGeneratorPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string>('');

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant='h3'
        gutterBottom
        sx={{
          fontFamily: "'JetBrains Mono', monospace",
          color: '#D33C44',
          mb: 3,
        }}
      >
        Shorts Generator
      </Typography>

      {/* Ввод */}
      <TextField
        label='Вставь сценарий'
        multiline
        minRows={10}
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant='contained'
        sx={{ bgcolor: '#D33C44', '&:hover': { bgcolor: '#b22d33' }, mb: 4 }}
        onClick={() => setOutput(input)}
      >
        Сгенерировать превью
      </Button>

      {/* Вывод */}
      {output && (
        <Paper sx={{ p: 3, bgcolor: '#18202A', color: '#fff' }}>
          <ReactMarkdown
            children={output}
            components={{
              code({ className, children, ...props }): any {
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <CodeBlock language={match[1]} value={String(children)} />
                ) : (
                  <code style={{ color: '#D33C44' }}>{children}</code>
                );
              },
              p({ children }) {
                return (
                  <Typography
                    variant='body1'
                    sx={{ mb: 2, fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {children}
                  </Typography>
                );
              },
              h2({ children }) {
                return (
                  <Typography
                    variant='h5'
                    sx={{
                      color: '#A5D6FF',
                      mt: 3,
                      mb: 1,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {children}
                  </Typography>
                );
              },
            }}
          />
        </Paper>
      )}
    </Container>
  );
}
