import Modal from '../Modal/Modal';
import Typography from '../Typography/Typography';

interface ResumeModalProps {
  activeModal: string | null;
  handleModalToggle: (activeModal: string) => void;
}

export default function ResumeModal(props: ResumeModalProps) {
  const { activeModal, handleModalToggle } = props;

  return (
    <Modal
      id="resume"
      handleModalToggle={handleModalToggle}
      activeModal={activeModal}>
      <div className="title-line mb-6 text-center">
        <Typography variant="h2" className="text-4xl font-bold">
          resume
        </Typography>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold border-b pb-2">animation</h2>

        <div className="space-y-4">
          {/* One credit row */}
          <div className="flex flex-col md:flex-row justify-between md:items-center bg-neutral-900/50 p-4 rounded-xl">
            <div>
              <p className="text-xl font-semibold">Hard Evidence (????)</p>
              <p className="text-lg opacity-80">Officer Joe Scroteman</p>
            </div>
            <p className="text-md mt-2 md:mt-0 opacity-70">
              Hook &apos;n Crook Productions –{' '}
              <span className="italic">Pre-production</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center bg-neutral-900/50 p-4 rounded-xl">
            <div>
              <p className="text-xl font-semibold">
                Foxy Fresh Breath Mints (2026)
              </p>
              <p className="text-lg opacity-80">Reuben the Rabbit</p>
            </div>
            <p className="text-md mt-2 md:mt-0 opacity-70">
              Brycen Hassell – <span className="italic">In Production</span>
            </p>
          </div>

          {/* Duplicate these blocks as needed */}
        </div>
      </section>

      <section className="space-y-6 mt-10">
        <h2 className="text-3xl font-bold border-b pb-2">audiobooks</h2>

        <div className="space-y-4">
          {/* One credit row */}
          <div className="flex flex-col md:flex-row justify-between md:items-center bg-neutral-900/50 p-4 rounded-xl">
            <div>
              <p className="text-xl font-semibold">
                Moshi Kids App (2023 - 2024)
              </p>
              <p className="text-lg opacity-80">
                Narrator (various), Rocko, Nodkins, Chop-Chop, Splutnik, Hocus,
                Zonkers, and more.
              </p>
            </div>
            <p className="text-md mt-2 md:mt-0 opacity-70">
              Mind Candy – <span className="italic">Completed</span>
            </p>
          </div>
        </div>
      </section>
    </Modal>
  );
}
