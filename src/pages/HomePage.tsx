import React, { Component } from 'react'
import Background from '../components/Background'
import Navbar from '../components/NavBar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Featured from '../components/Featured'
import { images, categories, articles } from '../assets/dummyData';


export default class HomePage extends Component {




  render() {
    return (
      <>
        <Navbar />
        <Background>
          <Banner images={images}/>
          <Categories categories={categories}/>
          <Featured articles={articles}/>
        </Background>
      </>
    )
  }
}
