import styled from "@emotion/styled"
import { Center } from "../../styles/Layout"
import { AchievementsApis } from "../../hooks/useAchivementsQuery"
import { AchievementInfoStore } from "../../stores/AchievementStore"
import { useEffect } from "react"
import { useStore } from "zustand"

export const Achievements = () => {

  const AchievementInfo = useStore(AchievementInfoStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AchievementsApis.get();
        console.log("data", data);

      const cleanerAchievements: string[] = [];
      const diverAchievements: string[] = [];
      const photographerAchievements: string[] = [];
      const pioneerAchievements: string[] = [];
      
        const sortedAchievements = Object.entries(data)
    .filter(([key, value]: [string, unknown]) => /0\d{2}$/.test(key) && typeof value === "boolean")
    .sort((a, b) => {
      const categoryA = parseInt(a[0][0]);
      const categoryB = parseInt(b[0][0]);
      const gradeA = parseInt(a[0].substring(1));
      const gradeB = parseInt(b[0].substring(1));

      if (categoryA !== categoryB) {
        return categoryA - categoryB; // 정렬 기준 1: 카테고리
      } else {
        return gradeB - gradeA; // 정렬 기준 2: 등급
      }
    }) as [string, boolean][];

      console.log(sortedAchievements);
      
      sortedAchievements.forEach(([key, value]) => {
        if (value === true) {
          const cleanedKey = key.replace(/\d/g, '');
          if (cleanedKey.includes("Cleaner")) {
            cleanerAchievements.push(cleanedKey);
          } else if (cleanedKey.includes("Diver")) {
            diverAchievements.push(cleanedKey);
          } else if (cleanedKey.includes("Photographer")) {
            photographerAchievements.push(cleanedKey);
          } else if (cleanedKey.includes("Pioneer")) {
            pioneerAchievements.push(cleanedKey);
          }
        }
      });
            
      
      AchievementInfo.setCleaner(cleanerAchievements);
      AchievementInfo.setDiver(diverAchievements);
      AchievementInfo.setPhotographer(photographerAchievements);
      AchievementInfo.setPioneer(pioneerAchievements);


      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AchievementsWrapper>
      {AchievementInfoStore.getState().cleaner[0] && (
        <AchievementsFish color="--googleblue-color">
          <span>{"experiencedCleaner012"}</span>
        </AchievementsFish>
      )}

      {AchievementInfoStore.getState().diver[0] || (
        <AchievementsFish color="--googleyellow-color">
          <span>{"dolphin"}</span>
        </AchievementsFish>
      )}

      {AchievementInfoStore.getState().photographer[0] || (
        <AchievementsFish color="--googleRed-color">
          <span>{"novicePhotographer"}</span>
        </AchievementsFish>
      )}

      {AchievementInfoStore.getState().pioneer[0] || (
        <AchievementsFish color="--googlegreen-color">
          <span>{"pioneer"}</span>
        </AchievementsFish>
      )}
    </AchievementsWrapper>
  );
};

// ... 이전 코드 ...

export const AchievementsFish = styled.section`
  max-height: 100%;
  display: flex;
  flex-shrink: 0;
  align-self: stretch;
  ${Center}
  padding: 0.33rem 1.25rem;
  border-radius: 1.25rem;
  border: 2px solid var(--googleblue-color);
  background: var(--white-color);
  font-family: Poppins;

  ${({ color }) => `
    border-color: var(${color});
  `}

  span {
    display: flex;
    ${Center}
    align-self: stretch;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 0.825rem;
    font-weight: 700;
    line-height: 1.625rem;
  }
`;

export const AchievementsWrapper = styled.section`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 0.9375rem;
flex-shrink: 0;
margin: 0.50rem;
margin-left: auto;
`