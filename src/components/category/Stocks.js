import React from 'react'
import { connect } from 'react-redux'
import {addInv} from '../../redux/actions'

class Stocks extends React.Component{
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
                {'InvST':[this.state.input,newInput]},
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
        console.log(this.state.perc)
        return(
            <div>
                <p className="text-center display-3">
                    Stocks
                    </p>
                    <p className="h5 mx-5">

                A stock (also known as "shares" or "equity") is a type of security that signifies proportionate ownership in the issuing corporation. This entitles the stockholder to that proportion of the corporation's assets and earnings.

                Stocks are bought and sold predominantly on stock exchanges, though there can be private sales as well, and are the foundation of many individual investors' portfolios. These transactions have to conform to government regulations which are meant to protect investors from fraudulent practices. Historically, they have outperformed most other investments over the long run. These investments can be purchased from most online stock brokers. Stock investment differs greatly from real estate investment.

                </p>
                <p className="text-center mt-4">Select one random stock from below</p>
                <p className="text-center">
                <button className="btn btn-primary ml-2" data-valuex='1.2' onClick={this.clickHandler}>Stock1</button>
                <button className="btn btn-warning ml-2" data-valuex='1.2' onClick={this.clickHandler}>Stock2</button>
                <button className="btn btn-info ml-2" data-valuex='1.2' onClick={this.clickHandler}>Stock3</button>
                <button className="btn btn-success ml-2" data-valuex='1.2' onClick={this.clickHandler}>Stock4</button>
                </p>
                <p className="text-center h4 my-3">Now provide the input below to invest in it</p>
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
        flag:state.invFlags.InvST
    }
}

const mapDispatchToProps =dispatch=> {
    return{
        addInv:(a,b)=>dispatch(addInv(a,b))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Stocks)