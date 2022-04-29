import { Button, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import TrackList from "../../components/TrackList";
import { useActions } from "../../hooks/UseAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { RootState } from '../../store/reducers';

const Tracks: NextPage<RootState> = () => {

  const router = useRouter();

  const { getTracks } = useActions()

  const { tracks } = useTypedSelector(state => state.track);

  const onClickAddTrack = () => {
    router.push('/tracks/create')
  }

  useEffect(() => {
    getTracks()
  }, [])

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
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Tracks
