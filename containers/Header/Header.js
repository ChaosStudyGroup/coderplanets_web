import React from 'react'

import { Navigator } from '../../components'
import MailBox from '../MailBox'
import UserLister from '../UserLister'
import Cashier from '../Cashier'
import UpgradePackges from '../UpgradePackges'

import ThreadsNav from './ThreadsNav'
import UserAccount from './UserAccount'
import AddOns from './AddOns'

import {
  Wrapper,
  InnerWrapper,
  RouterWrapper,
  Search,
  HeaderSearchIcon,
  Operations,
} from './styles/header'

// import { uid, Trans } from '../../utils'
import { openDoraemon } from './logic'

const Header = ({
  activeInfo,
  curRoute,
  leftOffset,
  fixed,
  isLogin,
  accountInfo,
  curCommunity,
}) => (
  <Wrapper id="whereCallShowDoraemon" leftOffset={leftOffset} fixed={fixed}>
    <InnerWrapper>
      <RouterWrapper>
        {fixed ? (
          <ThreadsNav activeInfo={activeInfo} curRoute={curRoute} />
        ) : (
          <Navigator
            curCommunity={curCommunity}
            layout={accountInfo.customization.bannerLayout}
          />
        )}
      </RouterWrapper>
      <AddOns />
      <Operations>
        <Search onClick={openDoraemon}>
          <HeaderSearchIcon offsettop="-1px" />
        </Search>

        {isLogin ? <MailBox /> : null}

        <UpgradePackges />
        <UserLister />
        <Cashier />
        <UserAccount isLogin={isLogin} accountInfo={accountInfo} />
      </Operations>
    </InnerWrapper>
  </Wrapper>
)

export default Header
