import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';
import Typography from '@/components/Typography/Typography';

export default function Home() {
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
    if (query.modal === 'voice') {
      setActiveModal('voice');
    } else if (query.modal === 'development') {
      setActiveModal('development');
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
        <main>
          <section className="flex items-end justify-start">
            <Modal
              id="voice"
              handleModalToggle={handleModalToggle}
              activeModal={activeModal}>
              <div className="title-line">
                <Typography variant="h2" className="text-4xl">
                  Voice Acting
                </Typography>
              </div>

              <Tabs>
                <TabList>
                  <Tab>Audiobooks</Tab>
                </TabList>

                <TabPanel>
                  <Typography variant="h3" className="text-2xl mt-3 mb-2">
                    Moshi Kids
                  </Typography>
                  <p className="mb-4">
                    Since November 2023, I have been collaborating with Moshi
                    Kids, lending my voice to a variety of characters and
                    Narrators in their childrens stories. Each voice in the
                    stories I&apos;ve worked on is performed by me, showcasing
                    my ability to bring a wide range of characters and
                    personalities to life.
                  </p>
                  <iframe
                    width="100%"
                    height="120"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1927603154&color=%239b0000&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false"></iframe>
                </TabPanel>
              </Tabs>
            </Modal>

            <Modal
              id="contact"
              handleModalToggle={handleModalToggle}
              activeModal={activeModal}>
              <div className="title-line">
                <Typography variant="h2" className="text-4xl">
                  Contact
                </Typography>
              </div>
            </Modal>
          </section>
        </main>
        <Footer activeModal={activeModal} onModalToggle={handleModalToggle} />
      </div>
    </Fragment>
  );
}
