import styled from 'styled-components'

export const Form = styled.form`
  max-width: 548px;
  width: 100%;
  color: #666666;
  font-size: 14px;
  font-weight: bold;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  h3 {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }

  input {
    margin-left: 4px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
