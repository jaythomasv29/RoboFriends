import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      hasError: false
    }
  }

  componentDidCatch ( error, info ) {
    this.setState( { hasError: true } )
  }


  render () {
    if ( this.state.hasError ) {
      // if there is an error
      return <h1>Oops...an error has occured</h1>// return the default state
    }
    return this.props.children
  }
}

export default ErrorBoundary