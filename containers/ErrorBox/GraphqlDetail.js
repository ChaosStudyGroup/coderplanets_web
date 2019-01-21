import React from 'react'

// import { ICON_CMD } from '../../config'
// import { Wrapper } from './styles'
import { Wrapper, TitleWrapper, Dot, Title, Desc } from './styles/details'
import { uid, nilOrEmpty } from '../../utils'

const ChangesetMessages = ({ items }) => {
  if (nilOrEmpty(items)) return null

  return (
    <React.Fragment>
      {items.map(item => (
        <Desc key={uid.gen()}>
          {item.key}: {item.message}
        </Desc>
      ))}
    </React.Fragment>
  )
}

const ChangesetDetails = ({ errors }) => {
  if (nilOrEmpty(errors)) return null

  return (
    <React.Fragment>
      {errors.map(item => (
        <div key={uid.gen()}>
          <TitleWrapper>
            <Dot />
            <Title>
              错误码:&nbsp;
              {item.code}
            </Title>
          </TitleWrapper>
          <ChangesetMessages items={item.message} />
        </div>
      ))}
    </React.Fragment>
  )
}

const ParseDetails = ({ errors }) => {
  if (nilOrEmpty(errors)) return null

  return (
    <React.Fragment>
      {errors.map((item, idx) => (
        <div key={uid.gen()}>
          <TitleWrapper>
            <Dot />
            <Title>{idx}:</Title>
            <Desc>{item.message}</Desc>
          </TitleWrapper>
        </div>
      ))}
    </React.Fragment>
  )
}

const CustomDetails = ({ errors }) => {
  if (nilOrEmpty(errors)) return null

  return (
    <React.Fragment>
      {errors.map(item => (
        <div key={uid.gen()}>
          <TitleWrapper>
            <Dot />
            <Title>错误码: {item.code}</Title>
            <Desc>{item.message}</Desc>
          </TitleWrapper>
        </div>
      ))}
    </React.Fragment>
  )
}

const GraphqlDetail = ({
  graphqlType,
  changesetError,
  parseError,
  customError,
}) => {
  switch (graphqlType) {
    case 'changeset':
      return (
        <Wrapper>
          <ChangesetDetails errors={changesetError} />
        </Wrapper>
      )

    case 'custom':
      return (
        <Wrapper>
          <CustomDetails errors={customError} />
        </Wrapper>
      )

    case 'parse':
      return (
        <Wrapper>
          <ParseDetails errors={parseError} />
        </Wrapper>
      )

    default:
      return <div>default error</div>
  }
}

export default GraphqlDetail