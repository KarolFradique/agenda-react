import React from 'react'
import Navbar from '../Components/navbar'
import Routes from '../main/routes'

import 'bootswatch/dist/flatly/bootstrap.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes />
        </div>
      </div>
    )
  }
}

export default App
