import React, { useState, useRef, useEffect } from 'react';
import { TweenLite, Power3 } from 'gsap';
import CollectionSVG from "../assets/Collection.svg";
import LoginSVG from "../assets/Login.svg";
import RankingSVG from "../assets/Ranking.svg";
import MypageSVG from "../assets/Mypage.svg";
import styled from "@emotion/styled";

interface SidebarProps {
  text: string;
  svg: string;
  onClick?: () => void;
}

const getSVG = (svg: string) => {
  switch (svg) {
    case "Collection": return CollectionSVG;
    case "Login": return LoginSVG;
    case "Ranking": return RankingSVG;
    case "Mypage": return MypageSVG;
  }
};

export const Sidebar = {

  wrapper: ({ children }) => {
    const [expanded, setExpanded] = useState(false);
    const sidebarRef = useRef(null);

    const handleClick = () => {
      setExpanded(!expanded);
    };

    useEffect(() => {
      if (expanded) {
        TweenLite.to(sidebarRef.current, 0.8, { height: 405, ease: Power3.easeOut });
      } else {
        TweenLite.to(sidebarRef.current, 0.8, { height: 105, ease: Power3.easeOut });
      }
    }, [expanded]);

    return (
      <StyledWrapper onClick={handleClick} expanded={expanded} ref={sidebarRef}>
        {children}
      </StyledWrapper>
    );
  },

  Container: ({ children }) => {
    return (
      <StyledContainer>
        {children}
      </StyledContainer>
    );
  },

  item: ({ text, svg, onClick }: SidebarProps) => {
    const SVGcomponent = getSVG(svg);
    return (
      <StyledItem onClick={onClick}>
        <div>
          <img src={SVGcomponent} alt="SVGcomponent" />
          <span className="text">{text}</span>
        </div>
        <LineGray />
      </StyledItem>
    );
  },

  title: ({ text }: { text: string }) => {
    return (<StyledTitle>
      {text}
      <Line />
    </StyledTitle>);
  }
};

const StyledContainer = styled.div`
  display: flex;
  width: 15.625rem;
  padding: 0rem 0.75rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Line = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  flex-shrink: 0;
  border: 1px solid var(--font-color);
`;

const LineGray = styled.div`
  width: 70%;
  flex-shrink: 0;
  border: 0.5px solid var(--googleGray-color);
  margin: 0.2rem 0 0 0;
`;

const StyledWrapper = styled.div<{ expanded: boolean }>`
  width: 17.5rem;
  height: ${(props) => (props.expanded ? '25rem' : '2.5rem')};
  flex-shrink: 0;
  background: var(--googleWhiteGray-color);
  border-radius: 0rem 0rem 0.625rem 0.625rem;
  cursor: pointer;
  transition: height 0.8s ease;
  position: absolute;  // 추가: absolute 위치 유지
  top: 0;  // 필요에 따라 설정
  left: 0;  // 필요에 따라 설정
  overflow: hidden;
  
  &:hover {
    height: ${(props) => (props.expanded ? '25.5rem' : '2.7rem')};
    }
  }
`;

const StyledItem = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-self: stretch;
  gap: 0.5rem;
  color: var(--font-color);
  font-family: Itim;
  font-size: 1.125rem;
  display: flex;

  div {
    display: flex;
    display: inline-flex;
    align-self: stretch;
    align-items: center;
    gap: 0.6875rem;
    width: 100%;
  }

  :hover {
    background-color: #D4D4D4;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

const StyledTitle = styled.div`
  height: 2.5rem;
  color: var(--font-color, #00276F);
  font-family: Itim;
  text-align: center;
  font-family: "Potta One";
  font-size: 1.5rem;
  padding: 2.38rem 0rem 3.30rem;
`;
