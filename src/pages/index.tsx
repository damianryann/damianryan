import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';
import { useRouter } from 'next/router';
import Script from 'next/script';

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
        <Script id="site-improve">{`window.interdeal = { "sitekey": "5ad837f98422203038c6afb629411b02", "Position": "Left", "Menulang": "EN-GB", "domains": { "js": "https://cdn.equalweb.com/", "acc": "https://access.equalweb.com/" }, "btnStyle": { "vPosition": [ "80%", null ], "scale": [ "0.8", "0.8" ], "icon": { "type": 11, "shape": "semicircle", "outline": false } } }; (function(doc, head, body){ var coreCall = doc.createElement('script'); coreCall.src = interdeal.domains.js + 'core/4.5.8/accessibility.js'; coreCall.defer = true; coreCall.integrity = 'sha512-edRZXolhkUWHM/uu0oiEu0tD39SPOhnl5a2KM+62YWIfb4M5oSMjvyl2NPXtGq8McfJl88bKtaxljjViGqQXtA=='; coreCall.crossOrigin = 'anonymous'; coreCall.setAttribute('data-cfasync', true ); body? body.appendChild(coreCall) : head.appendChild(coreCall); })(document, document.head, document.body);`}</Script>
      </Head>
      <div className="position-relative">
        <Header title="Damian Ryan" />
        <main>
          <section className="d-flex align-items-end justify-content-start">
            {activeModal === 'work' && (
              <Modal id="work" handleModalToggle={handleModalToggle}>
                <h2>Work</h2>
              </Modal>
            )}
            {activeModal === 'contact' && (
              <Modal id="contact" handleModalToggle={handleModalToggle}>
                <h2>Contact</h2>
              </Modal>
            )}
          </section>
        </main>
        <Footer activeModal={activeModal} onModalToggle={handleModalToggle} />
      </div>
    </Fragment>
  );
}
