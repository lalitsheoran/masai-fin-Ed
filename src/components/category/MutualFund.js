import React from 'react'
import { connect } from 'react-redux'
import {addInv} from '../../redux/actions'

class MutualFund extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:'',
            perc:0
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
                {'InvMF':[this.state.input,newInput]},
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
                <p className="text-center display-3">Mutual Fund</p>
                <p className="h5 mx-5">
            
                If you are a beginner in investment who wants to know how and where to invest money then mutual fund should be the first logical choice.
                Mutual fund companies has fund managers who collects money from citizens and invests this pooled money in different investment option.
                The options in which the pooled money is invested depends on the objective of the mutual fund.
                Typical fund objective can be mainly categorized into three types. Mutual funds can be either growth focused, income focused or a mix of growth and income which is called as balanced funds.
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
        flag:state.invFlags.InvMF
    }
}

const mapDispatchToProps =dispatch=> {
    return{
        addInv:(a,b)=>dispatch(addInv(a,b))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MutualFund)