import backgroundImage from '@renderer/assets/images/background.jpeg'
import styled from 'styled-components'

const BackgroundImage = () => {
  return <StyledBackground />
}

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url(${backgroundImage});
  background-size: cover;
`

export default BackgroundImage
