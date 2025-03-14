'use client';

import Image from 'next/image';

export const Icon = ({ background, title, subtitle }: { background: string; title: string; subtitle?: string }) => {
  return (
    <div className="flex flex-col items-center">
      <Image className="opacity-60 mb-4" width={100} height={100} src={background} alt="banner" />
      <p className="text-center mb-1 text-theme-gray font-semibold">{title}</p>
      {subtitle && <p className="text-center text-sm text-theme-gray">{subtitle}</p>}
    </div>
  );
};
