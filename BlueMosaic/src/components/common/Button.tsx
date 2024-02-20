import styled from "@emotion/styled"

export const Button = {
  Wrapper: ({ children }) => {
    return(<ButtonWrapper>{children}</ButtonWrapper>)
  },

  setButton: ({ text, buttonType } : { text: string, buttonType: string })=> {
    switch (buttonType) {
      case "primary":
        return <ButtonType buttonType="primary">{text}</ButtonType>;
      case "secondary":
        return <ButtonType buttonType="secondary">{text}</ButtonType>;
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
  border: 1px solid var(----googleblue-color, #4285F4);

  /* Use conditional styling based on the type prop */
  background-color: ${(props) => (props.buttonType === 'primary' ? '#1A73E8' : '#ffffff')};
  color: ${(props) => (props.buttonType === 'primary' ? '#ffffff' : '#5F6368')};

  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;