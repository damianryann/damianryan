import clsx from 'clsx';

interface ModalProps {
  id: string;
  children: React.ReactNode;
  handleModalToggle: Function;
  activeModal: string | null;
}

export default function Modal(props: ModalProps) {
  const { id, children, handleModalToggle, activeModal } = props;

  return (
    <div
      id={id}
      className={clsx('main-modal !z-50 transition-all duration-800', {
        'translate-y-0 opacity-1': activeModal === id,
        'translate-y-full opacity-0': activeModal !== id
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
