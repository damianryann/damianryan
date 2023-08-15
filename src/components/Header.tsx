import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  const [isTop, setIsTop] = useState(true);
  const [open, setOpen] = useState(false);

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
            <button
              className="btn btn-outline-secondary border-0"
              onClick={() => setOpen(true)}>
              <i className="bi bi-list display-6" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'offcanvas offcanvas-end visible bg-primary text-white',
          { show: open }
        )}
        tabIndex={-1}
        id="red-tower-menu"
        aria-labelledby="red-tower-menu-title">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="red-tower-menu-title">
            {title}
          </h5>
          <button
            type="button"
            className="btn btn-outline-secondary border-0"
            aria-label="Close"
            onClick={() => setOpen(false)}>
            <i className="bi bi-x h3 m-0 text-dark" aria-hidden={true} />
          </button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
        </div>
      </div>
      <div
        className={clsx('fade', { 'offcanvas-backdrop visible show': open })}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
