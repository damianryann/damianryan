import { useState } from 'react';
import { ReelsSchema } from '@/libs/directus';
import Modal from '../Modal/Modal';
import Typography from '../Typography/Typography';
import { CMS_URL } from '@/libs/globals';

interface ReelsModalProps {
  activeModal: string | null;
  handleModalToggle: (activeModal: string) => void;
  reels: ReelsSchema[] | null;
  reelsFiles: any[];
}

export default function ReelsModal(props: ReelsModalProps) {
  const { reelsFiles, activeModal, handleModalToggle } = props;

  const assetUrl = `${CMS_URL}/assets`;

  // -----------------------------------------
  // Define Tabs + Their Previews
  // Replace the embed/img URLs as needed
  // -----------------------------------------
  const demoItems = [
    {
      id: 'animation',
      title: 'Animation Demo',
      preview: (
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/F2B0eHOwxPc"
          title="Animation Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      ),
      audioId: 'animation-audio'
    },
    {
      id: 'anime',
      title: 'Anime Demo',
      preview: (
        <img
          src="/anime-demo.jpg"
          className="w-full h-full object-cover rounded-xl"
        />
      ),
      audioId: 'anime-audio'
    },
    {
      id: 'commercial',
      title: 'Commercial Demo',
      preview: (
        <img
          src="/commercial-demo.jpg"
          className="w-full h-full object-cover rounded-xl"
        />
      ),
      audioId: 'commercial-audio'
    },
    {
      id: 'videogame',
      title: 'Video Game Demo',
      preview: (
        <img
          src="/videogame-demo.jpg"
          className="w-full h-full object-cover rounded-xl"
        />
      ),
      audioId: 'videogame-audio'
    }
  ];

  // -----------------------------------------
  // Currently Selected Tab
  // -----------------------------------------
  const [selected, setSelected] = useState(demoItems[0].id);

  const activeDemo = demoItems.find(item => item.id === selected);

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

      {/* 50/50 Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* LEFT SIDE – Tabs */}
        <div className="col-span-12 md:col-span-6 border-r pr-6">
          <div className="space-y-6">
            {demoItems.map(item => {
              const audioFile = reelsFiles.find(f => f.id === item.audioId);
              const audioUrl = audioFile
                ? `${assetUrl}/${audioFile.directus_files_id}.mp3`
                : null;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setSelected(item.id)}
                  onClick={() => setSelected(item.id)}
                  className={`p-4 rounded-lg cursor-pointer transition
                    ${selected === item.id ? 'bg-primary text-black' : 'hover:bg-primary '}
                  `}>
                  <Typography variant="h3" className="text-2xl font-semibold">
                    {item.title}
                  </Typography>

                  <audio controls className="w-full mt-2">
                    <source src="" type="audio/mpeg" />
                  </audio>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE – Preview */}
        <div className="col-span-12 md:col-span-6">
          <div className="w-full aspect-video">{activeDemo?.preview}</div>
        </div>
      </div>
    </Modal>
  );
}
