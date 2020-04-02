import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import UserShow from './UserShow'

class PostShowMain extends React.Component{
    constructor(){
        super()
        this.state = {
           name:'',
           userId:'',
           title:'',
           body:'',
           comments:[],
           user:[]
        }
    }
    componentDidMount(){
         
        const { PostShowMain } = this.props.match.params
        let{userId,title,body} =this.props.location.state
       

        this.setState({userId,title,body})
        
        
        Axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
        .then((repsonse)=>{
             const comments = repsonse.data
             this.setState({comments})
           
        })
        .catch((err)=>{
            console.log(err)
        })
        Axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((repsonse)=>{
             const user = repsonse.data
             this.setState({user})
            const user1 = this.state.user.filter(ele=>ele.id==this.state.userId)
            
           const name= user1.map(ele=>{
                return (
                    ele.name
                )
            })
            this.setState({name})
            console.log(this.state.name)
          
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        console.log(this.state.userId)
        return (
                    <div>
                    <h2> Name : {this.state.name}</h2> 
                     <h3>Title:{this.state.title}</h3>
                     <h3>Body:
                         {this.state.body}
                     </h3>

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
                     }}>
                         {this.state.name}
                         </Link>
                    </div>
        )
    }
}
export default PostShowMain