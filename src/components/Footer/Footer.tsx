import { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
import { NavigationSchema } from '@/libs/directus';

interface FooterProps {
  data: NavigationSchema[];
  activeModal: string | null;
  onModalToggle: Function;
}

export default function Footer(props: FooterProps) {
  const { data, activeModal, onModalToggle } = props;

  const currentYear = new Date().getFullYear();

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 1000);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <Fragment>
      <div className="absolute bottom-20 md:bottom-10 right-1 p-4">
        <span className="md:ms-auto italic">
          Photo by{' '}
          <a
            className="hover:text-primary"
            href="https://julianporter.com/"
            target="_blank">
            Julian Porter Photography
          </a>
        </span>
      </div>
      <div
        className={clsx(
          'text-white absolute bottom-0 w-full !z-100 transition duration-1000',
          {
            'translate-y-full': !animate,
            '-translate-y-0': animate
          }
        )}>
        <footer>
          <div className="mx-auto">
            <div className="grid grid-cols-2">
              <div className="col-span-2 md:col-span-1 px-4 py-2 overflow-scroll">
                <nav className="flex">
                  <ul className="flex space-x-8">
                    <li
                      className="nav-item transform duration-300 hover:scale-125"
                      aria-labelledby="home">
                      <button
                        id="home"
                        className={clsx('text-2xl', {
                          'font-bold !text-primary !underline !underline-offset-4 !decoration-white':
                            activeModal === null,
                          'font-normal': activeModal !== null
                        })}
                        onClick={() => onModalToggle(null)}>
                        Home
                      </button>
                    </li>
                    {data &&
                      data.length > 0 &&
                      data.map((datum, i) => {
                        return (
                          <li
                            key={i}
                            className={clsx(
                              'nav-item transform duration-300 hover:scale-125',
                              {
                                hidden: datum.hidden
                              }
                            )}
                            aria-labelledby={String(datum.slug)}>
                            {datum.externalLink ? (
                              <a
                                id={String(datum.slug)}
                                href={datum.slug}
                                className="!text-2xl !font-normal !lowercase"
                                target="_blank">
                                {datum.title}
                              </a>
                            ) : (
                              <button
                                id={String(datum.slug)}
                                className={clsx('text-2xl', {
                                  'font-bold !text-primary !underline !underline-offset-4 !decoration-white':
                                    activeModal === String(datum.slug),
                                  'font-normal':
                                    activeModal !== String(datum.slug)
                                })}
                                onClick={() =>
                                  onModalToggle(String(datum.slug))
                                }>
                                {datum.title}
                              </button>
                            )}
                          </li>
                        );
                      })}
                  </ul>
                </nav>
              </div>
              <div className="col-span-2 md:col-span-1 px-4 py-2 flex justify-start md:justify-end items-center text-xs md:text-sm bg-black md:bg-transparent">
                <span>
                  &copy; {currentYear} Damian Ryan. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}
