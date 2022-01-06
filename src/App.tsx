import * as React from "react"
import { MainContainer } from "./globalstyles"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Dashboard} from "./containers/Dashboard";
import {Main} from "./containers/Main";
import {Taskbar} from "./components/Taskbar";
import {useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

export function App() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const hadDarkMode = localStorage.getItem('isDarkMode') === 'true';
        setIsDarkMode(hadDarkMode);
    }, [])

    const handleSetDarkMode = (isDarkMode: boolean) => {
        localStorage.setItem('isDarkMode', isDarkMode.toString());
        setIsDarkMode(isDarkMode);
    };

    return(
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <MainContainer>
                <BrowserRouter>
                    <Taskbar isDarkMode={isDarkMode}/>
                    <Main>
                        <Routes>
                            <Route path="/" element={<Dashboard />}/>
                        </Routes>
                    </Main>
                </BrowserRouter>
            </MainContainer>
        </ThemeProvider>
    )
}
