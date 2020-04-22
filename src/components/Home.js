import React from 'react'
import styles from './home.module.css'
import { connect } from 'react-redux'
// import {add} from '../redux/actions'
import { Link } from 'react-router-dom'


class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    login=()=>{
        // this.props.add()
        this.props.history.push('/welcome')
    }
    render() {
        return (
            <body className={styles.backgBody} style={{height:"100%"}}>
                <div>
                    <p className={` display-4 text-center text-white py-5 ${styles.quotes}`}>Putting time into your financial development improves saving and investing decisions</p>
                    <div className="text-center">
                    <div>
                    <img src="ud1.svg"  alt="ud1" width="200px"/>
                    <div>
                    <p className="h3 my-5">Use this little app to try out your financial decisions</p>
                    <p className="h4 text-secondary my-5">Ok, but how...</p>
                    <p className="h4 my-5">Here's how !</p>
                    </div>
                    <img src="ud2.svg"  alt="ud2" width="200px"/>
                    </div>
                    <img src="down-arrow.png"alt="" height="100px"/>
                    <div className="h5 ">
                    <div className="d-flex mx-auto  col-lg-5 col-8 justify-content-left">
                    <p className="text-white">Step 1 : </p>
                    <p className="ml-5 pl-5">Login to the site</p>
                    </div>
                    <div className="d-flex mx-auto  col-lg-5 col-8 justify-content-left">
                    <p className="text-white">Step 2 : </p>
                    <p className="ml-5 pl-5">You are provided with 10,000 tokens</p>
                    </div>
                    <div className="d-flex mx-auto  col-lg-5 col-8 justify-content-left">
                    <p className="text-white">Step 3 : </p>
                    <p className="ml-5 pl-5">Invest those tokens as you see fit</p>
                    </div>
                    <div className="d-flex mx-auto  col-lg-5 col-8 justify-content-left">
                    <p className="text-white">Step 4 : </p>
                    <p className="ml-5 pl-5">Find your gains or losses instantly</p>
                    </div>
                    <div className="d-flex mx-auto  col-lg-5 col-8 justify-content-left">
                    <p className="text-white">Step 5 : </p>
                    <p className="ml-5 pl-5 mb-5">Try to maximise your returns</p>
                    </div>
                    </div>
                    </div>
                </div>
            </body>
            )
    }
}
// const mapStateToProps = (state) => ({
// })

// const mapDispatchToProps =dispatch=>{
//     return {
//         add:()=>dispatch(add())
//     }
// }

export default connect(null,null)(Home)