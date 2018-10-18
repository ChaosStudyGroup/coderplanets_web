import styled from 'styled-components'

import { theme } from '../../../utils'

export const CardWrapper = styled.div`
  min-height: 180px;
  height: 100%;
  padding: 20px;
  padding-bottom: 0;
  width: 22%;
  max-width: 300px;
  flex-wrap: wrap;
  background: ${theme('preview.articleBg')};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`
export const SidebarTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1em;
`
export const SidebarDesc = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 10px;
  padding-bottom: 15px;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  border-bottom: ${({ noBottom }) => (noBottom ? '' : '1px solid')};
  border-color: ${theme('preview.divider')};
  max-width: 100%;
  flex-wrap: wrap;
`
export const NomoreDesc = styled.div`
  color: ${theme('banner.desc')};
  font-style: italic;
`

export const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
  margin-left: 2px;
`
export const TagDot = styled.div`
  width: 10px;
  height: 10px;
  background: tomato;
  border-radius: 50%;
  margin-right: 5px;
`
export const TagTitle = styled.div`
  margin-top: -5px;
`
