import React, { Component } from 'react'
import Background from '../components/Background'
import Navbar from '../components/NavBar'
import Banner from '../components/Banner'
import b1 from '../assets/bannerAssets/b1.jpg'
import b2 from '../assets/bannerAssets/b2.jpg'
import b3 from '../assets/bannerAssets/b3.jpg'
import b4 from '../assets/bannerAssets/b4.jpg'
import Categories from '../components/Categories'


export default class HomePage extends Component {

  images = [b1,b2,b3,b4];
  categories = ["Camperas", "Remeras", "Pantalones", "Vestidos", "Polleras", "Accesorios"]

  render() {
    return (
      <>
        <Navbar />
        <Background>
          <Banner images={this.images}/>
          <Categories categories={this.categories}/>
        </Background>
      </>
    )
  }
}
