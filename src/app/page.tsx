import Home from './../components/Home';

export default async function Page() {
  const prop = 'https://arenachefz.vercel.app/api';
  const local = 'http://localhost:3000/api';
  const url = process.env.NODE_ENV === 'production' ? prop : local;
  const data = await fetch(url);
  const toJson = await data.json();

  return <Home {...toJson} />;
}
