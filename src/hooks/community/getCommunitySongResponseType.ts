type communitySongType = {
  coverSongId: number;
  resultSongName: string;
  coverSongFile: any;
  isPublic: boolean;
};

export interface getCommunitySongResponseType {
  status: 'success';
  message: 'get all cover songs successfully';
  data: communitySongType[];
}
