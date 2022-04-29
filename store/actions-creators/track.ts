import { Dispatch } from "react";
import { CreateTrack, ITrack, TrackAction, TrackActionTypes } from "../../types/track";
import axios from "axios";


export const getTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get('http://localhost:5000/tracks')
      return dispatch({ type: TrackActionTypes.GET_TRACKS, payload: response.data })
    } catch (error) {
      return dispatch({ type: TrackActionTypes.GET_TRACKS_ERROR, payload: "Error" })
    }
  }
}

export const removeTrack = (id) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.delete(`http://localhost:5000/tracks/${id}`)
      return dispatch({ type: TrackActionTypes.REMOVE_TRACK, payload: response.data })
    } catch (error) {
      return dispatch({ type: TrackActionTypes.GET_TRACKS_ERROR, payload: "Error" })
    }
  }
}


export const createTrack = (params: CreateTrack) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.post(`http://localhost:5000/tracks/`, params, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return dispatch({ type: TrackActionTypes.REMOVE_TRACK, payload: response.data })
    } catch (error) {
      return dispatch({ type: TrackActionTypes.GET_TRACKS_ERROR, payload: "Error" })
    }
  }
}