'use client';

import { useGetCommunitySongs } from '@hooks/community/useGetCommunitySongs';

export default function CommunityContentSection() {
  const { data: communitySongsData } = useGetCommunitySongs();

  return <main className="grow">main section</main>;
}
