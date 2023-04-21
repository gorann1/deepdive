import { SessionProvider } from 'next-auth/react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { Layouts } from "@/components/common/Layouts";
import { MyAppProps } from "@/components/common/types";
function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page) => page);
  return (
      <SessionProvider session={pageProps.session}>
            <Layout>

      <Component {...pageProps} />
      </Layout>
      </SessionProvider>
  );
}
export default MyApp;
