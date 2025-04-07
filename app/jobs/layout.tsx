'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/navbar';
import { FooterSection } from '@/components/footer';


export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="min-h-screen">{children}</div>
      </motion.div>
      <FooterSection />
    </>
  );
}
