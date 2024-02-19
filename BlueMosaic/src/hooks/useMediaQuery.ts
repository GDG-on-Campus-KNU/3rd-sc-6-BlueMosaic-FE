import axios from 'axios';

const data = {
  "file": "string",
  userId: 0,
}

export const MediaApis = {
  instance: axios.create({
    baseURL: 'http://localhost:8080/media',
    withCredentials: true,
  }),

    // 파일 조회
    get: async () => {
      try {
        const res = await MediaApis.instance.get(`/${data.userId}`);
        console.log(res);
        return res.data;
      } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
      }
    },

  // 파일 수정
  change: async () => {
    try {
      const res = await MediaApis.instance.put(`/${data.userId}`, data.file );
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },
  
  // 파일 삭제
  delete: async () => {
    try {
      const res = await MediaApis.instance.delete(`/${data.userId}`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },

  // 파일 업로드
  upload: async () => {
    try {
      const res = await MediaApis.instance.post(`/upload`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },
};