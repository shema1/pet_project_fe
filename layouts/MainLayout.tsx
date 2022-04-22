import { Container } from "@mui/material";
import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Player from "../components/Player";

interface MainLayoutType {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutType> = ({ children }) => {

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: 120 }}>
        {children}
      </Container>
      <Player />
    </>
  )
}

export default MainLayout;