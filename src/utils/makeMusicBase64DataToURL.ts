const makeMusicBase64DataToURL = (fileStream: string) => {
  const binaryString = atob(fileStream);
  const len = binaryString.length;
  const bytes = new Uint8Array(len); // 부호 없는 8비트 배열을 만듬
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i); // 유니코드 값을 반환함
  }

  const blob = new Blob([bytes], { type: 'audio/mp3' });
  const audioURL = URL.createObjectURL(blob);
  return audioURL;
};

export default makeMusicBase64DataToURL;
