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
      className={clsx('main-modal !z-50', {
        invisible: !animate,
        'on-load-animation': animate
      })}>
      <div className="modal-container container my-4">{children}</div>
      <button
        className="bg-primary text-black rounded-full aspect-square absolute top-2 end-3 px-2 hover:scale-110 transition-transform duration-300"
        onClick={() => handleModalToggle(null)}
        aria-label={`Close Modal for ${id}`}>
        <i className="bi bi-x close-icon" />
      </button>
    </div>
  );
}
