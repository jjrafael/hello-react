import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
    this.changePage = this.changePage.bind(this)
  }

  changePage() {
    push('/');
  }

  render() {
    return (
      <div className="main-container home">
        OH MIA ABOUT
        <button onClick={this.changePage}>Go to Home</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(About);