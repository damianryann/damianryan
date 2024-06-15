//import { useSecretCode } from '@/utilities/useSecretCode';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  //const success = useSecretCode();

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
      className={clsx('fixed w-full top-0 left-0', {
        'opacity-0': !animate,
        'opacity-100 transition-opacity duration-1000': animate
      })}>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-7/12 md:w-6/12 p-4">
            <div className="flex flex-col items-center sm:items-start md:items-start justify-center">
              <h1 className="text-6xl text-primary mb-0">{websiteName}</h1>
              {/*<div className="text-2xl mt-n-title">
              Developer | VO Artist | Writer
            </div>*/}
            </div>
          </div>

          <div className="w-full sm:w-5/12 md:w-6/12 flex justify-center sm:justify-end md:justify-end items-center gap-4 py-0 px-4 sm:p-4">
            <a
              className="transform text-2xl"
              href="https://x.com/damooriain"
              target="_blank"
              aria-label="x">
              <i className="bi bi-twitter-x" role="presentation" />
            </a>
            <a
              className="transform text-2xl"
              href="https://www.youtube.com/@DamianRyanVO"
              target="_blank"
              aria-label="YouTube">
              <i className="bi bi-youtube" role="presentation" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
