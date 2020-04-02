import React  from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import PostShow from './PostShow'


class UserShow extends React.Component {
    constructor(){
        super()
        this.state ={
         name:'',
         post:[],
         userId:''
        }
    }
    componentDidMount(){
        const { UserShow } = this.props.match.params
        const {name,userId} = this.props.location.state
        
        this.setState({name,userId})
        console.log(userId)
        Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response)=>{
            const post = response.data
            this.setState({post})
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
    render(){

        console.log(this.state.post)
        let name = this.state.name
        const post = this.state.post
        
        return (
            <div>
                <h2>User Name: {this.state.name}</h2>
                <h3>Post Written By User</h3>
                <ul>
                    {
                       this.state.post.map((ele,i)=>{
                           return (
                               <li key={i}><Link to = {{
                                   pathname:'/PostShow',
                                   state:{
                                       userId:this.state.userId,
                                       name:this.state.name,
                                       title:ele.title,
                                       body:ele.body

                                   }
                               }} >{ele.title}</Link></li>
                           )
                       })
                        
                    }
                       
                </ul>
            </div>
        )
    }
}
export default UserShow