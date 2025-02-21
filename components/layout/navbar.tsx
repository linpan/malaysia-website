import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { Button } from '@headlessui/react';

interface NavLink {
  name: string;
  href: string;
}

export function Header() {
  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Service', href: '/our-service' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Career Opportunities', href: '/career-opportunities' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-blue-600 bg-card bg-opacity-15 shadow">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        <div className="relative">
          <Link href="/">
            <Image
              src="/brand-logo.svg"
              alt="Talent Pioneer logo"
              width={180}
              height={48}
              className="cursor-pointer"
              style={{
                objectFit: 'contain',
              }}
              priority
            />
          </Link>
        </div>

        <div className="flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map(link => (
                <NavigationMenuItem key={link.name}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} -tracking-2 text-brand-neutrals-700 dark:text-brand-neutrals-200 font-mono font-semibold uppercase xl:gap-11`}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:block">
          <Button className="rounded bg-amber-600 px-6 py-2 font-mono font-semibold uppercase text-white hover:bg-amber-500">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
