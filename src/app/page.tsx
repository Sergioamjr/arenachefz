import dynamicc from 'next/dynamic';

import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

const Home = dynamicc(() => import('./../components/Home'), { ssr: !!false });

const getImageUrl = (imagem: any) => {
  console.log('imgg>>', imagem);
  const url = imagem?.fields?.file?.url;
  const baseUrl = 'https:';

  return `${baseUrl}${url}`;
};

export async function generateMetadata(): Promise<Metadata> {
  const prop = 'https://arenachefz.vercel.app/api';
  const local = 'http://localhost:3000/api';
  const url = process.env.NODE_ENV === 'production' ? prop : local;
  const data = await fetch(url);
  const toJson = await data.json();

  return {
    title: toJson.seo.ttulo,
    description: toJson.seo.descrio,
    openGraph: {
      images: getImageUrl(toJson.seo.imagem),
    },
  };
}

export default async function Page() {
  const prop = 'https://arenachefz.vercel.app/api';
  const local = 'http://localhost:3000/api';
  const url = process.env.NODE_ENV === 'production' ? prop : local;
  const data = await fetch(url);
  const toJson = await data.json();

  return <Home {...toJson} />;
}
