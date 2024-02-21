import styled from "@emotion/styled"

export const Button = {
  Wrapper: ({ children }) => {
    return(<ButtonWrapper>{children}</ButtonWrapper>)
  },

  SetButton: ({ text, buttonType, onClick } : { text: string, buttonType: string, onClick: () => void })=> {
    switch (buttonType) {
      case "primary":
        return <ButtonType buttonType="primary" onClick={onClick}>{text}</ButtonType>;
      case "secondary":
        return <ButtonType buttonType="secondary" onClick={onClick}>{text}</ButtonType>;
      default:
        return null; // or handle other cases as needed
  }
  }
}


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
`

const ButtonType = styled.button<{ buttonType: string }>`
  display: flex;
  width: 6rem;
  height: 2.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid var(--googleblue-color, #4285F4);

  background-color: ${(props) => (props.buttonType === 'primary' ? '#1A73E8' : '#ffffff')};
  color: ${(props) => (props.buttonType === 'primary' ? '#ffffff' : '#5F6368')};

  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: 500;
`;