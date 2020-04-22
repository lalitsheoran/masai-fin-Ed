import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {invDone} from '../redux/actions'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from './home.module.css'


class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            InvRE: this.props.currentInv.InvRE ||[0,0],
            InvGD: this.props.currentInv.InvGD ||[0,0],
            InvMF: this.props.currentInv.InvMF ||[0,0] ,
            InvST: this.props.currentInv.InvST ||[0,0],
            InvDB: this.props.currentInv.InvDB ||[0,0],
            InvPPF: this.props.currentInv.InvPPF ||[0,0] ,
            InvFD: this.props.currentInv.InvFD ||[0,0],
            InvSA: this.props.currentInv.InvSA ||[0,0]
        }
    }
    addToTotal=()=>{
        this.props.invDone(this.state)
        this.props.history.push('/result')
    }
    render() {
        return (
            <div className={styles.welcomeBody}>
                <p className="text-center h5 my-5">Investment can be done in the assets available below.</p>
                <p className="text-center h5 my-5">Choose the amount carefully, you cannot reinvest again in same asset. </p>
                <p className="text-center h5 my-5">After making the required investments, click "Done" at the end of page. </p>
            <div className='row'>
            <Card className="mx-auto m-1 my-2" style={{ width: "300px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto"
                      component="img"
                      style={{ width: "250px" }}
                      image="re.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      Real Estate
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                       <Link to='/realestate'><Button size="small" color="primary">Go to RE
                      </Button></Link> 
                  </CardActionArea>
                </Card>
                <Card className="mx-auto m-1 my-2" style={{ width: "300px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto"
                      component="img"
                      style={{ width: "250px" }}
                      image="gold.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      Gold
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                       <Link to='/gold'><Button size="small" color="primary">Go to gold
                      </Button></Link> 
                  </CardActionArea>
                </Card>
                <Card className="mx-auto m-1 my-2" style={{ width: "300px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto"
                      component="img"
                      style={{ width: "250px" }}
                      image="mutual.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                     Mutual Funds
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                       <Link to='/mutualfund'><Button size="small" color="primary">Go to Mutual Funds
                      </Button></Link> 
                  </CardActionArea>
                </Card>
                <Card className="mx-auto m-1 my-2" style={{ width: "300px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto"
                      component="img"
                      style={{ width: "250px" }}
                      image="stocks.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      Stocks
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                       <Link to='/stocks'><Button size="small" color="primary">Go to Stocks
                      </Button></Link> 
                  </CardActionArea>
                </Card>
                <Card className="mx-auto m-1 my-2" style={{ width: "300px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto"
                      component="img"
                      style={{ width: "250px" }}
                      image="debenture.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      Debenture
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                       <Link to='/debenture'><Button size="small" color="primary">Go to Debenture
                      </Button></Link> 
                  </CardActionArea>
                </Card>
                <Card className="mx-auto m-1 my-2" style={{ width: "300px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto"
                      component="img"
                      style={{ width: "250px" }}
                      image="ppf.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      PPF
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                       <Link to='/ppf'><Button size="small" color="primary">Go to PPF
                      </Button></Link> 
                  </CardActionArea>
                </Card>
                <Card className="mx-auto m-1 my-2" style={{ width: "300px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto"
                      component="img"
                      style={{ width: "250px" }}
                      image="fd.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      FD
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                       <Link to='/fd'><Button size="small" color="primary">Go to FD
                      </Button></Link> 
                  </CardActionArea>
                </Card>
                <Card className="mx-auto m-1 my-2" style={{ width: "300px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto"
                      component="img"
                      style={{ width: "250px" ,objectFit:"50% 0%"}}
                      image="savings.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      Savings
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                       <Link to='/savings'><Button size="small" color="primary">Go to Savings
                      </Button></Link> 
                  </CardActionArea>
                </Card>
                
                </div>
                <div className='my-5'></div>
                <div className='text-center'>
                    <div onClick={this.addToTotal} className='btn btn-primary my-4'>Done with investments</div>
                </div>
            </div>
            )
    }
}
const mapStateToProps = (state)=> {
    return{
        currentInv:state.currentInv
    }
}

const mapDispatchToProps =dispatch=> {
    return{
        invDone:(a)=>dispatch(invDone(a))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories)