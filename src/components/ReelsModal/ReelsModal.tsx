import { ReelsSchema } from '@/libs/directus';
import Modal from '../Modal/Modal';
import Typography from '../Typography/Typography';
import { Fragment } from 'react';
import { CMS_URL } from '@/libs/globals';

interface ReelsModalProps {
  activeModal: string | null;
  handleModalToggle: (activeModal: string) => void;
  reels: ReelsSchema[] | null;
  reelsFiles: any[];
}

export default function ReelsModal(props: ReelsModalProps) {
  const { reels, activeModal, handleModalToggle, reelsFiles } = props;
  const assetUrl = `${CMS_URL}/assets`;

  return (
    <Modal
      id="reels"
      handleModalToggle={handleModalToggle}
      activeModal={activeModal}>
      <div className="title-line mb-6 text-center">
        <Typography variant="h2" className="text-4xl font-bold">
          Reels
        </Typography>
      </div>
      <div className="grid grid-cols-12 gap-8 mb-8">
        <div className="col-span-12">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/F2B0eHOwxPc?controls=1&modestbranding=1&rel=0&showinfo=0"
              title="Damian Ryan - Voice Over Introduction"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </div>
      {reels &&
        reels.map((reel, i) => (
          <Fragment key={i}>
            <Typography variant="h3" className="text-3xl font-semibold mb-4">
              {reel.title}
            </Typography>
            {reel.description && (
              <p className="text-xl mb-4">{reel.description}</p>
            )}
            <div className="grid grid-cols-12 gap-8 mb-8">
              <div className="col-span-12">
                {reel.file &&
                  reel.file.map((fileId, j) => {
                    const fileItem = reelsFiles.find(
                      file => file.id === fileId
                    );

                    if (!fileItem) return null;

                    const fileUrl = `${assetUrl}/${fileItem.directus_files_id}.mp3`;

                    return (
                      <audio controls className="w-full" key={j}>
                        <source src={fileUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    );
                  })}
              </div>
            </div>
          </Fragment>
        ))}
    </Modal>
  );
}
