'use client';

import Image from 'next/image';

export const RestaurantCard = ({
  image,
  title,
  // categories,
  linkDoCardpio,
  instagram,
}: {
  image: string;
  title: string;
  linkDoCardpio?: string;
  instagram: string;
}) => {
  const link = new URL(instagram);
  const pathName = link.pathname.replace(/\//g, '');
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl_ shadow-[2px_2px_5px_#bdbdbd]">
      <Image layout="responsive" className="rounded-2xl_" width={400} height={100} src={image} alt="banner" />
      <div className="p-3 w-full">
        <div className="mb-4 flex justify-between items-center">
          <p className="mt-1 text-2xl font-semibold text-left ">{title}</p>
          <a target="_blank" href={instagram} className="mt-1 text-left">
            @{pathName}
          </a>
        </div>

        {linkDoCardpio && (
          <a
            target="_blank"
            href={linkDoCardpio}
            className="w-full block text-center p-2 shadow rounded_ bg-cyan-800_ border border-cyan-800 bg-cyan-800 text-white cursor-pointer"
          >
            Ver Cardápio
          </a>
        )}
      </div>
    </div>
  );
};
