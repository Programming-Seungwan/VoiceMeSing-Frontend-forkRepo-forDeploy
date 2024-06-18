# Voice Me Sing 프로젝트 frontend

[배포 링크](voice-me-sing-frontend-fork-repo-for-deploy.vercel.app)

## 기술 스택 선정

1. nextJS : 서버 사이드 렌더링 기능을 지원하여 검색 엔진 최적화 가능
2. tailwindCSS : nextJS의 서버 사이드 렌더링을 고려한 스타일링 & 추후 유지 보수가 용이함
3. typescript : vanilla Javascript를 사용하면 잡아내기 힘든 런타임 에러를 컴파일 타임에 잡아냄
4. redux/toolkit : react의 기본 상태를 이용하면 prop drilling이 발생하기에 코드 유지 보수가 어렵고, 불필요한 리렌더링을 줄임으로써 성능을 최적화

## 페이지 별 기능

1. 로그인(`/login`) : 이메일 & 패스워드 기반 방식, sns 로그인 방식
2. 회원 가입(`/signup`) : 이메일 & 패스워드 기반 방식, sns 로그인 방식
3. vocal model 생성(`/train-vocal`) : model name과 사용자의 vocal 파일 업로드
4. create cover song(`/create-song`) : cover name, modelId, 사용자의
5. profile(`/profile`) :
6. collections/model(`/collections/model`): 생성한 model의 정보를 볼 수 있고 이를 기반으로 음원 생성 페이지로 넘어갈 수 있음
7. collections/song(`/collections/song`): 지금까지 생성한 음원을 볼 수 있고, 음원 듣기 & 다운로드가 가능함

### 기본 레이아웃 컨셉

- 화면은 웹 뷰를 기준으로 하며, 추후에 hamburger UI 등을 통해 모바일 디바이스를 지원할 가능성이 있음
- 페이지 간의 이동(navigation)은 화면 왼쪽 영역을 기준으로 링크들이 존재함
- 수직 nav bar는 왼쪽에 고정됨. 즉, 모든 페이지에서 접근할 수 있음. 다만 사용자와의 인터렉션이 일어나고 로그인, 로그아웃 개념은 클라이언트 단에서 받아와야 하므로 클라이언트 컴포넌트로 만들어줌
