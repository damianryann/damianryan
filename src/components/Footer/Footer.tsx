import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { useSecretCode } from '@/utilities/useSecretCode';

interface FooterProps {
  activeModal: string | null;
  onModalToggle: Function;
}

export default function Footer(props: FooterProps) {
  const { activeModal, onModalToggle } = props;
  const success = useSecretCode();

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
    <footer
      className={clsx('text-white absolute bottom-0 w-full', {
        'opacity-0': !animate,
        'opacity-100 transition-opacity duration-1000': animate
      })}>
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-full md:w-1/2 p-4 overflow-scroll">
            <nav className="flex">
              <ul className="flex space-x-4">
                <li className="nav-item" aria-labelledby="home">
                  <a
                    id="home"
                    className={clsx('text-lg', {
                      'font-bold': activeModal === null,
                      'font-normal': activeModal !== null
                    })}
                    href="#"
                    onClick={() => onModalToggle(null)}>
                    Home
                  </a>
                </li>
                <li className="nav-item" aria-labelledby="development">
                  <a
                    id="development"
                    className={clsx('text-lg', {
                      'font-bold': activeModal === 'development',
                      'font-normal': activeModal !== 'development'
                    })}
                    href="#development"
                    onClick={() => onModalToggle('development')}>
                    Development
                  </a>
                </li>
                <li className="nav-item" aria-labelledby="voice">
                  <a
                    id="voice"
                    className={clsx('text-lg', {
                      'font-bold': activeModal === 'voice',
                      'font-normal': activeModal !== 'voice'
                    })}
                    href="#voice"
                    onClick={() => onModalToggle('voice')}>
                    Voice Acting
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-start md:justify-end items-center bg-gray-800 text-xs md:text-sm">
            <span>&copy; {currentYear} Damian Ryan. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
