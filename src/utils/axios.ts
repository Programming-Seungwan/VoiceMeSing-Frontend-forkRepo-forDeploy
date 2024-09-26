import axios from 'axios';

const REFRESH_URL = '/reissue';

export const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}`,
  timeout: 2000,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const access = 'token'; // 임시 토큰에 해당. 추후에 전역 상태로부터 불러올 것임

    if (typeof window !== 'undefined') {
      let token: string | null = null;
      // 로그인 했을 때 토큰을 받아와서 헤더에

      if (config.url !== REFRESH_URL) {
        token = '전역 상태관리 at 값'; // store에서 끄집어와야 됨
      } else {
        // 리프레시 url로 향하는 경우. 날라가서 토큰을 엑시오스 인스턴스에 담음
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
