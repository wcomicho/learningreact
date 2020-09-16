import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super()
  
    this.state = {
       username: '',
       comments: '',
       topic: 'React'
    }
  }

  handleUserNameChange = (event) => {

    this.setState({
        username: event.target.value
    })

  }
  handlCommentsChange = (event) =>{
      this.setState({
          comments: event.target.value
      })
  }

  handleSelectChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
  }
  handleSubmit = (event) =>{
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
      event.preventDefault();
  }

  render() {
    const {username, comments, topic} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>User Name</label>
            <input type='text' value={this.state.username} onChange={this.handleUserNameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handlCommentsChange}>

            </textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleSelectChange}>
                <option value='React'>React</option>
                <option value='Angular'>Angular</option>
                <option value='Vue'>Vue</option>
            </select>
        </div>
        <div>{username}</div>
        <div>{comments}</div>
        <div>{topic}</div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
