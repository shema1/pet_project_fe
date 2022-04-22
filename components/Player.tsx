import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React from 'react';
import styles from '../styles/Player.module.scss';
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';

interface PlayerProps {

}
const Player: React.FC<PlayerProps> = () => {
  const active = false

  const track: ITrack = {
    _id: "625fee887cdbfe7d6207de28",
    name: "name1",
    artist: "artist1",
    text: "text1",
    listens: 0,
    picture: "image/8c65f62a-a296-49a2-ac8a-e2efe2880f19.png",
    audio: "audio/76bc3ab5-2169-496c-aeba-f7ec0c4873bc.mov",
    comments: [],
  }
  const stopTrack = () => {

  }

  const playTrack = () => {

  }

  const onChangeVolume = () => {

  }

  const onChangeProgress = () => {

  }

  return (
    <div className={styles.player}>
      <IconButton onClick={active ? stopTrack : playTrack}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid container direction="column" style={{ marginLeft: 20, width: 200 }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={onChangeProgress} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={onChangeVolume} />
    </div>
  );
};

export default Player;