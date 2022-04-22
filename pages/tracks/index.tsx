import { Button, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import TrackList from "../../components/TrackList";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const Tracks = () => {

  const router = useRouter()

  const tracks: ITrack[] = [
    {
      _id: "625fee887cdbfe7d6207de28",
      name: "name1",
      artist: "artist1",
      text: "text1",
      listens: 0,
      picture: "image/8c65f62a-a296-49a2-ac8a-e2efe2880f19.png",
      audio: "audio/76bc3ab5-2169-496c-aeba-f7ec0c4873bc.mov",
      comments: [],
    },
    {
      _id: "625fee887cdbfe7d6207de282",
      name: "name2",
      artist: "artist2",
      text: "text2",
      listens: 0,
      picture: "image/8c65f62a-a296-49a2-ac8a-e2efe2880f19.png",
      audio: "audio/76bc3ab5-2169-496c-aeba-f7ec0c4873bc.mov",
      comments: [],
    }
  ]
  const onClickAddTrack = () => {
    router.push('/tracks/create')
  }

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: '80%' }}>
          <Box p={3}>
            <Grid container justifyContent="space-between" alignItems={"center"}>
              <h1>Track list</h1>
              <Button onClick={onClickAddTrack}>Add track</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Tracks