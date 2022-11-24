import styled from 'styled-components'

import './index.css'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`

export const InsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
`
export const ScoreCard = styled.div`
  border: 1px solid white;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Bree Serif';
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`
export const UnorderList = styled.ul`
  padding: 0px;
  list-style-type: none;
  color: white;
`
export const ScoreBoard = styled.div`
  background-color: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 120px;
  height: 120px;
`
export const PopupContainer = styled.div`
  background-color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;

  @media screen and (min-width: 576px) {
    width: 450px;
    height: 450px;
  }
`
export const Score = styled.p`
  margin-top: 0px;
  font-weight: bolder;
  font-size: 36px;
  color: #223a5f;
  font-family: 'Roboto';
`
export const ScoreName = styled.h1`
  color: white;
`
