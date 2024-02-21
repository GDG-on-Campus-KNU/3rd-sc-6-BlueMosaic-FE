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
        console.log(data);

        // 가장 높은 등급이 0번째 오도록, 넣는다. 따라서 앞에다가 계속 넣어야한다.
        // "sproutCleaner": true, [2번째]
        // "experiencedCleaner": true, [1]번째
        // "skilledCleaner": true, [0]번째

        //Cleaner
        AchievementInfo.setCleaner([]);
        AchievementInfo.setDiver([]);
        AchievementInfo.setPhotographer([]);
        AchievementInfo.setPioneer([]);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <AchievementsWrapper>
      <AchievementsFish>
        <span>{AchievementInfoStore.getState().cleaner}</span>
      </AchievementsFish>

      <AchievementsFish>
        <span>{AchievementInfoStore.getState().diver[0]}</span>
      </AchievementsFish>

      <AchievementsFish>
        <span>{AchievementInfoStore.getState().photographer[0]}</span>
      </AchievementsFish>

      <AchievementsFish>
        <span>{AchievementInfoStore.getState().pioneer[0]}</span>
      </AchievementsFish>
    </AchievementsWrapper>
  )
}

export const AchievementsWrapper = styled.section`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 0.9375rem;
flex-shrink: 0;
margin: 0.25rem;
margin-left: auto;
`

export const AchievementsFish = styled.section`
max-height: 100%;
display: flex;
flex-shrink: 0;
align-self: stretch;
${Center}
padding: 0.63rem 1.25rem;
border-radius: 1.25rem;
border: 2px solid var(--googleblue-color);
background: var(--white-color);

span {
  display: flex;
  ${Center}
  align-self: stretch;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.625rem;
}
`