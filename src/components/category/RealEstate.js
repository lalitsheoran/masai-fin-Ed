import React from 'react'
import { connect } from 'react-redux'
import {addInv} from '../../redux/actions'

class RealEstate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:''
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    clickHandler=(e)=>{
        console.log(e.target.dataset.valuex)
        this.setState({
            perc:e.target.dataset.valuex
        })
    }
    addInput=()=>{
        if(this.props.amount-this.state.input>=0 && this.props.flag==false){
            let newInput=(this.state.input*Number(this.state.perc)*this.props.time).toFixed(2)
            let obj=[
                {'InvRS':[this.state.input,newInput]},
                this.props.amount-this.state.input
                ]
                alert("Investment done !")
            this.props.addInv(obj)
            }
        else if(this.props.amount-this.state.input<0){
            alert('Do not exceed the balance limit!!')
        }
        else if(this.props.flag==true){
            alert('Investment has already been made to this asset')
        }
    }
    render(){
        return(
            <div>
                <p className="text-center display-3">
                    Real Estate
                </p>
                <p className="h5 mx-5">
                Investment in real estate properties like land, residential apartments, commercial buildings etc can be very profitable. Investment in real estate properties generates the reliable form of income called  rental income.

                Like stocks generates dividend income real estate generates rental income.

                But you can buy stocks any day, but real estate cannot be bought as easily like stocks. The main reason being high capital requirement. Real estate properties are very capital intensive.
                </p>
                <p className="text-center mt-4">Select one tier from below</p>
               <div className="text-center">
               <button className="btn btn-primary ml-5" data-valuex='1.6' onClick={this.clickHandler}>Tier-1 City</button>
                <button className="btn btn-success ml-5"data-valuex='1.3' onClick={this.clickHandler}>Tier-2 City</button>
                <button className="btn btn-info ml-5"data-valuex='1.1' onClick={this.clickHandler}>Tier-3 City</button>
               </div>
                <p className="text-center h4 my-3">Provide input below to invest in it</p>
                {/* <p className="text-center"><input onChange={this.changeHandler} name='input' type='number' placeholder="Input here"/>
                <div onClick={this.addInput} className='btn btn-primary'>ADD</div></p> */}

                <div className="text-center">
                <input onChange={this.changeHandler} name='input' type='number' placeholder="Input here"/>
                <div onClick={this.addInput} className='btn btn-primary'>ADD</div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        amount:state.amount,
        time:state.time,
        flag:state.invFlags.InvRS
    }
}

const mapDispatchToProps =dispatch=> {
    return{
        addInv:(a,b)=>dispatch(addInv(a,b))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RealEstate)