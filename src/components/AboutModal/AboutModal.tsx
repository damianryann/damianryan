import { AboutSchema } from '@/libs/directus';
import Modal from '../Modal/Modal';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import { CMS_URL } from '@/libs/globals';

interface AboutModalProps {
  about: AboutSchema;
  activeModal: string | null;
  handleModalToggle: (activeModal: string) => void;
}

export default function AboutModal(props: AboutModalProps) {
  const { about, activeModal, handleModalToggle } = props;
  const { title, subtitle, body, image, altText, caption } = about;

  return (
    <Modal
      id="about"
      handleModalToggle={handleModalToggle}
      activeModal={activeModal}>
      <div className="title-line">
        <Typography variant="h2" className="text-4xl">
          {title.toLowerCase()}
        </Typography>
      </div>
      <div className="md:container grid grid-cols-12 gap-4 mt-12">
        <figure className="col-span-12 lg:col-span-6">
          <div className="w-full md:w-[50%] lg:w-[80%] aspect-[3/2] mx-auto">
            <Image
              className="w-full object-cover"
              src={`${CMS_URL}/assets/${image}`}
              alt={altText}
              width={1000}
              height={1400}
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-sm text-center text-gray-200 dark:text-gray-400">
            {caption}
          </figcaption>
        </figure>

        <div className="col-span-12 lg:col-span-6 flex pb-8">
          <div className="border border-primary p-12 my-auto rounded-md bg-black/40">
            <h3 className="text-primary text-5xl mb-4 light">{subtitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </div>
      </div>
    </Modal>
  );
}
