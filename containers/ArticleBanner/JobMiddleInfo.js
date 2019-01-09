import React from 'react'
import PropTypes from 'prop-types'

import { DotDivider } from '../../components'
import CityList from './CityList'
import { Wrapper, Salary, Text } from './styles/job_middle_info'

const JobMiddleInfo = ({ data }) => (
  <Wrapper>
    <Salary>{data.salary}</Salary>
    <DotDivider />
    <Text>{data.education}</Text>
    <DotDivider />
    <Text>
      经验
      {data.exp}
    </Text>
    <DotDivider />
    <CityList data={data.tags} />
  </Wrapper>
)

JobMiddleInfo.propTypes = {
  data: PropTypes.shape({
    salary: PropTypes.string,
    education: PropTypes.string,
    exp: PropTypes.string,
    tags: PropTypes.array,
  }).isRequired,
}

JobMiddleInfo.defaultProps = {}

export default JobMiddleInfo
