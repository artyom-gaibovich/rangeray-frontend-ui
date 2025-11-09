'use client';
import { useState } from 'react';

export default function LanguageCardCreator() {
  // Редактируемые значения перед сохранением
  const [title, setTitle] = useState('Заголовок');
  const [items, setItems] = useState<string[]>(['1']);
  const [newItem, setNewItem] = useState('');

  // Регулятор ширины карточки (в пикселях)
  const [cardWidth, setCardWidth] = useState(320);

  // Состояние — карточка сохранена и показываем финальную карточку
  const [saved, setSaved] = useState(false);

  // Добавить новый элемент в временный список
  const addItem = () => {
    if (newItem.trim() === '') return;
    setItems((s) => [...s, newItem.trim()]);
    setNewItem('');
  };

  // Обновить элемент по индексу (во время редактирования)
  const updateItem = (index: number, value: string) => {
    setItems((s) => {
      const copy = [...s];
      copy[index] = value;
      return copy;
    });
  };

  // Удалить элемент
  const removeItem = (index: number) => {
    setItems((s) => s.filter((_, i) => i !== index));
  };

  // Сохранить — показать финальную карточку
  const handleSave = () => {
    setSaved(true);
  };

  // Редактировать заново (возврат в режим редактирования)
  const handleEdit = () => setSaved(false);

  return (
    <div className='relative flex min-h-screen items-center justify-center bg-[#0F141A] p-8'>
      <div
        className='mx-auto my-5'
        style={{ maxWidth: '600px', padding: '0 24px' }}
      >
        {/* Режим редактирования (сбор данных) */}
        {!saved ? (
          <div
            className='rounded-lg bg-white p-6'
            style={{ border: '1px solid #ffffff' }}
          >
            <h3
              className='mb-4 text-sm font-semibold'
              style={{ color: '#D33C44' }}
            >
              Настройка карточки
            </h3>

            <label className='mb-1 block text-xs'>Заголовок</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='mb-4 w-full rounded border bg-gray-50 px-3 py-2'
              placeholder='Title'
            />

            <label className='mb-1 block text-xs'>Ширина карточки (px)</label>
            <div className='w-100 mb-4 flex items-center gap-3'>
              <input
                type='range'
                min='150'
                max='500'
                value={cardWidth}
                onChange={(e) => setCardWidth(Number(e.target.value))}
                className='flex-1'
                style={{ width: '80%', cursor: 'pointer' }}
              />
              <span
                className='text-sm font-medium'
                style={{ minWidth: '50px' }}
              >
                {cardWidth}px
              </span>
            </div>

            <label className='mb-1 block text-xs'>Элементы списка</label>

            <div className='mb-2 space-y-2'>
              {items.map((it, idx) => (
                <div key={idx} className='flex items-center gap-2'>
                  <span
                    style={{ color: '#D33C44', fontWeight: 700 }}
                    aria-hidden
                  >
                    +
                  </span>
                  <input
                    value={it}
                    onChange={(e) => updateItem(idx, e.target.value)}
                    className='flex-1 rounded border bg-white px-2 py-1'
                  />
                  <button
                    onClick={() => removeItem(idx)}
                    className='px-2 py-1 text-sm'
                    aria-label={`Удалить ${it}`}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className='flex items-center gap-2'>
              <span style={{ color: '#D33C44', fontWeight: 700 }}>+</span>
              <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') addItem();
                }}
                placeholder='Добавить язык...'
                className='flex-1 rounded border bg-white px-2 py-1'
              />
              <button
                onClick={addItem}
                className='rounded bg-[#D33C44] px-3 py-1 text-white'
                aria-label='Добавить элемент'
              >
                Add
              </button>
            </div>

            <div className='mt-4 flex justify-end gap-2'>
              <button
                onClick={() => {
                  setTitle('Заголовок');
                  setItems(['Элемент 1']);
                  setNewItem('');
                  setCardWidth(320);
                }}
                className='rounded border px-3 py-1'
              >
                Reset
              </button>
              <button
                onClick={handleSave}
                className='rounded bg-[#D33C44] px-4 py-1 text-white'
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          // Финальная карточка (read-only)
          <div
            className='mt-10 overflow-hidden rounded-lg'
            style={{
              border: '1px solid #ffffff',
              width: `${cardWidth}px`,
              maxWidth: '100%',
              margin: '0 auto',
              boxShadow: '0 1px 6px rgba(0,0,0,0.2)',
            }}
          >
            {/* Заголовок карточки */}
            <div
              style={{
                background: '#FFFFFF',
                color: '#D33C44',
                padding: '10px 14px',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              {title}
            </div>

            {/* Контент */}
            <div style={{ background: '#18202A', padding: '12px 14px' }}>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {items.map((it, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 8,
                      color: '#FFFFFF',
                      fontSize: 14,
                    }}
                  >
                    <span style={{ color: '#D33C44', fontWeight: 700 }}>+</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Кнопка Edit в углу с прозрачностью */}
      {saved && (
        <button
          onClick={handleEdit}
          className='fixed bottom-4 right-4 rounded border bg-white px-3 py-1 text-[#D33C44] opacity-30 transition-opacity hover:opacity-100'
          style={{ fontSize: '12px' }}
        >
          Edit
        </button>
      )}
    </div>
  );
}
