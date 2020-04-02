import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import PostShowMain from './PostShowMain'


class Post extends React.Component {
    constructor(){
        super()
        this.state ={
            posts:[]
        }
    }
    componentDidMount(){
      Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((respone)=>{
          const posts = respone.data
          this.setState({posts})
          console.log(posts)
      })
      .catch((err)=>{
          console.log(err)
      })
    }
    render(){
        return (
            
            <div>
                <h1>Post</h1>
                <h3>Posts  - {this.state.posts.length}</h3>
                <ul>
                        {
                            this.state.posts.map((ele,i)=>{
                                return (
                                    <li key={i}><Link to={{
                                        pathname:'/PostShowMain',
                                        state :{
                                            userId:ele.userId,
                                            title:ele.title,
                                            body:ele.body
                                        }
                                    }}>{ele.title}</Link></li>
                                )
                            })
                        }

                </ul>


            </div>
        )
    }
}
export default Post