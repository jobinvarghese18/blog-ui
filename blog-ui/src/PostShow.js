import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import UserShow from './UserShow'

class PostShow extends React.Component{
    constructor(){
        super()
        this.state = {
           name:'',
           userId:'',
           title:'',
           body:'',
           post:[],
           comments:[]
        }
    }
    componentDidMount(){
         
        const { PostShow } = this.props.match.params
        let{userId,name,title,body} =this.props.location.state

        this.setState({userId,name,title,body})
        
        
        Axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then((repsonse)=>{
             const comments = repsonse.data
             this.setState({comments})
             console.log(this.state.comments)
        })
        .catch((err)=>{
            console.log(err)
        })
        Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response)=>{
            const post = response.data
            this.setState({post})
            console.log(post)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
    render(){
    
        return (
                    <div>
                    <h2> Name : {this.state.name}</h2> 
                     <h3>Title:{this.state.title}</h3>
                     <h3>Body:
                         {this.state.body}
                     </h3>
                     {/* <ul>
                         {
                             this.state.post.map((ele,i)=>{
                                 return (
                                     <div>
                                    <li key={i}>{ele.body}</li>
                                     </div>
                                     
                                 )
                             })
                         }
                     </ul> */}

                     <h2>Comments</h2>
                     <ul>
                         {
                             this.state.comments.map((ele,i)=>{
                                 return (
                                     <li key={i}>{ele.body}</li>
                                 )
                             })
                         }
                     </ul>
                     <Link to={{
                         pathname:'/UserShow',
                         state:{
                              userId:this.state.userId,
                              name:this.state.name
                         }
                     }}>{this.state.name}</Link>
                    </div>
        )
    }
}
export default PostShow