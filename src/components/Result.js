import React from 'react'
import { connect } from 'react-redux'

class Result extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.total)
        return(
            <div className="m-2">
                {this.props.total.map(e=>
                    <div>
                        <div>
                            <table className='table border border-dark'>
                                <thead>
                                    <tr>
                                        <th>Investment Categories</th>
                                        <th>Initial Investment</th>
                                        <th>Final Return</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Real Estate</td>
                                        <td>{e.InvRE[0]}</td>
                                        <td>{e.InvRE[1]}</td>
                                    </tr>
                                    <tr>
                                        <td>Gold</td>
                                        <td>{e.InvGD[0]}</td>
                                        <td>{e.InvGD[1]}</td>
                                    </tr>
                                    <tr>
                                        <td>Mutual Fund</td>
                                        <td>{e.InvMF[0]}</td>
                                        <td>{e.InvMF[1]}</td>
                                    </tr>
                                    <tr>
                                        <td>Stocks</td>
                                        <td>{e.InvST[0]}</td>
                                        <td>{e.InvST[1]}</td>
                                    </tr>
                                    <tr>
                                        <td>Debenture</td>
                                        <td>{e.InvDB[0]}</td>
                                        <td>{e.InvDB[1]}</td>
                                    </tr>
                                    <tr>
                                        <td>PPF</td>
                                        <td>{e.InvPPF[0]} </td>
                                        <td>{e.InvPPF[1]} </td>
                                    </tr>
                                    <tr>
                                        <td>Fixed Deposit</td>
                                        <td>{e.InvFD[0]}</td>
                                        <td>{e.InvFD[1]}</td>
                                    </tr>
                                    <tr>
                                        <td>Savings Account</td>
                                        <td>{e.InvSA[0]}</td>
                                        <td>{e.InvSA[1]}</td>
                                    </tr>
                                </tbody>
                            </table>

                           
                            </div>
                    </div>)
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        total:state.totalInv
    }
};
// const mapDispatchToProps = (dispatch) => ({

// });
export default connect(mapStateToProps,null)(Result)