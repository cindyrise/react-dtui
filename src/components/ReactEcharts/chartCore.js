import React from 'react';
import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
// import 'echarts/lib/chart/line'
// import theme from '../../chartconfig/theme'
import {defaultConfig} from './baseConfig'
import matchType from './dynamicRequire'

export default class ReactChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chartInstance:null,
        }
    }
    componentDidMount() {
        this.init()
      }
      componentDidUnMount() {
        this.chartInstance = null;
        window.dispatchEvent('resize');
      }

      
      componentDidUpdate() {
        this.init()
      }
    init(){
        let{type = 'line',option, handleEvent = null,theme,isMergeOption = true} = this.props;
        matchType(type);
        isMergeOption && defaultConfig(option,type,isMergeOption);
        var mychart = this.echarts.init("ReactChart");
        this.setState({
            chartInstance:mychart
        });
        handleEvent && this.bindEvent(events);
        resizeBy();
     };

     bindEvent = (handleEvent)=>{
         if(this.state.chartInstance == null || handleEvent == null){ return }
        var arr = Object.entries(handleEvent);
        arr.forEach((v,i)=>{
            this.chartInstance.on(`${v[0]}`,(params)=>{
                handleEvent[v[1]].bind(params,this.chartInstance)
            })
        })

     };
     resizeBy = ()=>{
        window.addEventListener('resize' , function() {
            this.state.chartInstance.resize()
        })
     }


    render(){
        const { width="100%", height="400px" } = this.props.style
        return (<div ref="ReactChart" style={{width,height}}></div>)
    }

}