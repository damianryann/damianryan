import { useSecretCode } from '@/utilities/useSecretCode';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  const success = useSecretCode();

  const websiteName = title.toLowerCase().replace(' ', '');

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
    <header
      className={clsx('position-fixed w-100 top-0 start-0', {
        'opacity-0': !animate,
        'on-load-animation': animate
      })}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-6 p-4">
            <div className="d-flex flex-column align-items-center align-items-sm-start align-items-md-start justify-content-center">
              <h1 className="display-1 text-primary mb-0">{websiteName}</h1>
              {/*<div className="display-7 mt-n-title">
                Developer | VO Artist | Writer
              </div>*/}
            </div>
          </div>
          {success && (
            <div className="col-xs-12 col-sm-4 col-md-6 d-flex justify-content-center justify-content-sm-end justify-content-md-end align-items-center gap-4 py-0 px-4 p-sm-4">
              <a
                className="icon transform fs-4"
                href="https://x.com/damooriain"
                target="_blank"
                aria-label="Twitter">
                <i className="bi bi-twitter" role="presentation" />
              </a>
              <a
                className="icon transform fs-4"
                href="https://youtube.com/damianryanfilms"
                target="_blank"
                aria-label="YouTube">
                <i className="bi bi-youtube" role="presentation" />
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
