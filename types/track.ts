import { IComment } from "./comment";

export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: IComment[];
}

export interface TrackState {
  tracks: ITrack[];
  error: string;
}

export enum TrackActionTypes {
  GET_TRACKS = 'GET_TRACKS',
  GET_TRACKS_ERROR = 'GET_TRACKS_ERROR',
  REMOVE_TRACK = 'REMOVE_TRACK',
  CREATE_TRACK = 'CREATE_TRACK'
}


export interface CreateTrack {
  name: string;
  artist: string;
  text: string;
  picture: any;
  audio: any;
}
interface getTracksAction {
  type: TrackActionTypes.GET_TRACKS;
  payload: ITrack[];
}

interface getTracksErrorAction {
  type: TrackActionTypes.GET_TRACKS_ERROR;
  payload: string;
}

interface removeTrackAction {
  type: TrackActionTypes.REMOVE_TRACK;
  payload: string;
}

interface createTrackAction {
  type: TrackActionTypes.CREATE_TRACK;
  payload: ITrack
}


export type TrackAction = getTracksAction | getTracksErrorAction | removeTrackAction | createTrackAction;