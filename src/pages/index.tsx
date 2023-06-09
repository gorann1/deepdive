import React from "react";

import { MyPage } from "@/components/common/types";
import Header from '@/components/layout/Header';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';
const HomePage: MyPage = () => {
  return (
    <>
          {/* <Seo templateTitle='Home' /> */}
    <Seo />
    <Header />
    <main>
    <section className='bg-white'>
    <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
    <Vercel className='text-5xl' />
      <h1 className='mt-4'>
        Next.js + Tailwind CSS + TypeScript Starter
      </h1>
      <p className='mt-2 text-sm text-gray-800'>
      A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
      Import, Seo, Link component, pre-configured with Husky{' '}
      </p>
      <p className='mt-2 text-sm text-gray-700'>
        <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
        See the repository
        </ArrowLink>
      </p>
      <ButtonLink className='mt-6' href='/components' variant='light'>
        See all components
      </ButtonLink>
      <footer className='absolute bottom-2 text-gray-700'>
        © {new Date().getFullYear()} By{' '}
        <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
        SCUBABooker
        </UnderlineLink>
      </footer>
    </div>
    </section>
    </main>
    </>
  );
};
export default HomePage;
HomePage.Layout = "Main";
// HomePage.Layout = "OtherLayout"; -> error Type '"OtherLayout"' is not assignable to type '"Main" | "Admin" | undefined'.