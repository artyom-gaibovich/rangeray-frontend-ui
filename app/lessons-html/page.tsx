'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  vscDarkPlus,
  materialOceanic,
  nightOwl,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const codeExample = `<p>Первый абзац...</p>
<p>Второй абзац...</p>`;

const themes = {
  oneDark,
  vscDarkPlus,
  materialOceanic,
  nightOwl,
};

export default function LessonPage() {
  const [theme, setTheme] = useState<keyof typeof themes>('oneDark');

  const handleDownload = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>HTML: параграфы и переносы</title>
  <style>
    body {
      font-family: sans-serif;
      background: #0f1117;
      color: #fff;
      padding: 20px;
    }
    pre {
      border-radius: 10px;
      padding: 12px;
    }
    .title { font-size: 24px; margin-bottom: 12px; }
    .section { margin: 20px 0; }
    button {
      padding: 8px 12px;
      background: #D33C44;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1 class="title">HTML: параграфы и переносы</h1>
  <div class="section">
    <h2>Пример</h2>
    <pre><code>${codeExample}</code></pre>
  </div>
</body>
</html>
    `;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lesson.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className='space-y-4 p-6'>
      <h1 className='text-2xl font-bold'>HTML: параграфы и переносы</h1>

      <div>
        <label className='mr-2'>Выбери тему:</label>
        <select
          className='rounded bg-gray-800 p-2 text-white'
          value={theme}
          onChange={(e) => setTheme(e.target.value as keyof typeof themes)}
        >
          {Object.keys(themes).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <SyntaxHighlighter language='html' style={themes[theme]}>
        {codeExample}
      </SyntaxHighlighter>

      <button onClick={handleDownload}>📥 Скачать HTML</button>
    </div>
  );
}
