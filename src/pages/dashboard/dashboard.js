/**
 *@author  liumm308
 *@data  2020/07/09 14:21
 *@mail xidian_liu@163.com
 */
import React from 'react';
import './dashboard.module.less';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import Anno from 'highcharts/modules/annotations';
HighchartsMore(Highcharts);
Anno(Highcharts);

export default class Dashboard extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.getChartData();
    }

    getChartData(){

    }

    render(){
        return(
            <div className='dashboardBody'>
                <div id='dataDanceCharts' style={{width: '100%', height: '100%'}}></div>
            </div>
        )
    }
}