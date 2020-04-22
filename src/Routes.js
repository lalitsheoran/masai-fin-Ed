import React from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import Home from './components/Home'
import Categories from './components/Categories'
import { connect } from 'react-redux'
import RealEstate from './components/category/RealEstate'
import Gold  from './components/category/Gold'
import MutualFund from './components/category/MutualFund'
import Stocks from './components/category/Stocks'
import Debenture from './components/category/Debenture'
import PPF from './components/category/PPF'
import FD from './components/category/FD'
import SavingAcc from './components/category/SavingAcc'
import Login from './components/Login'
import Result from './components/Result'
import NotFound from './NotFound'

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={(props)=><Home {...props}/>}/>
                    {/* <Route exact path='/welcome' render={()=>
                        (this.props.isKey==true?
                            <Welcome/>:
                            <Redirect to={{pathname:'/'}} />
                        )}
                    /> */}
                    <Route exact path="/login" render={()=><Login/>}/>
                    <Route exact path='/categories' render={(props)=><Categories{...props}/>}/>
                    <Route exact path='/realestate' render={()=><RealEstate/>}/>
                    <Route exact path='/gold' render={()=><Gold/>}/>
                    <Route exact path='/mutualfund' render={()=><MutualFund/>}/>
                    <Route exact path='/stocks' render={()=><Stocks/>}/>
                    <Route exact path='/debenture' render={()=><Debenture/>} />
                    <Route exact path='/ppf' render={()=><PPF/>}/>
                    <Route exact path='/fd' render={()=><FD/>}/>
                    <Route exact path='/savings' render={()=><SavingAcc/>}/>
                    <Route exact path='/result' render={()=><Result/>} />
                    <Route render={()=><NotFound/>}/>
                </Switch>
            </div>
            )
    }
}
const mapStateToProps = (state) => {
    return{
        isKey:state.isKey
    }
}

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps,null)(Routes)