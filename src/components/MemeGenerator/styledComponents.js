// Style your components here
import styled from 'styled-components'

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  justify-content: center;
`
export const MemeHeading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Label = styled.label`
  color: #7e858e;
`
export const Input = styled.input`
  width: 70%;
  padding: 10px;
  outline: none;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Select = styled.select`
  width: 70%;
  padding: 10px;
  outline: none;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
export const RightContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BgImageContainer = styled.div`
  width: 100%;
  height: 40%;
  background-image: url(${props => props.imageUrl});
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`
export const Content = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize};
`
export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
`
