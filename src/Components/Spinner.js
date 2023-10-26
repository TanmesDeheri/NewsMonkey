import React, { Component } from 'react'
import Loading from './Loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'><img src={Loading}alt="Loading Please Wait....." /></div>
    )
  }
}

export default Spinner