import {
  GameWepaonContainer,
  CustomButton,
  ImgElement,
  ResultContainer,
  ParaElement,
  PlayAgainBtn,
} from './styledComponent'

const PlayGame = props => {
  const {choicesList, getResult, state, playGameAgain} = props
  const {text, youAndOpponent, isTrue} = state

  return (
    <GameWepaonContainer type="button">
      {isTrue && (
        <>
          <CustomButton
        
            type="button"
            onClick={() => getResult(choicesList[0].id)}
          >
            <ImgElement src={choicesList[0].imageUrl} alt={choicesList[0].id} />
          </CustomButton>
          <CustomButton
            
            type="button"
            onClick={() => getResult(choicesList[1].id)}
          >
            <ImgElement src={choicesList[1].imageUrl} alt={choicesList[1].id} />
          </CustomButton>
          <CustomButton
           
            type="button"
            onClick={() => getResult(choicesList[2].id)}
          >
            <ImgElement src={choicesList[2].imageUrl} alt={choicesList[2].id} />
          </CustomButton>
        </>
      )}
      {!isTrue && (
        <>
          <ResultContainer>
            <div>
              <ParaElement>YOU</ParaElement>
              <ImgElement src={youAndOpponent[0].imageUrl} alt="your choice" />
            </div>
            <div>
              <ParaElement>OPPONENT</ParaElement>
              <ImgElement
                src={youAndOpponent[1].imageUrl}
                alt="opponent choice"
              />
            </div>
            <div>
              <ParaElement>{text}</ParaElement>
              <PlayAgainBtn type="button" onClick={() => playGameAgain()}>
                PLAY AGAIN
              </PlayAgainBtn>
            </div>
          </ResultContainer>
        </>
      )}
    </GameWepaonContainer>
  )
}
export default PlayGame
