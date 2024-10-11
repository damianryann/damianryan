import { useEffect, useState } from 'react';
import clsx from 'clsx';

//import { useSecretCode } from '@/utilities/useSecretCode';

interface FooterProps {
  activeModal: string | null;
  onModalToggle: Function;
}

export default function Footer(props: FooterProps) {
  const { activeModal, onModalToggle } = props;
  //const success = useSecretCode();

  const currentYear = new Date().getFullYear();

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 900);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div
      className={clsx('text-white absolute bottom-0 w-full !z-20', {
        'opacity-0': !animate,
        'opacity-100 transition-opacity duration-1000': animate
      })}>
      <div className="flex w-full p-4">
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
                  <li
                    className="nav-item transform duration-300 hover:scale-125"
                    aria-labelledby="voice">
                    <button
                      id="voice"
                      className={clsx('text-2xl', {
                        'font-bold !text-primary !underline !underline-offset-4 !decoration-white':
                          activeModal === 'voice',
                        'font-normal': activeModal !== 'voice'
                      })}
                      onClick={() => onModalToggle('voice')}>
                      Voice Acting
                    </button>
                  </li>
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
  );
}
