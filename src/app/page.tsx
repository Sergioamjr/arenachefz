/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header
        className="
          bg-theme-gray w-full"
      >
        <div className="max-w-[1024px] pr-4 py-1 pl-4 flex items-center m-auto justify-between">
          <h1 className="text-[0px]">
            Arena Chefz
            <Image width={120} height={120} alt="logo" src={'/assets/logo.png'} />
          </h1>

          <nav className="hidden md:block">
            <ul className="flex justify-between items-center py-4 gap-5">
              <li>
                <a href="/" className="text-white">
                  Início
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Restaurantes
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Serviços
                </a>
              </li>

              <li>
                <a href="/" className="text-white">
                  Beach Tennis
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Localização
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-5">
            <a target="_blank" href="https://www.instagram.com/arenachefz/" className="text-[0px]">
              Instagram
              <Image width={30} height={30} alt="instagram" src={'/assets/instagram.png'} />
            </a>
            <a href="/" className="text-[0px]">
              Whatsapp
              <Image width={30} height={30} alt="whatsapp" src={'/assets/whatsapp.png'} />
            </a>
          </div>
        </div>
      </header>
      <div>
        <Image layout="responsive" width={1024} height={100} src="/assets/food.jpg" alt="banner" />
      </div>
      <div className="max-w-[1024px] m-auto px-4 py-20">
        <h2 className="text-3xl text-center mb-10">Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-11">
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/assets/beach.png" alt="banner" />
            <p className="mt-1 text-theme-gray border-b-2">Beach Tennis</p>
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/assets/festival.png" alt="banner" />
            <p>Música</p>
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/assets/fast-food.png" alt="banner" />
            <p>Restaurantes</p>
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/assets/playtime.png" alt="banner" />
            <p>Espaço Kids</p>
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/assets/parking-area.png" alt="banner" />
            <p>Estacionamento</p>
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/assets/veterinary.png" alt="banner" />
            <p>Pet Friendly</p>
          </div>
        </div>
      </div>

      <div className="bg-theme-gray">
        <div className="max-w-[1024px]  m-auto px-4 py-20">
          <h2 className="text-3xl text-center mb-10 text-white">Restaurantes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            <div className="flex flex-col border_ _p-2 border-white_">
              <Image className="rounded-2xl" width={400} height={100} src="/assets/sushi.jpg" alt="banner" />
              <div className="flex justify-between mb-4 mt-4">
                <p className="mt-1 text-white text-left">Sushi</p>
                <p className="mt-1 text-white text-left">@sushi</p>
              </div>
              <a href="/" className="text-white bg-gray-600 p-2 rounded-md text-center">
                Ver Cardápio
              </a>
            </div>
            <div className="flex flex-col border_ _p-2 border-white_">
              <Image className="rounded-2xl" width={400} height={100} src="/assets/hamburger.jpg" alt="banner" />
              <div className="flex justify-between mb-4 mt-4">
                <p className="mt-1 text-white text-left">Pizza</p>
                <p className="mt-1 text-white text-left">@restauranttal</p>
              </div>
              <a href="/" className="text-white bg-gray-600 p-2 rounded-md text-center">
                Ver Cardápio
              </a>
            </div>
            <div className="flex flex-col border_ _p-2 border-white_">
              <Image className="rounded-2xl" width={400} height={100} src="/assets/pizza.jpg" alt="banner" />
              <div className="flex justify-between mb-4 mt-4">
                <p className="mt-1 text-white text-left">Hamburgueria</p>
                <p className="mt-1 text-white text-left">@restauranttal</p>
              </div>
              <a href="/" className="text-white bg-gray-600 p-2 rounded-md text-center">
                Ver Cardápio
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-red-500 flex justify-end _pl-4">
          <Image layout="responsive" width={400} height={400} src="/assets/tennis.png" alt="banner" />
        </div>
        <div className="bg-blue-500_">
          <div
            className="bg-yellow-500_
          max-w-[512px] items-start
          w-full py-11 pl-4
          "
          >
            <h2 className="text-3xl text-center_ mb-10 text-white_">Beach Tennis</h2>
            <p className="mb-2.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue mauris neque, nec molestie odio
              viverra sed. Proin sollicitudin metus purus.
            </p>

            <p className="mb-2.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue mauris neque, nec molestie odio
              viverra sed. Proin sollicitudin metus purus.
            </p>

            <p>
              Mauris luctus lorem eleifend aliquam pulvinar. Suspendisse accumsan pellentesque ex, ut auctor elit
              aliquam sed. Nunc a ante vitae sem tristique tincidunt.
            </p>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1024px]_ m-auto_ _px-4 py-20_">
        <h2 className="text-3xl text-center mb-10 absolute left-0 right-0 top-10 bg-white p-2 inline-table m-auto">
          Localização
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8616320336005!2d-46.23020768070375!3d-23.537478589516894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce770042c9e431%3A0xa0566fd96164ce81!2sArena%20Chefz!5e0!3m2!1sen!2sbr!4v1739229845373!5m2!1sen!2sbr"
          width="100%"
          height="750"
          // style="border:0;"
          // allowFullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <footer className="bg-theme-gray w-full">
        <div className="max-w-[1024px] pr-4 py-1 pl-4 flex items-center m-auto justify-between">
          <h1 className="text-[0px]">
            Arena Chefz
            <Image width={120} height={120} alt="logo" src={'/assets/logo.png'} />
          </h1>

          <nav className="hidden md:block">
            <ul className="flex justify-between items-center py-4 gap-5">
              <li>
                <a href="/" className="text-white">
                  Início
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Restaurantes
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Serviços
                </a>
              </li>

              <li>
                <a href="/" className="text-white">
                  Beach Tennis
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Localização
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-5">
            <a target="_blank" href="https://www.instagram.com/arenachefz/" className="text-[0px]">
              Instagram
              <Image width={30} height={30} alt="instagram" src={'/assets/instagram.png'} />
            </a>
            <a href="/" className="text-[0px]">
              Whatsapp
              <Image width={30} height={30} alt="whatsapp" src={'/assets/whatsapp.png'} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
