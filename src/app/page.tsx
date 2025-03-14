import Home from './../components/Home';

export default async function Page() {
  const data = await fetch('http://localhost:3000/api');
  const toJson = await data.json();

  console.log('>>>', toJson);
  return <Home {...toJson} />;
}
