import { Dispatch, SetStateAction } from 'react';

interface selectModelModalProp {
  coverSongId: number | null;
  setCoverSongId: Dispatch<SetStateAction<number | null>>;
}

export default function SelectModelModal({
  coverSongId,
  setCoverSongId,
}: selectModelModalProp) {
  return <div>hi</div>;
}
