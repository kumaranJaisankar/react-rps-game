import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import PlayGame from '../PlayGame'

import {
  MainContainer,
  InsideContainer,
  ScoreCard,
  ScoreName,
  ScoreBoard,
  PopupContainer,
  Score,
} from './StyledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RpsGame extends Component {
  state = {
    isTrue: true,
    score: 0,
    youAndOpponent: [choicesList[0], choicesList[1]],
    text: '',
  }

  yourResult = (you, opponent) => {
    if (you.id === 'ROCK') {
      switch (opponent.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (you.id === 'PAPER') {
      switch (opponent.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponent.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  getResult = id => {
    const {score} = this.state
    const opponentGame =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const yourGame = choicesList.filter(each => each.id === id)
    const finalResult = this.yourResult(yourGame[0], opponentGame)
    let scoreResult = score
    if (finalResult === 'YOU WON') {
      scoreResult += 1
    } else if (finalResult === 'YOU LOSE') {
      scoreResult -= 1
    }
    this.setState({
      isTrue: false,
      youAndOpponent: [yourGame[0], opponentGame],
      score: scoreResult,
      text: finalResult,
    })
  }

  playGameAgain = () => this.setState({isTrue: true})

  render() {
    const {score} = this.state
    return (
      <MainContainer>
        <InsideContainer>
          <ScoreCard>
            <ScoreName>
              ROCK
              <br /> PAPER <br /> SCISSORS
            </ScoreName>
            <ScoreBoard>
              <p className="para">Score</p>
              <Score className="score">{score}</Score>
            </ScoreBoard>
          </ScoreCard>
          <PlayGame
            choicesList={choicesList}
            state={this.state}
            playGameAgain={this.playGameAgain}
            getResult={this.getResult}
          />
        </InsideContainer>
        <Popup
          modal
          trigger={
            <button type="button" className="rules-btn">
              RULES
            </button>
          }
        >
          {close => (
            <PopupContainer>
              <button
                className="close-btn"
                type="button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </button>
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </MainContainer>
    )
  }
}
export default RpsGame
