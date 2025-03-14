// import dynamic from 'next/dynamic';

// import Home from './../components/Home';

import dynamicc from 'next/dynamic';

export const dynamic = 'force-dynamic';

const Home = dynamicc(() => import('./../components/Home'), { ssr: !!false });

export default async function Page() {
  const prop = 'https://arenachefz.vercel.app/api';
  const local = 'http://localhost:3000/api';
  const url = process.env.NODE_ENV === 'production' ? prop : local;
  const data = await fetch(url);
  const toJson = await data.json();

  return <Home {...toJson} />;
}
