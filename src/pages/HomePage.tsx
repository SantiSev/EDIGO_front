import React, { Component } from 'react'
import Background from '../components/Background'
import Navbar from '../components/NavBar'


export default class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Background>
            <div>HomePage</div>
        </Background>
      </>
    )
  }
}
