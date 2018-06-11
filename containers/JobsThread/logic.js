// import R from 'ramda'

import { makeDebugger, $solver } from '../../utils'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:JobsThread')
/* eslint-enable no-unused-vars */

let jobsThread = null

export function someMethod() {}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

export function init(selectedStore) {
  jobsThread = selectedStore
  debug(jobsThread)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
