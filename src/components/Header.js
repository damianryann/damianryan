import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function Header({ title }) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 5) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx('position-fixed w-100 top-0', {
        'scroll-background': !isTop
      })}>
      <div className="container-fluid header-padding h-100">
        <div className="row h-100">
          <div className="col-2 col-md-6 d-flex align-items-center">
            <img
              className={clsx('logo', {
                'scroll-background': !isTop
              })}
              src="/logo.png"
              alt="This is Red Tower Logo"
            />
          </div>
          <div className="col-10 col-md-6 d-flex align-items-center justify-content-end">
            <h1 className="title text-white">{title}</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
