import { useEffect, useState } from 'react';
import clsx from 'clsx';

interface ModalProps {
  id: string;
  children: React.ReactNode;
  handleModalToggle: Function;
}

export default function Modal(props: ModalProps) {
  const { id, children, handleModalToggle } = props;

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div
      id={id}
      className={clsx('main-modal', {
        invisible: !animate,
        'on-load-animation': animate
      })}>
      <div className="modal-container container-sm my-4">{children}</div>
      <button
        className="btn transform btn-modal position-fixed top-0 end-0 py-1 px-2 m-2"
        onClick={() => handleModalToggle(null)}
        aria-label={`Close Modal for ${id}`}>
        <i className="icon bi bi-x display-5" />
      </button>
    </div>
  );
}
