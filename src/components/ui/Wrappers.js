import styled from "styled-components"

export const MainWrapperStyle = styled.div `
    position: relative;
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
`

export const ComponentsWrapperStyle = styled.div `
    position: absolute;
    overflow: auto;
    right: 0;
    left: 0;
    top: 0px;
    bottom: 0;
`

export const MainWrapper = ({children}) => {
    return (
        <MainWrapperStyle>
            {children}
        </MainWrapperStyle>
    )
}

export const ComponentsWrapper = ({children}) => {
  return (
    <ComponentsWrapperStyle>
        {children}
    </ComponentsWrapperStyle>
  )
}