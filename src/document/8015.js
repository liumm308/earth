/**
 *@author  liumm308
 *@data  2020/08/15 23:46
 *@mail xidian_liu@163.com
 */

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
import data from '@/document/8014'

HighchartsMore(Highcharts);
Anno(Highcharts);

export default class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            inputData: [],
        }
    }

    componentDidMount(){
        //this.getChartData();
        this.getInputData();
    }

    getInputData(){
        this.setState({
            inputData: data.getUniversityInfoObj()
        });
        console.log(data.getComyInfo());
    }

    getChartData(){

        let chart = Highcharts.chart('dataDanceCharts', {
            chart: {
                type: 'area'
            },
            credits: {
                enabled:false
            },
            tooltip: {
                shared: true,
                crosshair: {
                    width: 1,
                    color: '#294b85'
                }
            },
            colors: ['#aa44de','#59ADED','#EB5962','#F7C739','#EB5962','#7585A2','#aa44de','#F7C739','#F58C61','#EB5962','#FC8BB4','#7F73DF','#59ADED','#45B1A9'],
            title: {
                text: '内蒙古2020高考成绩与人数分布图（理科）'
            },
            subtitle: {
                text: null
            },
            yAxis: {
                title: {
                    text: '考生数'
                }
            },
            annotations: [{
                labelOptions: {
                    backgroundColor: 'rgba(12,12,12,0.9)',
                    verticalAlign: 'bottom',
                    y: -20
                },
                labels: [{
                    point: '605',
                    text: '<p style="font-size:14">超过595~605高考总考生占比为：<p/><br><p style="font-size:14">3.54%~4.32%</p>'
                }]

            }],
            xAxis: {
                categories: [],
                crosshair: {
                    width: 3,
                    color: 'green'
                },
                plotBands: [{ // 标识出周末
                    from: 400,
                    to: 693.0,
                    color: 'rgba(68, 170, 213, .3)'
                }]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                floating:true
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    //pointStart: 2010
                }
            },
            series: [{
                name: '考生数2020',
                keys: ['y', 'id'],
                data: [],
                fillColor: {
                    linearGradient: [0, 0, 0, 350],
                    stops: [
                        [0, '#aa44de'],
                        [1, Highcharts.Color('#aa44de').setOpacity(0).get('rgba')]
                    ]
                }
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        });
    }

    render(){
        return(
            <div className='dashboardBody'>
                <div id='dataDanceCharts' style={{width: '100%', height: '100%'}}></div>
            </div>
        )
    }
}