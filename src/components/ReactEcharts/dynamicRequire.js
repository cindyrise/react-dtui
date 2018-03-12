export default function matchType(type='line'){
    switch (type){
        case 'line': import 'echarts/lib/chart/line';break;
        case 'bar': import 'echarts/lib/chart/bar';break;
        case 'pie': import 'echarts/lib/chart/pie';break;
        case 'scatter': import 'echarts/lib/chart/scatter';break;
        case 'map': require( 'echarts/lib/chart/map');break;
        case 'graph': import 'echarts/lib/chart/graph';break;
        default : break;
    }
}