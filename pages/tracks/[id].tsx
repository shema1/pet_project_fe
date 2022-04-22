import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

interface TrackPageProps {
  id: string
}

const TrackPage: React.FC<TrackPageProps> = () => {

  const router = useRouter()

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

  const onBack = () => {
    router.back()
  }

  const onSend = () => {

  }

  return (
    <MainLayout>
      <Button variant="outlined" onClick={onBack} style={{ fontSize: 32 }}>
        Back
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img src={`http://localhost:5000/${track.picture}`} width={200} height={200} />
        <div style={{ marginLeft: 20 }}>
          <h1>Track - {track.name}</h1>
          <h1>Artist - {track.artist}</h1>
          <h1>Listens - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Text</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container >
        <TextField
          label="Name"
          fullWidth
        />
        <TextField
          label="Comment"
          fullWidth
          multiline
          rows={4}
        />
        <Button onClick={onSend}>
          Send
        </Button>
      </Grid>
      <div>
        {track.comments.map(comment =>
          <div key={comment._id}>
            <div>Author - {comment.username}</div>
            <div>{comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default TrackPage