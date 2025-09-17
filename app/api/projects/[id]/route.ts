import { NextResponse } from 'next/server';
import { portfolioItems } from '@/libs/data';

export const dynamic = 'force-static';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = portfolioItems.find((item) => item.id === parseInt(id));
  if (!project) {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 });
  }
  return NextResponse.json(project);
}
