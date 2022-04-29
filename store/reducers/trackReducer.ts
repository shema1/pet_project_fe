import { TrackAction, TrackActionTypes, TrackState } from "../../types/track";
import _ from "lodash";
const initState: TrackState = {
  tracks: [],
  error: ""
}

export const trackReducer = (state = initState, action: TrackAction): TrackState => {
  switch (action.type) {
    case TrackActionTypes.GET_TRACKS:
      return { ...state, tracks: action.payload }
    case TrackActionTypes.GET_TRACKS_ERROR:
      return { ...state, error: action.payload }
    case TrackActionTypes.REMOVE_TRACK:
      console.log("sasd", action.payload)
      return { ...state, tracks: _.filter(state.tracks, elem => elem._id !== action.payload) }
    default:
      return state;
  }
}