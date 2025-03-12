import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import { readItems, readSingleton } from '@directus/sdk';
import {
  AboutSchema,
  ReelsSchema,
  client,
  NavigationSchema
} from '@/libs/directus';
import AboutModal from '@/components/AboutModal/AboutModal';
import ReelsModal from '@/components/ReelsModal/ReelsModal';

export async function getServerSideProps() {
  try {
    const [about, navigation, reels, reels_files] = await Promise.all([
      client.request(readSingleton('about')),
      client.request(readItems('navigation')),
      client.request(readItems('reels')),
      client.request(readItems('reels_files'))
    ]);

    return {
      props: {
        about,
        navigation,
        reels,
        reelsFiles: reels_files
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        about: null,
        navigation: [],
        reels: [],
        reelsFiles: []
      }
    };
  }
}

export default function Home({
  about,
  navigation,
  reels,
  reelsFiles
}: {
  about: AboutSchema | null;
  navigation: NavigationSchema[];
  reels: ReelsSchema[] | null;
  reelsFiles: any[];
}) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const router = useRouter();
  const { query } = router;

  const handleModalToggle = (modalId: string | null) => {
    if (modalId) {
      // Open the modal and update the URL to include the modal query param
      setActiveModal(modalId);
      router.push(`/?modal=${modalId}`, undefined, { shallow: true });
    } else {
      // Close the modal and reset the URL to the root path
      setActiveModal(null);
      router.push('/', undefined, { shallow: true });
    }
  };

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', appHeight);
    appHeight();
  }, []);

  useEffect(() => {
    // Check the query parameter to see which modal should be opened
    if (query.modal === 'reels') {
      setActiveModal('reels');
    } else if (query.modal === 'about') {
      setActiveModal('about');
    } else if (query.modal === 'contact') {
      setActiveModal('contact');
    } else {
      setActiveModal(null);
    }
  }, [query]);

  const canonicalUrl =
    typeof window === 'undefined' || activeModal === null
      ? 'https://damianryan.co.uk/'
      : `https://damianryan.co.uk/?modal=${activeModal}`;

  return (
    <Fragment>
      <Head>
        <title>Damian Ryan</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} key="canonical" />
      </Head>
      <div className="relative contain">
        <Header title="Damian Ryan" />
        <main className="h-screen w-full flex">
          <section className="flex items-end justify-start">
            {about && (
              <AboutModal
                about={about}
                activeModal={activeModal}
                handleModalToggle={handleModalToggle}
              />
            )}
            {reels && reels.length > 0 && (
              <ReelsModal
                reels={reels}
                reelsFiles={reelsFiles}
                activeModal={activeModal}
                handleModalToggle={handleModalToggle}
              />
            )}
          </section>
        </main>
        <Footer
          data={navigation}
          activeModal={activeModal}
          onModalToggle={handleModalToggle}
        />
      </div>
    </Fragment>
  );
}
