import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import UserShow from './UserShow'



class UsersList extends React.Component {
    constructor(){
        super()
        this.state = {
            user:[]
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
             const user =response.data
             this.setState({user})
             
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
               
                <h1>UsersList</h1>
                <ul>
                    {
                        this.state.user.map((ele,i)=>{
                            return (
                                <li key ={i}><Link to={
                                    
                                    {
                                        pathname:'/UserShow',
                                        state:{
                                            name:ele.name,
                                            userId:ele.id
                                        }
                                    }
                                }>{ele.name}</Link></li>
                                
                            )
                            
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default UsersList