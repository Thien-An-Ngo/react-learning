import styled from "styled-components";

export const Nav = styled.nav`
  font-family: sans-serif;
  position: sticky;
  top: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  height: 64px;
  box-shadow: #888 0 3px 12px 4px;
  background-color: ${props => props.theme.colors.surface};
  color: inherit;
  z-index: 100;
`

export const TaskDiv = styled.div`
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
`

export const TaskLeft = styled.div`
  display: inherit;
  flex-direction: row;
  padding: 12px 0 12px 24px;
  justify-content: flex-start;
  justify-self: flex-start;
`

export const TaskMid = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 13px);
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
`

export const TaskRight = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: flex-end;
  justify-self: flex-end;
  height: 100%;
`

export const LogoDiv = styled.div`
  border: 1px dashed #A7ABAF;
  box-sizing: border-box;
  display: flex;
  padding: 8px 19px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.h4`
  width: 42px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #96989A;
  margin: 0;
`

export const Brand = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 24px 4px 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0;
`

export const Timestamp = styled.h1`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TaskItem = styled.div`
  height: 100%;
  width: 64px;
  border-right: solid ${props => props.theme.colors.border1} 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HoverDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${props => props.theme.colors.surfaceHover};
  }
`

export const TaskGear = styled.div`
  height: 100%;
  width: 100%;
`

export const TaskUser = styled(TaskItem)`
  border: none;
  width: auto;
  padding: 0 20px;
  display: flex;
  
`

export const TaskUserIcon = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
`

export const TaskUsername = styled.h4`
  margin: 0 0 0 10px;
  &:hover {
    
  }
`
