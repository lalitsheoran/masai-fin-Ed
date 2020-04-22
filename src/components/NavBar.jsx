import React from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import {connect} from 'react-redux'
import {logout} from '../redux/actions'


class NavBar extends React.Component{
    handleLogout=()=>{
        firebase.auth().signOut()
        this.props.logout()
        
    }
    render(){
        return(
            <nav style={{backgroundColor:"#69B7BF"}} className="navbar navbar-expand-lg navbar-light sticky-top">
            <Link to='/'><p className="text-white h3">Fin<span className="text-dark">ED</span></p></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  <li>
        {this.props.isKey && <p className="mt-2 mr-5 text-white">{this.props.amount} tokens left</p>}
                  </li>
                <li className="nav-item">
                {this.props.isKey ? <button className="btn btn-secondary rounded-pill" onClick={this.handleLogout} >Sign out</button> :  <Link to='/login'><div className='btn btn-danger rounded-pill text-white my-2 mx-4'>Lets Start</div></Link> }
                </li>
              </ul>
            </div>
            </nav>
        )
    }
}
const mapStateToProps = (state) => ({
    isKey:state.isKey,
    amount:state.amount
})

const mapDispatchToProps =(dispatch)=> {
    return{
    logout:()=>dispatch(logout()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)