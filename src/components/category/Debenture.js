import React from 'react'
import { connect } from 'react-redux'
import {addInv} from '../../redux/actions'

class Debenture extends React.Component{
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
                {'InvDB':[this.state.input,newInput]},
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
                <p className="text-center display-3">Debenture</p>
                <p className="h5 mx-5">
                Debenture is a type of debt instrument unsecured by collateral. Since debentures have no collateral backing, debentures must rely on the creditworthiness and reputation of the issuer for support. Both corporations and governments frequently issue debentures to raise capital or funds.
                </p>
                <button data-valuex='1.2' onClick={this.clickHandler}>Stock1</button>
                <button data-valuex='1.2' onClick={this.clickHandler}>Stock2</button>
                <button data-valuex='1.2' onClick={this.clickHandler}>Stock3</button>
                Debenture
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
        flag:state.invFlags.InvDB
    }
}

const mapDispatchToProps =dispatch=> {
    return{
        addInv:(a,b)=>dispatch(addInv(a,b))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Debenture)