import React from 'react'
import { Link } from 'react-router-dom'
import LoadingPage from './LoadingPage'

class YugiohContainer extends React.Component {

  state = {
    data: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/cards')
      .then(res => res.json())
      .then(cards =>
        this.setState({
          data: cards.slice(0,20)
        })
      )
  }

  getDescription = (card) => {
    if (card.description.length > 200) {
      return card.description.slice(0,200) + "..."
    } else {
      return card.description
    }
  }

  render() {
    return (
      <div className="container3">
          <ul>
            {this.state.data ? this.state.data.map(card =>
              <li>
                <Link to={{
                  pathname: '/cards' + '/' + card.id
                }}>
                  <div>
                    {card.name}
                    <br></br>
                    <img src={card.image_url} style={{width: '168px', height: '246px'}}/>
                    <br></br>
                    {card.description ? this.getDescription(card) : null}
                  </div>
                </Link>
              </li>
            )
              :
              <LoadingPage/>
            }
          </ul>
      </div>
    )
  }
}

export default YugiohContainer
