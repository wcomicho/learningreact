import Axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
      super()
    
      this.state = {
         posts: [],
         userId: '',
         title: '',
         body: ''
      }
    }
    
  componentDidMount(){
      Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response=>{
          console.log(response);
          this.setState({posts: response.data});
      })
      .catch(error =>{
          console.log(error)
      })
  }
  
    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault();
        console.log(this.state);
        Axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => {
            console.log(response);
        }).catch(error=>{
            console.log(error);
        })
    }  
  
  render() {
    const {posts} = this.state;
    const {userId, title, body} = this.state;

    return (
      <>
        <h1>Post Data</h1>
        <form onSubmit={this.submitHandler}>
           <div>
                <input 
                    type="text" 
                    name="userId" 
                    value={userId} 
                    onChange = {this.changeHandler}
                />
           </div> 
           <div>
                <input type="text" name="title" value={title} onChange = {this.changeHandler}/>
           </div>
           <div>
                <input type="text" name="body" value={body}  onChange = {this.changeHandler}/>
           </div>
           <button type="submit">Submit</button>
        </form>

        <h1>List Posts</h1>
        {this.props.children}
        {
            posts.length ?
            posts.map(post => 
                <div key={post.id}>
                    {post.title}
                </div>) :
            this.props.children
        }
        {this.props.children}

        
      </>
    )
  }
}

export default PostList
