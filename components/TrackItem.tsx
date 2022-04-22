import { Card, Grid, IconButton } from "@mui/material";
import React, { SyntheticEvent } from "react";
import { ITrack } from "../types/track";
import styles from '../styles/TrackItem.module.scss'
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";

interface TrackItemProps {
  track: ITrack
  active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {

  const router = useRouter()

  const openTrackInfo = () => {
    router.push(`/tracks/${track._id}`)
  }

  const playTrack = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  const stopTrack = (e: SyntheticEvent) => {
    e.stopPropagation()

  }

  const deleteTrack = (e: SyntheticEvent) => {
    e.stopPropagation()

  }

  return (
    <Card className={styles.track} onClick={openTrackInfo}>
      <IconButton onClick={active ? stopTrack : playTrack}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img alt="img" width={70} height={70} src={`http://localhost:5000/${track.picture}`} />
      <Grid container direction="column" style={{ marginLeft: 20, width: 200 }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 3:22</div>}
      <IconButton onClick={deleteTrack} style={{ marginLeft: "auto" }}>
        <Delete />
      </IconButton>
    </Card>
  )

}

export default TrackItem