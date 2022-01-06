import * as React from "react";
import {ReactChildren} from "react";
import styled from "styled-components";
import {Taskbar} from "../components/Taskbar";

interface MainProps{
    children?: React.ReactNode;
}

const MainContainer = styled.div`
  position: relative;
  min-height: calc(100% - 64px);
  width: 100%;
`

export const Main = (props: MainProps) => {

    return(
        <MainContainer>

            {props.children}
        </MainContainer>
    )
}
