export function defaultConfig(option,type,isMergerOption = true){
    if(!type){
        type = option.series && option.series.type || option.series[0].type ;
    } 
    if(isMergerOption){
        try {
            var legendData = [];
        switch(type){
            case 'line' : return {
                ...lineConfig,
                series:option.series.slice(0).map(v=>{
                v.stack= '总量';
                v.areaStyle= {normal: {}};
                v.label = {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                };
                legendData.push(v.name);
        }),
                legend:{data:legendData}
        };
            case 'bar': return {
                ...barConfig,
                yAxis:option.yAxis.slice(0).map(v=>{
                    v.type = 'value';
                    /* v.min = 0;
                    v.max = 250; */
                    v.axisLabel = {
                        formatter: '{value} °C'
                    };
                }),
                series:option.series.slice(0).map(v=>{
                    v.type = 'bar'; legendData.push( v.name);
                }),
                legend:{data:legendData}
            };

            default : return {...[type+'Config'],option}
    }
        } catch (error) {
            console.log(error)
        }

        return {...[type+'Config'],...option};
    }

        
}



let pieConfig = {
    label : {
        normal: {
            show: false,
            position: 'center',
            textStyle: {
                fontSize: '18'
            },
            formatter: "{d}% \n{b}",
        },
        emphasis: {
            show: true,
            textStyle: {
                fontSize: '18',
            }
        }
    },
    labelLine: {
        normal: {
            show: false
        }
    },
    legend : {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
    },
};

let lineConfig = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    series:[{
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
    }]
};
let barConfig = {
    colors : ['#5793f3', '#d14a61', '#675bba'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
};

let mapConfig = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode : 'multiple',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name:'广东', selected:true}
            ]
        }
    ]
};



