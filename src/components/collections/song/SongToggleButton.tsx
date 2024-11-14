'use client';

import { motion } from 'framer-motion';
import { useToggleSongOpeness } from '@hooks/collections/song/useToggleSongOpeness';

interface SongToggleButtonProps {
  label: boolean;
  playingSongId: number;
  accessToken: string | null;
}

export default function SongToggleButton({
  label,
  playingSongId,
  accessToken,
}: SongToggleButtonProps) {
  const { mutate: toggleSongOpeness } = useToggleSongOpeness(
    playingSongId,
    accessToken
  );

  return (
    <label className="flex items-center cursor-pointer mt-[5%]">
      <div className="relative">
        <motion.div
          className="w-12 h-6 bg-gray-700 rounded-full shadow-inner"
          onClick={() => {
            toggleSongOpeness();
          }}
        >
          <motion.div
            className="absolute w-5 h-5 bg-white rounded-full shadow top-0.5 left-0.5"
            animate={{
              x: label ? 24 : 0,
              backgroundColor: label ? '#ffffff' : '#ffffff',
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </motion.div>
      </div>
      <div className="ml-3 text-sm font-medium text-gray-300">
        {label === true ? 'public' : 'private'}
      </div>
    </label>
  );
}
