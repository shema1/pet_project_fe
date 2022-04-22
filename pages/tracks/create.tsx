import { Button, Grid, TextField } from "@mui/material";
import { style } from "@mui/system";
import React, { useState } from "react";
import FileUpload from "../../components/FileUpload";
import StepWrapper from "../../components/StepWrapper";
import MainLayout from "../../layouts/MainLayout";

interface CreateProps {

}



const Create: React.FC<CreateProps> = () => {

  const [activeStep, setActiveStep] = useState(0)
  const [image, setImage] = useState(null)
  const [audio, setAudio] = useState(null)


  const next = () => {
    activeStep !== 2 && setActiveStep(prev => prev + 1)
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
              style={{ marginTop: 10 }}
              label="Track name"
            />
            <TextField
              style={{ marginTop: 10 }}
              label="Author"
            />
            <TextField
              style={{ marginTop: 10 }}
              label="Text"
              multiline
              rows={3}
            />
          </Grid>
        }
        {activeStep === 1 &&
          <FileUpload setFile={setImage} accept="image/*">
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