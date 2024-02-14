import styled from "@emotion/styled"

export const InputForm = ({ type, name, value, onChange, placeholder, title, ...rest }) => {
  return (
    <InputFormWrapper>
      <span>{title}</span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </InputFormWrapper>
  );
};

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
  
  input{
    display: flex;
    padding: 0.8125rem 14rem 0.8rem 1rem;
    align-items: center;
    border-radius: 0.5rem;
    border: 1px solid var(--Stroke, #DADADA);
  }

  span { 
    display: flex;
    color: var(--1st-text, #4A4543);
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}` 