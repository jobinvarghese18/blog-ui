import React from 'react'
import Home from './Home'
import UsersList from './UsersList'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import UserShow from './UserShow'
import PostShow from './PostShow'
import Post from './Post'
import PostShowMain from './PostShowMain'



function App(props){
    return(
 
        <BrowserRouter>
            
               <div>
                  
               <Link to='/'>Home</Link>
               <Link to='/UsersList'>Users</Link>
               <Link to='./Post'>Post</Link>

                   
               <Route path='/' component = {Home} exact={true}/>
               <Route path='/UsersList' component={UsersList}/>
               <Route path='/UserShow' component={UserShow}/>
               <Route path='/PostShow' component={PostShow}/>
               <Route path='/post' component={Post}/>
               <Route path='/PostShowMain' component={PostShowMain}/>

       
                 
                   
                 </div>
                 </BrowserRouter>
              
    )
}

export default App