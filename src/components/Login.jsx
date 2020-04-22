import React from 'react'
import firebase from 'firebase'
import {StyledFirebaseAuth} from 'react-firebaseui'
import {connect} from 'react-redux'
import {login,logout} from '../redux/actions'
import {Redirect} from 'react-router-dom'
import styles from './home.module.css'
import { Link } from 'react-router-dom'
import {setTime} from '../redux/actions'
firebase.initializeApp({
    apiKey: "AIzaSyCvG9h_FlEyl5KRVx0SLXeS88xj76ZFLyw",
    authDomain: "masai-fined.firebaseapp.com"
})


class Login extends React.Component{
   constructor(props) {
       super(props)
   
       this.state = {
            ready:false
       }
   }
   
    uiConfig={
        signInFlow:"popup",
        signInOptions:[firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks:{
            signInSuccess:()=>false
        }
    }
    

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user=>{
            this.setState({
                ready:!!user
            })
          this.state.ready && this.props.login()
          console.log("user",user)  
        })
    }
    handleLogout=()=>{
        firebase.auth().signOut()
        this.props.logout()
        this.setState({
            ready:false
        })
    }
    setTimePeriod=(num)=>{
        if(this.props.timeFlag==false){
            this.props.setTime(num)
        }
    }
    render(){
        if(this.state.ready && this.props.isKey){
            return(
               <body className={styles.welcomeBody}>
                   <div>
                    <div className="text-center">
                    <img className="rounded-circle my-5" src={firebase.auth().currentUser.photoURL} alt="user display pic" width="200px"/>
                    <p className="display-3 mt-5 ">Welcome, {firebase.auth().currentUser.displayName}</p>
                    <p className="h4 text-warning">-= You have been granted 10,000 tokens to play with =-</p>
                    <img src="black-arrow.png" className="mb-5" alt="down" width="80px"/>
                    <p className="h4 text-primary my-3">Now, choose the global investment duration </p>
                    <small className="mx-2">Short-term - Max period of 1 year</small>||
                    <small className="mx-2">Long-term  - Minimum period of 5 year</small>
                    <div>
                    <Link to='/categories'><button type="button" onClick={()=>this.setTimePeriod(1)} className="btn btn-primary rounded-circle py-5 m-5 px-4">Short-term</button></Link>
                    <Link to='/categories'><button type="button" onClick={()=>this.setTimePeriod(5)} className="btn btn-info rounded-circle py-5 m-5 px-4">Long-term</button></Link>
                        
                        
                    </div>
                    <p className="text-danger">Select an option from above, to proceed further.</p>    
                    </div>        
            
               </div>
               </body>
            )
        }
        else{
            return(
                <div className="mt-5">
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />

                </div>
            )
        }
    }
  
}
const mapStateToProps = (state) => ({
    isKey:state.isKey,
    timeFlag:state.timeFlag
})

const mapDispatchToProps =(dispatch)=> {
    return{
    login:()=>dispatch(login()),
    logout:()=>dispatch(logout()),
    setTime:(a)=>dispatch(setTime(a))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)