'use client';

import { motion } from 'framer-motion';

interface SongToggleButtonProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function SongToggleButton({
  label,
  checked,
  onChange,
}: SongToggleButtonProps) {
  return (
    <label className="flex items-center cursor-pointer mt-[5%]">
      <div className="relative">
        <motion.div
          className="w-12 h-6 bg-gray-700 rounded-full shadow-inner"
          onClick={() => onChange(!checked)}
        >
          <motion.div
            className="absolute w-5 h-5 bg-white rounded-full shadow top-0.5 left-0.5"
            animate={{
              x: checked ? 24 : 0,
              backgroundColor: checked ? '#4ade80' : '#ffffff',
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </motion.div>
      </div>
      <div className="ml-3 text-sm font-medium text-gray-300">{label}</div>
    </label>
  );
}
