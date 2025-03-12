'use client';

/* eslint-disable @next/next/no-html-link-for-pages */
import cx from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

const homeId = 'inicio';
const restaurantId = 'restaurantes';
const beachTennisId = 'esportes-de-areia';
const eventsId = 'eventos';
const locationId = 'localizacao';

const links = [
  {
    label: 'Início',
    href: `#${homeId}`,
  },
  {
    label: 'Restaurantes',
    href: `#${restaurantId}`,
  },
  {
    label: 'Esportes de Areia',
    href: `#${beachTennisId}`,
  },
  {
    label: 'Faça seu evento',
    href: `#${eventsId}`,
  },
  {
    label: 'Localização',
    href: `#${locationId}`,
  },
];

// const Form = () => {
//   return (
//     <form className="flex flex-wrap">
//       <input className="p-2 text-gray-600 border border-gray-300 rounded w-full mb-4" type="text" placeholder="Nome" />
//       <input
//         className="p-2 text-gray-600 border border-gray-300 rounded w-full mb-4"
//         type="text"
//         placeholder="E-mail"
//       />
//       <input
//         className="p-2 text-gray-600 border border-gray-300 rounded w-full mb-4"
//         type="text"
//         placeholder="Telefone"
//       />
//       <textarea
//         className="p-2 text-gray-600 border border-gray-300 rounded w-full mb-4"
//         placeholder="Mensagem"
//         rows={4}
//       />
//       <button className="w-full block text-center p-2 shadow rounded_ bg-cyan-800_ border border-cyan-800 bg-cyan-800 text-white cursor-pointer">
//         Enviar
//       </button>
//     </form>
//   );
// };

const Icon = ({ background, title, subtitle }: { background: string; title: string; subtitle?: string }) => {
  return (
    <div className="flex flex-col items-center">
      <Image className="opacity-60 mb-4" width={100} height={100} src={background} alt="banner" />
      <p className="text-center mb-1 text-theme-gray font-semibold">{title}</p>
      {subtitle && <p className="text-center text-sm text-theme-gray">{subtitle}</p>}
    </div>
  );
};

const SummaryCard = ({
  background,
  title,
  subtitle,
  className,
}: {
  background: string;
  title: string;
  subtitle?: string;
  className?: string;
}) => {
  return (
    <div
      className={cx(`darkerlayer flex flex-col items-start justify-end p-3 bg-center bg-cover`, className)}
      style={{ backgroundImage: `url(${background})` }}
    >
      <p className="text-2xl z-20 font-semibold text-center text-white">{title}</p>
      {subtitle && <p className="text-white z-20">{subtitle}</p>}
    </div>
  );
};

const RestaurantCard = ({
  image,
  title,
  // categories,
  instagram,
}: {
  image: string;
  title: string;
  categories: string[];
  instagram: string;
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl_ shadow-[2px_2px_5px_#bdbdbd]">
      <Image layout="responsive" className="rounded-2xl_" width={400} height={100} src={image} alt="banner" />
      <div className="p-3 w-full">
        <div className="mb-1.5 flex justify-between items-center">
          <p className="mt-1 text-2xl font-semibold text-left ">{title}</p>
          <p className="mt-1 text-left">@{instagram}</p>
        </div>

        <div className="flex justify-between">
          <p className="mt-1 text-white text-left">@sushi</p>
        </div>
        <button className="w-full block text-center p-2 shadow rounded_ bg-cyan-800_ border border-cyan-800 bg-cyan-800 text-white cursor-pointer">
          Ver Cardápio
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <div className="hero" />
      <header
        className="
          bg-theme-gray_ w-full hero_"
      >
        <div className="max-w-[1024px] pr-4 py-1 pl-4 flex items-center m-auto justify-between">
          <h1 className="text-[0px] relative -top-2 -left-2">
            Arena Chefz
            <Image width={150} height={120} alt="logo" src={'/assets/logo.png'} />
          </h1>
          <div
            className={cx('relative z-20 md:hidden h-[40px] overflow-hidden', {
              'h-auto overflow-visible': isOpen,
            })}
          >
            <button
              onClick={() => setisOpen((prev) => !prev)}
              className="md:hidden cursor-pointer hover:bg-gray-200 transition-all p-1 rounded"
            >
              <Image width={30} height={30} alt="menu" src={isOpen ? '/assets/close.png' : '/assets/menu.png'} />
            </button>
            <nav className="flex right-0 flex-col absolute text-right bg-white z-20 p-2">
              {links.map((link) => {
                return (
                  <a key={link.href} href={link.href} className="text-white_ mb-2">
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
          <nav className="hidden md:block">
            <ul className="flex justify-between items-center py-4 gap-5">
              {links.map((link) => {
                return (
                  <li key={link.label}>
                    <a href={link.href} className="text-white_">
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      <div className="md:z-10 relative">
        <div className="max-w-[1024px] m-auto px-4 py-20_ text-right h-[50vh] md:h-[70vh] flex justify-end items-end">
          <div className="flex flex-col items-end">
            <p className="text-2xl uppercase mb-2.5 text-gray-600 bg-white inline-block">
              <span className="font-semibold">O melhor espaço </span>
              <br />
              de Mogi das Cruzes
            </p>
            <p className="text-gray-400 bg-white inline-block">Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1024px] m-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-4 mb-20_">
          <SummaryCard
            background="/assets/pizza-serv.jpg"
            subtitle="Comida de qualidade"
            title="Restaurantes"
            className="h-[200px] md:h-[500px]"
          />
          <div className="grid gap-4 md:flex flex-col">
            <div className="grid md:grid-cols-2 gap-4 h-full">
              <SummaryCard
                background="/assets/beachplayer.jpg"
                subtitle="Pratique esporte"
                title="Esportes de Areia"
                className="h-[200px] md:h-full"
              />
              <SummaryCard
                background="/assets/concert.jpg"
                subtitle="Veja seus artistas favoritos"
                title="Eventos"
                className="h-[200px] md:h-full"
              />
            </div>
            <SummaryCard
              background="/assets/friends.jpg"
              subtitle="Se divirta com seus amigos"
              title="Happy Hour"
              className="h-[200px] md:h-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="max-w-[1024px] m-auto px-4 py-10">
          <div className="grid grid-cols-2 gap-4 md:flex justify-between gap-y-11">
            <Icon background="/assets/local.png" title="Bem Localizado" subtitle="Ao lado da estação Brás Cubas" />
            <Icon background="/assets/playtime.png" title="Espaço Kids" subtitle="Para seu filho/a brincar" />
            <Icon background="/assets/veterinary.png" title="Pet Friendly" subtitle="Traga seu amigo de 4 patas" />
            <Icon background="/assets/parking-area.png" title="Estacionamento" subtitle="Seu veículo bem guardado" />
          </div>
        </div>
      </div>
      <div className="bg-theme-gray_" id={restaurantId}>
        <div className="max-w-[1024px]  m-auto px-4 py-20">
          <h2 className="text-3xl text-center mb-10 text-white_ font-semibold text-gray-800">Nossos Restaurantes</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            <RestaurantCard
              image="/assets/sushi.jpg"
              title="Sushi"
              categories={['Japonês', 'Temaki', 'Sushi']}
              instagram="sushi"
            />
            <RestaurantCard
              image="/assets/hamburger.jpg"
              title="Hamburgueria"
              categories={['Fast Food', 'Hamburguer']}
              instagram="hamburguer"
            />
            <RestaurantCard
              image="/assets/pizza.jpg"
              title="Pizzaria 10"
              categories={['Massa', 'Italiana']}
              instagram="hamburguer"
            />
            <RestaurantCard
              image="/assets/sushi.jpg"
              title="Sushi"
              categories={['Japonês', 'Temaki', 'Sushi']}
              instagram="sushi"
            />
            <RestaurantCard
              image="/assets/hamburger.jpg"
              title="Hamburgueria"
              categories={['Fast Food', 'Hamburguer']}
              instagram="hamburguer"
            />
            <RestaurantCard
              image="/assets/pizza.jpg"
              title="Pizzaria 10"
              categories={['Massa', 'Italiana']}
              instagram="hamburguer"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 curve" id={beachTennisId}>
        <div className="max-w-[1024px] m-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center_ flex flex-col justify-center">
              <p className="text-2xl mb-3 font-semibold text-gray-800">Esportes de Areia</p>
              <div className="mb-10">
                <p className="mb-2.5 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue mauris neque, nec molestie odio
                  viverra sed. Proin sollicitudin metus purus.
                </p>

                <p className="mb-2.5 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue mauris neque, nec molestie odio
                  viverra sed. Proin sollicitudin metus purus.
                </p>
                <ul className="mb-4">
                  <li className="list-disc text-gray-600 ml-3">
                    <p>Beach Tennis</p>
                  </li>
                  <li className="list-disc text-gray-600 ml-3">
                    <p>Futevôlei</p>
                  </li>
                  <li className="list-disc text-gray-600 ml-3">
                    <p>Volei de Praia</p>
                  </li>
                  <li className="list-disc text-gray-600 ml-3">
                    <p>Futebol de Praia</p>
                  </li>
                </ul>
                <p className="mb-2.5 text-gray-600">
                  Mauris luctus lorem eleifend aliquam pulvinar. Suspendisse accumsan pellentesque ex, ut auctor elit
                  aliquam sed. Nunc a ante vitae sem tristique tincidunt.
                </p>

                <button className="w-full block text-center p-2 shadow rounded_ bg-cyan-800_ border border-cyan-800 bg-cyan-800 text-white cursor-pointer">
                  Agendar Aula
                </button>
              </div>
            </div>
            <div>
              <Image layout="responsive" width={400} height={400} src="/assets/teacher.jpg" alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100_ curve" id={beachTennisId}>
        <div className="max-w-[1024px] m-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Image layout="responsive" width={400} height={400} src="/assets/pug.jpg" alt="banner" />
            </div>
            <div className="text-center_ flex flex-col justify-center">
              <p className="text-2xl mb-3 font-semibold text-gray-800">Boteco</p>
              <div className="mb-10">
                <p className="mb-2.5 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue mauris neque, nec molestie odio
                  viverra sed. Proin sollicitudin metus purus.
                </p>

                <p className="mb-2.5 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue mauris neque, nec molestie odio
                  viverra sed. Proin sollicitudin metus purus.
                </p>

                <p className="mb-2.5 text-gray-600">
                  Mauris luctus lorem eleifend aliquam pulvinar. Suspendisse accumsan pellentesque ex, ut auctor elit
                  aliquam sed. Nunc a ante vitae sem tristique tincidunt.
                </p>

                <button className="w-full block text-center p-2 shadow rounded_ bg-cyan-800_ border border-cyan-800 bg-cyan-800 text-white cursor-pointer">
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-theme-dark-gray" id={eventsId}>
        <div className="max-w-[1024px] m-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center_ flex flex-col justify-center">
              <p className="text-3xl mb-10 font-semibold text-white">Faça Seu Evento Conosco</p>

              <p className="mb-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie leo placerat nisi convallis
                lobortis.
              </p>
              <p className="mb-4 text-white">
                Nunc eget velit id risus tincidunt facilisis. Suspendisse eget sodales purus, at luctus lacus. Nullam
                elementum tortor a euismod varius.
              </p>
              <ul className="mb-4">
                <li className="list-disc text-white ml-3">
                  <p>Confraternização</p>
                </li>
                <li className="list-disc text-white ml-3">
                  <p>Formatura</p>
                </li>
                <li className="list-disc text-white ml-3">
                  <p>Aniversário</p>
                </li>
                <li className="list-disc text-white ml-3">
                  <p>Evento Coorporativo</p>
                </li>
              </ul>
              <a
                href="/"
                className="w-full block text-center p-2 shadow rounded_ bg-cyan-800_ border border-cyan-800 bg-cyan-800 text-white cursor-pointer"
              >
                Entrar em Contato
              </a>
            </div>
            <div>
              <Image layout="responsive" src={'/assets/event.jpg'} width={400} height={400} alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1024px] m-auto px-4 py-20" id={locationId}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8616320336005!2d-46.23020768070375!3d-23.537478589516894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce770042c9e431%3A0xa0566fd96164ce81!2sArena%20Chefz!5e0!3m2!1sen!2sbr!4v1739229845373!5m2!1sen!2sbr"
              width="100%"
              height="550"
              loading="lazy"
            ></iframe>
          </div>
          <div className="text-center flex flex-col justify-center">
            <p className="text-2xl mb-3 mt-6 md:mt-0 font-semibold text-gray-800">Localização</p>
            <div className="mb-10">
              <p className="text-gray-600">R. Henrique Lizot, 5 - Mogi das Cruzes, SP</p>
              <p className="text-gray-600">Ao lado da estação Brás Cubas</p>
            </div>
            <p className="text-2xl mb-3 font-semibold text-gray-800">Horário de Funcionamento</p>
            <p className="text-gray-600">Segunda a Sexta: 10:00 - 22:00</p>
            <p className="text-gray-600">Sábado: 10:00 - 00:00</p>
            <p className="text-gray-600">Domingo: 10:00 - 22:00</p>
          </div>
        </div>
      </div>
      <footer className="bg-theme-gray w-full">
        <div className="max-w-[1024px] pr-4 m-auto py-20 pl-4 md:flex justify-between">
          <div className="mb-5 md:mb-0">
            <p className="text-white font-semibold mb-3">Links</p>
            {links.map((link) => {
              return (
                <a key={link.label} href={link.href} className="text-white block mb-1">
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col text-right_ mb-5 md:mb-0">
            <p className="text-white font-semibold mb-3">Endereço</p>
            <p className="text-white mb-1">Rua Henrique Lizot, 5</p>
            <p className="text-white mb-1">Mogi das Cruzes, SP</p>
            <p className="text-white mb-1">Ao lado da estação Brás Cubas</p>
          </div>
          <div className="flex flex-col text-right_ mb-5 md:mb-0">
            <p className="text-white font-semibold mb-3">Horário</p>
            <p className="text-white mb-1">Segunda a Sexta: 10:00 - 22:00</p>
            <p className="text-white mb-1">Sábado: 10:00 - 00:00</p>
            <p className="text-white mb-1">Domingo: 10:00 - 22:00</p>
          </div>
          <div className="flex flex-col text-right_">
            <p className="text-white font-semibold mb-3">Contato</p>
            <a target="_blank" href="https://www.instagram.com/arenachefz/" className="text-white mb-1">
              Instagram
            </a>
            <a href="/" className="text-white mb-1">
              Whatsapp
            </a>

            <a href="/" className="text-white mb-1">
              (11) 99999-9999
            </a>
            <a href="/" className="text-white mb-1">
              arenachefz@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
