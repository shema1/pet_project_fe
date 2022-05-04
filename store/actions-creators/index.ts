import * as PlayerActionCreators from '../actions-creators/player'
import * as TrackActionCreators from '../actions-creators/track'
import * as AuthActionCreators from '../actions-creators/auth'



export default {
  ...PlayerActionCreators,
  ...TrackActionCreators,
  ...AuthActionCreators
}