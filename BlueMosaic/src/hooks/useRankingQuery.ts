import axios from 'axios';

const data = {
  "id": 0,
  "userId": 0,
  "score": 0
}

export const RankingApis = {
  instance: axios.create({
    baseURL: 'http://localhost:8080/ranking',
    withCredentials: true,
  }),

    // 랭킹 조회
    get: async () => {
      try {
        const res = await RankingApis.instance.get(`/`);
        console.log(res);
        return res.data;
      } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
      }
    },

  // 테스트 데이터 생성
  change: async () => {
    try {
      const res = await RankingApis.instance.put(`/test-making-data` );
      console.log(res);
      return res.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },
};