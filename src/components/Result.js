import React from 'react'
import Chart from 'react-apexcharts'
import { connect } from 'react-redux'

class Result extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
              }
            },
            series: [
              {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
              }
            ]
          };
    }
    componentDidMount(){
        let xaxisData=[]
        let beforeData=[]
        let afterData=[]
        for(let i=0;i<this.props.total[0].length;i++){
            xaxisData.push(this.props.total[0][i].name)
            beforeData.push(this.props.total[0][i].data[0])
            afterData.push(this.props.total[0][i].data[1])
        }
        let optionsData= {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: xaxisData
            }
          }
        
        let seriesData=[
            {
                name:"Initial Value",
                data:beforeData
            },
            {
                name:"Current Value",
                data:afterData
            }
        ]
        this.setState({
            options:optionsData,
            series:seriesData
        })
    }
    render(){
        console.log(this.props.total[0])
        return(
            <div className="m-2">
                {this.props.total[0] &&
                    

                        <div className="d-flex flex-sm-column flex-lg-row justify-content-between">
                        <Chart
                        className="m-2"
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        width="650"
                        />

                        <Chart
                        className="m-2"
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        width="650"
                        />

                        </div>

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

export default connect(mapStateToProps,null)(Result)