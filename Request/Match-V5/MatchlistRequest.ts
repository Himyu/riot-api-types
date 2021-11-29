import { Region } from '../../Region'

export default interface MatchlistRequest {
  region: Region
  /**
   * Start index: Defaults to 0
  */
  start: number
  /**
   * Match id count: Defaults to 20. Valid values: 0 to 100
  */
  count: number
}

export interface MatchlistFilter {
  /**
   * Set of champion IDs for filtering the match list.
  */
  champion: number[]
  /**
  * Set of queue IDs for filtering the match list.
  * Examples:
  * 400: normal games
  * 420: solo duo
  * 440: flex
  */
  queue: number[]
  /**
  * The end time to use for filtering match list specified as epoch milliseconds. If beginTime is specified, but not endTime, then endTime defaults to the the current unix timestamp in milliseconds (the maximum time range limitation is not observed in this specific case). If endTime is specified, but not beginTime, then beginTime defaults to the start of the account's match history returning a 400 due to the maximum time range limitation. If both are specified, then endTime should be greater than beginTime. The maximum time range allowed is one week, otherwise a 400 error code is returned.
  */
  endTime: number
  /**
  * The begin time to use for filtering match list specified as epoch milliseconds. If beginTime is specified, but not endTime, then endTime defaults to the the current unix timestamp in milliseconds (the maximum time range limitation is not observed in this specific case). If endTime is specified, but not beginTime, then beginTime defaults to the start of the account's match history returning a 400 due to the maximum time range limitation. If both are specified, then endTime should be greater than beginTime. The maximum time range allowed is one week, otherwise a 400 error code is returned.
  */
  beginTime: number
}