import React,{Component} from 'react'
import {render} from 'react-dom'
import styles  from './styles/styles.scss'
class HelloWorld extends Component{



  render(){
    const {fullname,birthday} = this.props
    return(
      <div>
        <h1 className={styles.greeting}>Hello {fullname}</h1>
        <h2>toString() : {birthday.toString()}</h2>
        <h2>toLocaleDateString() : {birthday.toLocaleDateString()}</h2>
        <h2>toISOString() : ${birthday.toISOString()}</h2>
      </div>
    )
  }
}

export default HelloWorld

render(<HelloWorld
  fullname='TeeLeK'
  birthday={new Date()}
   />,document.getElementById('app'))
