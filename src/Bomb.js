// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    
    state = {secondsLeft: this.props.initialCount}
    
    render () {
        // console.log(this.props.initialCount)
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        if (this.state.secondsLeft===0){
            "Boom!"
        }else{
            `${this.state.secondsLeft} seconds left before I go boom!`
        }

        return (
          <div>{message}</div>
        )

    }
}


export default Bomb


// const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

// return (
//   <div>{message}</div>
// )