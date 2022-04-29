import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import FileUpload from "../../components/FileUpload";
import StepWrapper from "../../components/StepWrapper";
import { useActions } from "../../hooks/UseAction";
import { useInput } from "../../hooks/useInput";
import MainLayout from "../../layouts/MainLayout";


enum CREATE_FIELDS {
  name = "name",
  artist = "artist",
  text = "text"
}
interface CreateProps {

}

const Create: React.FC<CreateProps> = () => {

  const [activeStep, setActiveStep] = useState(0)
  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)
  const name = useInput('')
  const artist = useInput('')
  const text = useInput('')
  const router = useRouter()
  const { createTrack } = useActions()

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev + 1)
    } else {
      const formData: FormData = new FormData()
      formData.append('name', name.value)
      formData.append('text', text.value)
      formData.append('artist', artist.value)
      formData.append('picture', picture)
      formData.append('audio', audio)
      createTrack(formData, callback)
    }
  }

  const callback = () => {
    router.push('/tracks')
  }

  const back = () => {
    setActiveStep(prev => prev - 1)
  }

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
          <Grid container direction={"column"} style={{ padding: 20 }}>
            <TextField
              {...name}
              style={{ marginTop: 10 }}
              label="Track name"
            />
            <TextField
              {...artist}
              style={{ marginTop: 10 }}
              label="Author"
            />
            <TextField
              {...text}
              style={{ marginTop: 10 }}
              label="Text"
              multiline
              rows={3}
            />
          </Grid>
        }
        {activeStep === 1 &&
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Upload image</Button>
          </FileUpload>
        }
        {activeStep === 2 &&
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Upload Track</Button>
          </FileUpload>
        }
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button onClick={back} disabled={activeStep === 0}>Back</Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  )
}

export default Create