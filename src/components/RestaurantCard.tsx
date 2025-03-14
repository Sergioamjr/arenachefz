'use client';

import Image from 'next/image';

export const RestaurantCard = ({
  image,
  title,
  // categories,
  instagram,
}: {
  image: string;
  title: string;
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
