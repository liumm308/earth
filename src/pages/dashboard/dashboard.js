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
import Pell from 'highcharts/modules/parallel-coordinates';
import Oldie from 'highcharts/modules/oldie';
import Printing from 'highcharts/modules/exporting';
import Wordcloud from 'highcharts/modules/wordcloud';
import data from '@/document/8014'

HighchartsMore(Highcharts);
Anno(Highcharts);
Pell(Highcharts);
Oldie(Highcharts);
Printing(Highcharts);
Wordcloud(Highcharts);

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputData: [],
        };
    }

    componentDidMount() {
        this.getInputData();
        this.getChartData();
    }

    getInputData() {
        this.setState({
            inputData: data.loveInfo()
        });
    }

    getChartData() {

        let chart = Highcharts.chart('dataDanceCharts', {
            credits: {
                enabled: false
            },
            colors: ['#aa44de', '#59ADED', '#EB5962', '#F7C739', '#EB5962', '#7585A2', '#aa44de', '#F7C739', '#F58C61', '#EB5962', '#FC8BB4', '#7F73DF', '#59ADED', '#45B1A9'],
            series: [{
                type: 'wordcloud',
                data: data.loveInfo().slice(0, 200)
            }],
            title: {
                text: '七夕口红店销量'
            }
        });
    }

    render() {
        return (
            <div className='dashboardBody'>
                <div id='dataDanceCharts' style={{width: '100%', height: '100%'}}></div>
            </div>
        )
    }
}