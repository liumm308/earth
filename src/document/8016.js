/**
 *@author  liumm308
 *@data  2020/08/25 18:29
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

export default class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            inputData: [],
        };
    }

    componentDidMount(){
        this.getInputData();
        this.getChartData();
    }

    getInputData(){
        this.setState({
            inputData: data.getUniversityInfoObj()
        });
        console.log(data.getComyInfo());
    }

    getChartData(){

        let dayArr = [],
            addrArr = ['上海','浙江','广东','北京','湖南','四川','江苏','陕西','河北','吉林','福建','湖北','河南','天津','台湾','安徽','贵州','山东','重庆','辽宁','江西','亚洲','北美洲','广西','山西','黑龙江','海南','香港','新疆','青海','甘肃','欧洲','云南','内蒙古','宁夏','西藏','北京'],
            cetArr =  [
                '金融','医疗健康','电子商务','教育','汽车交通','工具软件','本地生活','房产服务','广告营销','文娱传媒','游戏','体育运动','物流','社交网络','企业服务','硬件','旅游','新工业','农业'
            ],
            finaArr = ["B轮","A轮","尚未获投","种子轮","天使轮","A+轮","战略投资","B+轮","已上市","已被收购","不明确","Pre-A轮","D轮","E轮","C轮","新三板"],
            reasonArr = ["政策监管 法律法规风险","行业竞争","市场伪需求","商业模式匮乏 行业竞争","现金流断裂","烧钱 现金流断裂 行业竞争","商业模式匮乏 现金流断裂","undefined","烧钱 现金流断裂","现金流断裂 行业竞争","业务调整","市场伪需求 商业模式匮乏","烧钱 行业竞争","商业模式匮乏","业务过于分散 行业竞争","市场伪需求 商业模式匮乏 产品入场时机","现金流断裂 融资能力不足","政策监管","产品入场时机","市场伪需求 政策监管 法律法规风险","产品缺陷严重 产品入场时机 烧钱 融资能力不足","商业模式匮乏 业务过于分散","定价/成本问题 行业竞争","定价/成本问题","现金流断裂 营销不足","融资能力不足","定价/成本问题 营销不足","业务过于分散","市场伪需求 融资能力不足","产品入场时机 行业竞争","业务调整 融资能力不足","商业模式匮乏 产品入场时机","融资能力不足 行业竞争","行业竞争 产品入场时机 烧钱","市场伪需求 业务过于分散","市场伪需求 烧钱 现金流断裂 营销不足","市场伪需求 商业模式匮乏 业务过于分散","产品入场时机 烧钱 政策监管","创始人问题","业务调整 转型问题","产品入场时机 烧钱","产品缺陷严重 业务过于分散","市场伪需求 产品入场时机 行业竞争","业务调整 产品入场时机","融资能力不足 政策监管","市场伪需求 现金流断裂","法律法规风险 政策监管","创始人问题 政策监管 法律法规风险","创始人问题 团队能力不足","法律法规风险","创始人问题 与投资人冲突 团队能力不足 团队缺乏激情","不重视客户 业务调整","烧钱 现金流断裂 融资能力不足 行业竞争","与投资人冲突 融资能力不足","业务调整 行业竞争","现金流断裂 商业模式匮乏","商业模式匮乏 融资能力不足","政策监管 法律法规风险 行业竞争","业务过于分散 产品入场时机","现金流断裂 政策监管","业务过于分散 创始人问题","烧钱 融资能力不足 行业竞争","产品入场时机 烧钱 行业竞争","融资能力不足 营销不足 行业竞争","商业模式匮乏 产品入场时机 行业竞争","市场伪需求 产品缺陷严重 烧钱 行业竞争","产品缺陷严重","产品缺陷严重 转型问题","商业模式匮乏 烧钱 现金流断裂","团队能力不足 现金流断裂","市场伪需求 商业模式匮乏 行业竞争","业务过于分散 产品缺陷严重 烧钱","现金流断裂 转型问题","商业模式匮乏 转型问题","产品入场时机 转型问题","市场伪需求 商业模式匮乏 烧钱","市场伪需求 业务调整 转型问题","市场伪需求 行业竞争","不重视客户","营销不足","创始人问题 现金流断裂","烧钱 现金流断裂 融资能力不足","融资能力不足 政策监管 法律法规风险 行业竞争","现金流断裂 定价/成本问题","现金流断裂 法律法规风险","业务过于分散 团队能力不足","烧钱 行业竞争 现金流断裂","市场伪需求 商业模式匮乏 政策监管 法律法规风险","业务调整 法律法规风险","业务过于分散 业务调整","团队能力不足 行业竞争","转型问题","业务调整 产品缺陷严重","政策监管 行业竞争","营销不足 行业竞争","业务过于分散 产品缺陷严重","创始人问题 政策监管","商业模式匮乏 产品缺陷严重","法律法规风险 行业竞争","团队能力不足","产品缺陷严重 行业竞争","产品入场时机 营销不足","市场伪需求 法律法规风险","定价/成本问题 法律法规风险","转型问题 行业竞争","商业模式匮乏 定价/成本问题","产品缺陷严重 营销不足","市场伪需求 烧钱 现金流断裂","创始人问题 融资能力不足","业务调整 现金流断裂","业务调整 定价/成本问题","融资能力不足 营销不足","产品缺陷严重 定价/成本问题","烧钱 定价/成本问题","烧钱 融资能力不足","商业模式匮乏 产品入场时机 烧钱","业务过于分散 烧钱","业务调整 烧钱","市场伪需求 业务过于分散 产品入场时机 烧钱","产品缺陷严重 烧钱 行业竞争","商业模式匮乏 业务调整","烧钱 定价/成本问题 行业竞争","商业模式匮乏 烧钱","业务过于分散 融资能力不足","产品入场时机 融资能力不足","产品入场时机 烧钱 融资能力不足","创始人问题 团队缺乏激情","产品入场时机 烧钱 现金流断裂 融资能力不足","市场伪需求 产品入场时机","业务调整 烧钱 转型问题","业务过于分散 转型问题 商业模式匮乏","不重视客户 行业竞争","业务过于分散 转型问题","与投资人冲突 烧钱","市场伪需求 定价/成本问题","业务调整 烧钱 行业竞争","商业模式匮乏 营销不足","市场伪需求 业务调整 烧钱","市场伪需求 烧钱","团队能力不足 现金流断裂 融资能力不足","产品入场时机 烧钱 现金流断裂","产品入场时机 政策监管","融资能力不足 转型问题","商业模式匮乏 现金流断裂 行业竞争","融资能力不足 定价/成本问题","现金流断裂 商业模式匮乏 行业竞争","创始人问题 与投资人冲突","与投资人冲突 现金流断裂","市场伪需求 营销不足","团队能力不足 产品缺陷严重 法律法规风险"];






        for(let i=1;i<5000;i++){
            dayArr.push(i);
        }

        let chart = Highcharts.chart('dataDanceCharts', {
            credits: {
                enabled:false
            },
            colors: ['#aa44de','#59ADED','#EB5962','#F7C739','#EB5962','#7585A2','#aa44de','#F7C739','#F58C61','#EB5962','#FC8BB4','#7F73DF','#59ADED','#45B1A9'],

            chart: {
                type: 'spline',
                parallelCoordinates: true,
                parallelAxes: {
                    lineWidth: 2
                }
            },
            title: {
                text: null
            },
            plotOptions: {
                series: {
                    animation: false,
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },
                    states: {
                        hover: {
                            halo: {
                                size: 0
                            }
                        }
                    },
                    events: {
                        mouseOver: function () {
                            this.group.toFront();
                        }
                    }
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
                '{series.name}: <b>{point.formattedValue}</b><br/>'
            },
            xAxis: {
                categories: [
                    '地址',
                    '领域',
                    '创办时间',
                    '倒闭时间',
                    '运营天数',
                    '融资情况',
                    '关闭原因',
                ],
            },
            yAxis: [{
                categories: addrArr
            }, {
                categories: cetArr
            }, {
                categories: [
                    1985,
                    1990,
                    2000,
                    2003,
                    2004,
                    2005,
                    2006,
                    2007,
                    2008,
                    2009,
                    2010,
                    2011,
                    2012,
                    2013,
                    2014,
                    2015,
                    2016,
                    2017,
                    2018,
                    2019,
                ]
            }, {
                categories: [
                    1985,
                    1990,
                    2000,
                    2003,
                    2004,
                    2005,
                    2006,
                    2007,
                    2008,
                    2009,
                    2010,
                    2011,
                    2012,
                    2013,
                    2014,
                    2015,
                    2016,
                    2017,
                    2018,
                    2019,
                ]
            }, {
                categories: dayArr
            }, {
                categories: finaArr
            }, {
                categories: reasonArr
            }],
            colors: ['rgba(11, 200, 200, 0.1)'],
            series: data.getComyInfo().comyArr.slice(0,2000).map(function (set) {
                set[0] = (()=>{
                    for(let item=0;item< addrArr.length;item++){
                        if(addrArr[item]==set[0]){
                            return item;
                        }
                    }
                })();
                set[1] = (()=>{
                    for(let item=0;item< cetArr.length;item++){
                        if(cetArr[item]==set[1]){
                            return item;
                        }
                    }
                })();
                set[2] = parseInt(set[2].substring(0,4));
                set[3] = parseInt(set[3].substring(0,4));
                set[4] = (() =>{
                    if(set[4]=="undefined"){
                        return 0;
                    } else {
                        return parseInt(set[4])
                    }
                })();
                set[5] = (()=>{
                    for(let item=0;item< finaArr.length;item++){
                        if(finaArr[item]==set[5]){
                            return item;
                        }
                    }
                })();
                set[6] = (()=>{
                    for(let item=0;item< reasonArr.length;item++){
                        if(reasonArr[item]==set[6]){
                            return item;
                        }
                    }
                })();
                return {
                    name: set[0],
                    data: set,
                    shadow: false
                };
            })
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