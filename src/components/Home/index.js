import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.changePage = this.changePage.bind(this)
  }

  changePage() {
    push('/about');
  }

  render() {
    return (
      <div className="main-container home">
        OH MIA HOME
        <button onClick={this.changePage}>Go to about</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Home);