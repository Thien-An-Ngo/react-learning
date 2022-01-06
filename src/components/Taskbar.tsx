import * as React from 'react'
import {Brand, Logo, LogoDiv, Nav, TaskDiv, TaskItem, TaskLeft, TaskMid, TaskRight, TaskUser, Timestamp, HoverDiv, TaskUsername} from './TaskStyles';
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsGear, BsGearFill } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'

interface TaskbarProps {
    isDarkMode: boolean
}

interface HoverDivProps {
    children: React.ReactNode,
    handleMouseOverGear: () => void,
    handleMouseOutGear: () => void,
    isDarkMode: boolean
}

const HoverDivGear = (props: HoverDivProps) => {
    const {handleMouseOverGear, handleMouseOutGear, children} = props
    return (
        <HoverDiv onMouseOver={handleMouseOverGear} onMouseOut={handleMouseOutGear}>
            {children}
        </HoverDiv>
    );
};

export const Taskbar = (props: TaskbarProps) => {
    const { isDarkMode } = props
    const [date, setDate] = useState(new Date());
    const [isHovering, setIsHovering] = useState(false);

    const refreshDate = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const timerID = setInterval(refreshDate, 1000);
        return function cleanup() {
            clearInterval(timerID)
        }
    }, [])

    const handleMouseOver = ():void => {
        setIsHovering(true);
    };

    const handleMouseOut = ():void => {
        setIsHovering(false);
    };

    return (
        <Nav>
            <TaskDiv>
                <TaskLeft>
                    <LogoDiv>
                        <Logo>LOGO</Logo>
                    </LogoDiv>
                    <Brand>
                        HURZ
                    </Brand>
                </TaskLeft>
                <TaskMid>
                    <Timestamp>
                        {
                            date.getHours().toString().padStart(2, '0')
                        }:{date.getMinutes().toString().padStart(2, '0')}
                    </Timestamp>
                </TaskMid>
                <TaskRight>
                    <TaskItem>
                        <HoverDiv>
                            <BiSearchAlt2 size="28px"/>
                        </HoverDiv>
                    </TaskItem>
                    <TaskItem>
                        <HoverDivGear
                            handleMouseOverGear={handleMouseOver}
                            handleMouseOutGear={handleMouseOut}
                            isDarkMode={isDarkMode}
                        >
                            {
                                isHovering
                                    ?<BsGearFill size="28px"/>
                                    :<BsGear size="28px"/>
                            }
                        </HoverDivGear>
                    </TaskItem>
                    <TaskUser>
                        <FaRegUserCircle size="24px"/>
                        <TaskUsername>
                            Hurzeli
                        </TaskUsername>
                    </TaskUser>
                </TaskRight>
            </TaskDiv>
        </Nav>
    )
}
