import React from 'react'

class Product extends React.Component {
  render(){
    return(
      <>
        <h3>{this.props.title}</h3>
        <span>{this.props.description}</span>
      </>
    )
  }
}

export default Product;