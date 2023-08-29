import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';
import { useRouter } from 'next/router';

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const router = useRouter();

  const handleModalToggle = (modalId: string) => {
    setActiveModal(activeModal === modalId ? null : modalId);
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
    const { asPath } = router;
    const hashIndex = asPath.indexOf('#');

    if (hashIndex !== -1) {
      const modalId = asPath.substring(hashIndex + 1);
      if (modalId) {
        setActiveModal(modalId);
      }
    }
  }, [router.asPath]);

  return (
    <Fragment>
      <Head>
        <title>Damian Ryan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="contain">
        <Header title="Damian Ryan" />
        <main>
          <section className="d-flex align-items-end justify-content-start">
            {activeModal === 'work' && (
              <Modal id="work" handleModalToggle={handleModalToggle}>
                <div className="title-line">
                  <h2>Work</h2>
                </div>
              </Modal>
            )}
            {activeModal === 'contact' && (
              <Modal id="contact" handleModalToggle={handleModalToggle}>
                <h2 className="title-line">Contact</h2>
              </Modal>
            )}
          </section>
        </main>
        <Footer activeModal={activeModal} onModalToggle={handleModalToggle} />
      </div>
    </Fragment>
  );
}
