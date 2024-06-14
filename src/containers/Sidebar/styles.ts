import styled from 'styled-components'
import Paragrafo from '../../components/Paragrafo'

export const Descricao = styled(Paragrafo)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
  margin-top: 16px;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
