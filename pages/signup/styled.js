import styled from 'styled-components'

const ContainerStyled = styled.div`
  width: 500px;
  height: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fffafa;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.04),
    0px 4px 56px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: 40px;
  .form-container {
    width: 100%;
    h2 {
      font-size: 25px;
      color: #554ce1;
      margin-bottom: 2rem;
    }
    .form-field {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
    }
    .form-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 12px;
        line-height: 26px;
        font-weight: 400;
      }
      span {
        margin-left: 0.1rem;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        a {
          color: #e95f8b;
        }
      }
    }
  }
`
export default ContainerStyled
