import React from 'react'
import { connect } from 'react-redux'
import {addInv} from '../../redux/actions'

class FD extends React.Component{
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
                {'InvFD':[this.state.input,newInput]},
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
                <p className="text-center display-3">Fixed Deposit</p>
                <p className="h5 mx-5">
                Deposit in banks are very easy to execute. These days all savings accounts are linked with fixed deposit account. From compfort of our home we can click start a fixed deposit. Online fixed deposits can be start from denomination of Rs 5000 and above.

                The tenure of deposit can be from few days to several years. The interest you earn will depend on the principal value of investment and tenure of deposit. One can be 99.9% sure that the returns promised by banks will be offered by end of the holding period.

                These fixed deposits in banks also offer the facility of monthly income withdrawal of interest. This works as a great income generator for many specially senior citizens.

                The interest generated from fixed deposit are taxable.
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
        flag:state.invFlags.InvFD
    }
}

const mapDispatchToProps =dispatch=> {
    return{
        addInv:(a,b)=>dispatch(addInv(a,b))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FD)