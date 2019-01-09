import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs, animate } from '../../../utils'

export const NumbersWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-top: -2.1rem;
`
export const NumbersInfo = styled(NumbersWrapper)`
  margin-top: 0;
`
// background: ${theme('banner.numberHoverBg')};
export const NumberSection = styled.div`
  ${cs.flexColumn('justify-center')};

  padding: 0 5px;
  border-radius: 4px;

  background: ${({ active }) => (active ? theme('banner.numberHoverBg') : '')};

  &:hover {
    background: ${({ readonly }) =>
      readonly ? '' : theme('banner.numberHoverBg')};
    cursor: ${({ readonly }) => (readonly ? '' : 'pointer')};
  }
`
export const NumberTitle = styled.div`
  color: ${theme('banner.numberDesc')};
  text-align: center;
  &:hover {
    color: ${({ readonly }) => (readonly ? '' : theme('banner.active'))};
    text-decoration: ${({ readonly }) => (readonly ? '' : 'underline')};
    animation: ${animate.pulseRule};
  }
`
export const NumberItem = styled.div`
  font-size: 1.5rem;
  text-align: center;

  color: ${theme('banner.number')};
  &:hover {
    color: ${({ readonly }) => (readonly ? '' : theme('banner.active'))};
    text-decoration: ${({ readonly }) => (readonly ? '' : 'underline')};
    animation: ${animate.pulseRule};
  }
`

export const NumberLoading = styled(Img)`
  fill: ${theme('banner.number')};
  width: 24px;
  height: 24px;
  margin-top: 5px;
  animation: ${animate.rotate360Rule};
`

export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.numberDivider')};
  height: 70%;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
`
