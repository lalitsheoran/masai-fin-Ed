import React from 'react'
import { connect } from 'react-redux'
import {addInv} from '../../redux/actions'

class SavingAcc extends React.Component{
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
    addInput=()=>{
        if(this.props.amount-this.state.input>=0 && this.props.flag==false){
            let newInput=(this.state.input*1.2*this.props.time).toFixed(2)
            let obj=[
                {'InvSA':[this.state.input,newInput]},
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
                    Savings Account
                </p>
                <p className="h5 mx-5">
                A savings account is an interest-bearing deposit account held at a bank or other financial institution. Though these accounts typically pay a modest interest rate, their safety and reliability make them a great option for parking cash you want available for short-term needs.
                </p>
                <p className="text-center h4 my-3">Provide input below to invest in it</p>
                <p className="text-center"><input onChange={this.changeHandler} name='input' type='number' placeholder="Input here"/>
                <div onClick={this.addInput} className='btn btn-primary'>ADD</div></p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        amount:state.amount,
        time:state.time,
        flag:state.invFlags.InvSA
    }
}

const mapDispatchToProps =dispatch=> {
    return{
        addInv:(a,b)=>dispatch(addInv(a,b))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SavingAcc)