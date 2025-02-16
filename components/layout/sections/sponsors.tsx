'use client';

import { Icon } from '@/components/ui/icon';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';
import { icons } from 'lucide-react';
interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: 'Crown',
    name: 'Acmebrand',
  },
  {
    icon: 'Vegan',
    name: 'Acmelogo',
  },
  {
    icon: 'Ghost',
    name: 'Acmesponsor',
  },
  {
    icon: 'Puzzle',
    name: 'Acmeipsum',
  },
  {
    icon: 'Squirrel',
    name: 'Acme',
  },
  {
    icon: 'Cookie',
    name: 'Accmee',
  },
  {
    icon: 'Drama',
    name: 'Acmetech',
  },
];

export const SponsorsSection = () => {
  return (
    <section
      id="sponsors"
      className="mx-auto max-w-[75%] gap-10 py-12 sm:pb-32 md:py-24"
    >
      <div className={'container flex flex-col gap-4 text-center'}>
        <h2 className="-tracking-4 text-center text-3xl font-semibold md:text-4xl">
          Trusted by well{' '}
          <span className="text-brandSecondary/70 underline decoration-dotted decoration-2">
            known
          </span>{' '}
          companies
        </h2>
        <p className="[&amp;_b]:md:font-semibold [&amp;_strong]:md:font-semibold md:text-1.5xl/[1.6875rem] text-brand-neutrals-600 dark:text-brand-light-grey-wash whitespace-pre-line !text-pretty font-mono text-base/[1.25rem]">
          Engineers all around the world reach for Cursor by choice.
        </p>
      </div>

      <div className="mx-auto mt-12">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl font-medium md:text-2xl"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="orange"
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
