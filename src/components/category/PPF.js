import React from 'react'
import { connect } from 'react-redux'
import {addInv} from '../../redux/actions'

class PPF extends React.Component{
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
                {'InvPPF':[this.state.input,newInput]},
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
                <p className="text-center display-3">P P F</p>
                <p className="h5 mx-5">
                Public Provident fund is mainly a retirement linked investment option.

                Generally, people who are employed in a company are covered by Employee Provident Fund (EPF).

                But for self employed people, EPF option is not available. Hence, PPF is generally popular among self-employed people.

                Individual can open only one PPF account in his name. It is also possible to open a PPF account in the name of ones minor child.

                Non-resident Indians are not allowed to open a new PPF account in India.

                At present (Oct’19), the interest rate prevailing on PPF account deposits is 7.9% per annum.
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
        flag:state.invFlags.InvPPF
    }
}

const mapDispatchToProps =dispatch=> {
    return{
        addInv:(a,b)=>dispatch(addInv(a,b))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PPF)