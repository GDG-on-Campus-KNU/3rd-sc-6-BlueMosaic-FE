import axios from 'axios';

export const MediaApis = {
  instance: axios.create({
    baseURL: 'http://localhost:8080/media',
    withCredentials: true,
  }),

  // 파일 조회
  get: async (userId) => {
    try {
      const res = await MediaApis.instance.get(`/${userId}`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },

  // 파일 수정
  change: async (userId, file) => {
    try {
      const res = await MediaApis.instance.put(`/${userId}`, file, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },

  // 파일 삭제
  delete: async (userId) => {
    try {
      const res = await MediaApis.instance.delete(`/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },

  // 파일 업로드
  upload: async (formData: FormData) => {
    console.log(formData);
    try {
      const res = await MediaApis.instance.post(`/upload`, { file: formData }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },
};
