import React from 'react';
import ReactDOM from 'react-dom'

const Timer = props => {
  if (props.timeLeft == 0) {
    document.getElementById('end-of-time').play()
  }
  if (props.timeLeft == null || props.timeLeft == 0) {
    return <div/>
  }
  return <h1>Time left is: {props.timeLeft} seconds</h1>
}

const Button = props =>
 <button
    type="button"
    className='btn-default btn'
    onClick={()=>{props.startTimer(props.time)}}>
    {props.time} Seconds
  </button>

class TimerWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {timeLeft: null, timer: null}
    this.startTimer = this.startTimer.bind(this)
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1
      if (timeLeft == 0) clearInterval(timer)
      this.setState({timeLeft: timeLeft})
    }, 1000)
    this.setState({timeLeft: timeLeft, timer: timer})
  }

  render() {
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group" >
          <Button time="5" startTimer={this.startTimer}/>
          <Button time="10" startTimer={this.startTimer}/>
          <Button time="15" startTimer={this.startTimer}/>
        </div>
        <Timer timeLeft={this.state.timeLeft}/>
      <audio id="end-of-time" src="flute_c_long_01.wav" preload="auto"></audio>
      </div>
    )
  }
}

export default TimerWrapper
