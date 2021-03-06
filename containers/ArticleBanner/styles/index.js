import styled from 'styled-components'

import { theme, cs } from 'utils'

export const Wrapper = styled.nav`
  ${cs.flexColumn('justify-center')};

  position: relative;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
  min-height: 100px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (max-height: 800px) {
    min-height: 130px;
  }
`
export const BannerContent = styled.div`
  ${cs.flex()};
  margin-left: 8%;
  margin-right: 8%;
`
export const Brief = styled.div`
  ${cs.flexColumnGrow()};
  width: 60%;
`
export const Desc = styled.div`
  ${cs.flex('align-center')};
  margin-top: 5px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: ${theme('thread.articleDigest')};
`
export const Avatar = styled.img`
  ${cs.circle('25px')};
  margin-right: 5px;
`
export const MarkTag = styled.div`
  font-size: 0.8em;
  padding: 1px 8px;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${theme('baseColor.error')};
  color: ${theme('baseColor.error')};
  margin-right: 8px;
`
