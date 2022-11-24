import styled from 'styled-components'

export const GameWepaonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 400px;
  min-height: 300px;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 10px;
`

export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const ImgElement = styled.img`
  width: 150px;
  height: 150px;
`
export const ResultContainer = styled(GameWepaonContainer)`
  gap: 60px;
`
export const ParaElement = styled.p`
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 26px;
  margin-top: 0px;
  margin-bottom: 3px;
`
export const PlayAgainBtn = styled.button`
  border: none;
  width: 160px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  border-radius: 6px;
  font-weight: bold;
`
