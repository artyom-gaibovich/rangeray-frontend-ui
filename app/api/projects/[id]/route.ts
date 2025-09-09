import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = [
    {
      id: 1,
      title: 'Сайт PHP',
      description:
        'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
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
  ].find((item) => item.id === parseInt(id));
  if (!project) {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 });
  }
  return NextResponse.json(project);
}
