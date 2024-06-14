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
      className={clsx('text-white position-absolute bottom-0 w-100', {
        'opacity-0': !animate,
        'on-load-animation': animate
      })}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 ps-4 py-1 overflow-scroll">
            <nav className="navbar navbar-expand p-0">
              <ul className="navbar-nav">
                <li className="nav-item transform me-4" aria-labelledby="home">
                  <a
                    id="home"
                    className={clsx('fs-4', {
                      active: activeModal === null
                    })}
                    href="#"
                    onClick={() => onModalToggle(null)}>
                    Home
                  </a>
                </li>
                <li
                  className="nav-item transform mx-4"
                  aria-labelledby="development">
                  <a
                    id="development"
                    className={clsx('fs-4', {
                      active: activeModal === 'development'
                    })}
                    href="#development"
                    onClick={() => onModalToggle('development')}>
                    Development
                  </a>
                </li>

                <li className="nav-item transform mx-4" aria-labelledby="voice">
                  <a
                    id="voice"
                    className={clsx('fs-4', {
                      active: activeModal === 'voice'
                    })}
                    href="#voice"
                    onClick={() => onModalToggle('voice')}>
                    Voice Acting
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-6 px-4 py-1 d-flex justify-content-sm-start justify-content-md-end align-items-center bg-xs-black bg-sm-black bg-md-none small">
            <span className="smaller">
              &copy; {currentYear} Damian Ryan. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
