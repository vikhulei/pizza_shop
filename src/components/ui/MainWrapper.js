import styled from "styled-components"

export const MainWrapperStyle = styled.div `
    position: relative;
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
`

export const MainWrapper = ({children}) => {
    return (
        <MainWrapperStyle>
            {children}
        </MainWrapperStyle>
    )
}
