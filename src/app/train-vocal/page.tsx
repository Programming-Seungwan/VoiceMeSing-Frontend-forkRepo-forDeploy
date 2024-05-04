// 사용자가 ai 커버 음원을 만들 수 있는 페이지. 사용자로부터 여러 음원 파일들을 받아 백엔드로 전송해야 하므로 form 태그가 필요함
import FileUpLoadForm from './_private/FileUploadForm';

export default function Page() {
  return (
    <div>
      This sis train vocal page for making ai cover music
      <FileUpLoadForm />
    </div>
  );
}
