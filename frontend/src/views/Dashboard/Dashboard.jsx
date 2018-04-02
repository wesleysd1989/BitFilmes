
import React, { Component } from 'react';
import { markAsDone, markAsPending, remove } from '../../Main/Actions/'
import Todo from '../../components/Todo/'

class Dashboard extends Component {
  

  render() {    
    return (
      <Todo />
    )
  }
}

export default Dashboard
