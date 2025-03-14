'use client';

import cx from 'classnames';

export const SummaryCard = ({
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
