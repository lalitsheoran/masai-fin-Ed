import React from 'react'
import { connect } from 'react-redux'
import {addInv} from '../../redux/actions'

class Gold extends React.Component{
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
    addInput=()=>{if(this.props.amount-this.state.input>=0 && this.props.flag==false){
        let newInput=(this.state.input*1.2*this.props.time).toFixed(2)
        let obj=[
            {'InvGD':[this.state.input,newInput]},
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
                    Gold
                </p>
                <p className="h5 mx-5">
                If any investment option can compete with stocks,  it is gold. Returns of gold in last one decade is better than stocks.

                But it must be admitted that gold in itself carries no fundamentals. It is purely a speculative asset. The price appreciation of gold is totally dependent on increase in demand.

                As population of this world is ever increasing so demand will also go up. Unlike stocks gold cannot generate any assured income for you (like dividends or interest income).
                We can buy gold as physical gold (bullions, coins & bars) or in Electronic form (mutual fund or ETF).

                Other form of precious metal that is available for investing is SILVER.
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
        flag:state.invFlags.InvGD
    }
}

const mapDispatchToProps =dispatch=> {
    return{
        addInv:(a,b)=>dispatch(addInv(a,b))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Gold)