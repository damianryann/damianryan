import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';
import Typography from '@/components/Typography/Typography';
import AnimatedList from '@/components/AnimatedList/AnimatedList';

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

  const canonicalUrl =
    typeof window === 'undefined' || activeModal === null
      ? 'https://damianryan.co.uk/'
      : `https://damianryan.co.uk/#${activeModal}`;

  return (
    <Fragment>
      <Head>
        <title>Damian Ryan</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} key="canonical" />
      </Head>
      <div className="contain">
        <Header title="Damian Ryan" />
        <main>
          <section className="d-flex align-items-end justify-content-start">
            {activeModal === 'work' && (
              <Modal id="work" handleModalToggle={handleModalToggle}>
                <div className="title-line">
                  <Typography variant="h2">Work</Typography>
                </div>

                <p>
                  Below is a selection of the work I am involved in. There are
                  unfortunately some I cannot showcase due to NDA with previous
                  employers, however I can provide examples and references on
                  request.
                </p>

                <Tabs>
                  <TabList>
                    <Tab>Development</Tab>
                    <Tab>VO</Tab>
                  </TabList>

                  <TabPanel>
                    <Typography variant="h3" className="mt-3 mb-0">
                      Development
                    </Typography>
                    <AnimatedList
                      items={[
                        {
                          name: 'Stephen Graham Projects',
                          image: '/sgp.jpg',
                          description:
                            'React JS Frontend with headless Wordpress.',
                          href: 'https://stephengrahamprojects.com/'
                        },
                        {
                          name: 'Wellow Garage Services',
                          image: '/wellows.jpg',
                          description:
                            'Next JS Static Frontend with SSR.',
                          href: 'https://wellowgarageservices.com/'
                        }
                      ]}
                    />
                  </TabPanel>
                  <TabPanel>
                    <Typography variant="h3" className="my-3">
                      Voice Over
                    </Typography>

                    <p>No VO work available</p>
                  </TabPanel>
                </Tabs>
              </Modal>
            )}
            {activeModal === 'contact' && (
              <Modal id="contact" handleModalToggle={handleModalToggle}>
                <div className="title-line">
                  <Typography variant="h2">Contact</Typography>
                </div>
              </Modal>
            )}
          </section>
        </main>
        <Footer activeModal={activeModal} onModalToggle={handleModalToggle} />
      </div>
    </Fragment>
  );
}
