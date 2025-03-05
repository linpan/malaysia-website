import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Our Service', href: '/our-service' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Career Opportunities', href: '/career-opportunities' },
  { name: 'FAQ', href: '/faq' },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Button
            className="mt-4 w-full bg-[#FCCE08] text-black hover:opacity-90"
            asChild
          >
            <Link href="/submit-resume">Contact Us</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNav = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="gap-1 lg:gap-2">
        {navLinks.map(link => (
          <NavigationMenuItem key={link.name}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() +
                  " text-sm font-medium lg:text-base"}
              >
                {link.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <div className="relative flex items-center">
          <Link href="/">
            <Image
              src="/brand-logo.svg"
              alt="Talent Pioneer logo"
              width={140}
              height={40}
              className="h-8 w-auto sm:h-10 lg:h-12 p-1.5"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden min-w-[120px] truncate whitespace-nowrap
                       bg-[#FCCE08] text-sm font-semibold text-black
                       hover:opacity-90 md:inline-flex"
            asChild
          >
            <Link href="/submit-resume">Contact Us</Link>
          </Button>

          {/* Mobile Menu */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}