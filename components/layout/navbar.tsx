'use client';

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
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Service', href: '/our-service' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Career Opportunities', href: '/jobs' },
    { name: 'FAQ', href: '/faq' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 bg-blue-600 bg-card bg-opacity-15 shadow">
      <div
        className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="relative">
          <Link href="/">
            <Image
              src="/brand-logo.svg"
              alt="Talent Pioneer logo"
              width={180}
              height={48}
              className="w-[120px] cursor-pointer sm:w-[150px] md:w-[180px]"
              style={{
                objectFit: 'contain',
              }}
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-gray-800 dark:text-gray-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="mx-2 hidden md:flex md:items-center">
          <NavigationMenu>
            <NavigationMenuList className="hidden flex-row space-x-1 md:flex lg:space-x-2">
              {navLinks.map(link => (
                <NavigationMenuItem key={link.name}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} -tracking-2 text-brand-neutrals-700 dark:text-brand-neutrals-200 text-xs font-medium uppercase sm:text-sm md:text-base lg:gap-6 xl:gap-11`}
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
          <Button
            as="a"
            href="/submit-resume"
            className="shadow-xs min-w-max whitespace-nowrap break-keep rounded-md bg-[#FCCE08] px-2 py-1.5 text-xs font-semibold text-black hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-2.5 sm:py-2 sm:text-sm md:px-3.5 md:py-2.5"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 bg-white px-4 pb-6 pt-2 dark:bg-gray-800">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-brand-neutrals-700 dark:text-brand-neutrals-200 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              as="a"
              href="/submit-resume"
              className="shadow-xs mt-4 w-full rounded-md bg-[#FCCE08] px-3.5 py-2.5 text-center text-sm font-semibold text-black hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
