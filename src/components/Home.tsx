'use client';

/* eslint-disable @next/next/no-html-link-for-pages */
import cx from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Icon } from './Icon';
import { RestaurantCard } from './RestaurantCard';
import { RichText } from './RichText';
import { SummaryCard } from './SummaryCard';

const WhatsAppButton = ({ whatsapp, descrioDoBoto }: any) => {
  return (
    <a
      target="_blank"
      href={`https://wa.me/55${whatsapp}`}
      className="w-full block text-center p-2 shadow rounded_ bg-cyan-800_ border border-cyan-800 bg-cyan-800 text-white cursor-pointer"
    >
      {descrioDoBoto}
    </a>
  );
};

const getImageUrl = (imagem: any) => {
  const url = imagem?.fields?.file?.url;
  const baseUrl = 'https:';

  return `${baseUrl}${url}`;
};

const ContentfulImage = ({ imagem }: any) => {
  const url = getImageUrl(imagem);
  const alt = imagem?.fields?.title;
  return <img alt={alt} src={url} />;
};

const getIds = (menu: any) => {
  const restaurantId = menu.find((item: any) => item?.id?.includes('gastronomia'))?.id;
  const beachTennisId = menu.find((item: any) => item?.id?.includes('areia'))?.id;
  const eventsId = menu.find((item: any) => item?.id?.includes('evento'))?.id;
  const locationId = menu.find((item: any) => item?.id?.includes('localizacao'))?.id;
  const inicioId = menu.find((item: any) => item?.id?.includes('inicio'))?.id;
  const happyHourId = menu.find((item: any) => item?.id?.includes('happy-hour'))?.id;

  return {
    happyHourId,
    inicioId,
    restaurantId,
    beachTennisId,
    eventsId,
    locationId,
  };
};

export default function Home(props: any) {
  console.log(props);
  const [isOpen, setisOpen] = useState(false);
  const { happyHourId, inicioId, restaurantId, beachTennisId, eventsId, locationId } = getIds(props.menu);
  const linksReordered = [inicioId, restaurantId, beachTennisId, happyHourId, eventsId, locationId];
  const newMenu = (props?.menu ?? []).sort((a: any, b: any) => {
    return linksReordered.indexOf(a.id) - linksReordered.indexOf(b.id);
  });

  useEffect(() => {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach((link) => {
      link.setAttribute('target', '_blank');
    });
  }, []);
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
              {newMenu.map((link: any) => {
                return (
                  <a key={link.id} href={`#${link.id}`} className="text-white_ mb-2">
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
          <nav className="hidden md:block">
            <ul className="flex justify-between items-center py-4 gap-5">
              {newMenu.map((link: any) => {
                return (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="text-white_">
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      <div className="md:z-10 relative" id={inicioId}>
        <div className="max-w-[1024px] m-auto px-4 py-20_ text-right h-[50vh] md:h-[70vh] flex justify-end items-end">
          <div className="flex flex-col items-end">
            <RichText
              content={props?.banner?.texto}
              classes={{
                heading: 'text-2xl uppercase mb-2.5 text-gray-600 bg-white block',
                p: 'text-gray-400 bg-white inline-block',
              }}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1024px] m-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-4 mb-20_">
          <SummaryCard
            background={getImageUrl(props?.destaques[0]?.imagem)}
            subtitle={props?.destaques[0]?.subtitlo}
            title={props?.destaques[0]?.titulo}
            className="h-[200px] md:h-[500px]"
          />
          <div className="grid gap-4 md:flex flex-col">
            <div className="grid md:grid-cols-2 gap-4 h-full">
              <SummaryCard
                background={getImageUrl(props?.destaques[1]?.imagem)}
                subtitle={props?.destaques[1]?.subtitlo}
                title={props?.destaques[1]?.titulo}
                className="h-[200px] md:h-full"
              />
              <SummaryCard
                background={getImageUrl(props?.destaques[2]?.imagem)}
                subtitle={props?.destaques[2]?.subtitlo}
                title={props?.destaques[2]?.titulo}
                className="h-[200px] md:h-full"
              />
            </div>
            <SummaryCard
              background={getImageUrl(props?.destaques[3]?.imagem)}
              subtitle={props?.destaques[3]?.subtitlo}
              title={props?.destaques[3]?.titulo}
              className="h-[200px] md:h-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="max-w-[1024px] m-auto px-4 py-10">
          <div className="grid grid-cols-2 gap-4 md:flex justify-between gap-y-11">
            {props.comodidades.map((c: any) => {
              return <Icon key={c.id} background={getImageUrl(c.imagem)} title={c?.titulo} subtitle={c?.subtitlo} />;
            })}
          </div>
        </div>
      </div>
      <div className="bg-theme-gray_" id={restaurantId}>
        <div className="max-w-[1024px]  m-auto px-4 py-20">
          <h2 className="text-3xl text-center mb-10 text-white_ font-semibold text-gray-800">Gastronomia</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {props?.restaurantes?.map((restaurante: any) => {
              return (
                <RestaurantCard
                  linkDoCardpio={restaurante?.linkDoCardpio}
                  key={restaurante.id}
                  image={getImageUrl(restaurante?.imagem)}
                  title={restaurante?.nome}
                  instagram={restaurante?.instagram}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 curve" id={beachTennisId}>
        <div className="max-w-[1024px] m-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center_ flex flex-col justify-center">
              <RichText
                content={props?.esportesDeAreia?.texto}
                classes={{
                  heading: 'text-2xl mb-3 font-semibold text-gray-800',
                  p: 'mb-2.5 text-gray-600',
                }}
              />
              <WhatsAppButton {...props?.esportesDeAreia} />
            </div>
            <div>
              <ContentfulImage {...props?.esportesDeAreia} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100_ curve" id={happyHourId}>
        <div className="max-w-[1024px] m-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ContentfulImage {...props?.happyHour} />
            </div>
            <div className="text-center_ flex flex-col justify-center">
              <RichText
                content={props?.happyHour?.texto}
                classes={{
                  heading: 'text-2xl mb-3 font-semibold text-gray-800',
                  p: 'mb-2.5 text-gray-600',
                }}
              />
              <WhatsAppButton {...props?.happyHour} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-theme-dark-gray" id={eventsId}>
        <div className="max-w-[1024px] m-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center_ flex flex-col justify-center">
              <RichText
                content={props?.facaSeuEvento?.texto}
                classes={{
                  heading: 'text-3xl mb-10 font-semibold text-white',
                  p: 'mb-4 text-white',
                  li: 'text-white',
                }}
              />
              <WhatsAppButton {...props?.facaSeuEvento} />
            </div>
            <div>
              <ContentfulImage {...props?.facaSeuEvento} />
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
            <RichText
              content={props?.localizacao?.texto}
              classes={{
                heading: 'text-2xl mb-3 mt-6 md:mt-0 font-semibold text-gray-800',
                p: 'text-gray-600 mb-2',
              }}
            />
          </div>
        </div>
      </div>
      <footer className="bg-theme-gray w-full">
        <div className="max-w-[1024px] pr-4 m-auto py-20 pl-4 md:flex justify-between">
          <div className="mb-5 md:mb-0">
            <p className="text-white font-semibold mb-3">Links</p>
            {newMenu.map((link: any) => {
              return (
                <a key={link.id} href={`#${link.id}`} className="text-white block mb-1">
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col text-right_ mb-5 md:mb-0">
            <p className="text-white font-semibold mb-3">Endereço</p>
            <RichText
              content={props?.rodape?.endereco}
              classes={{
                p: 'text-white mb-1',
              }}
            />
          </div>
          <div className="flex flex-col text-right_ mb-5 md:mb-0">
            <p className="text-white font-semibold mb-3">Horário</p>
            <RichText
              content={props?.rodape?.horario}
              classes={{
                p: 'text-white mb-1',
              }}
            />
          </div>
          <div className="flex flex-col text-right_">
            <p className="text-white font-semibold mb-3">Contato</p>
            <RichText
              content={props?.rodape?.contato}
              classes={{
                p: 'text-white mb-1',
              }}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
