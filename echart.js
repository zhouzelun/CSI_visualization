var real_Chart = echarts.init(document.getElementById('real_pic'));
var imag_Chart = echarts.init(document.getElementById('imag_pic'));
var abs_Chart = echarts.init(document.getElementById('abs_pic'));
var carries=[];
for(var i =1;i<=114;i++){
    carries.push("cr"+i);
}
var num_data_real = require('electron').remote.getGlobal('sharedObject').realProperty;
//document.write(num_data_real);
var num_data_imag = require('electron').remote.getGlobal('sharedObject').imagProperty;
var num_data_abs = require('electron').remote.getGlobal('sharedObject').absPropert;
var num_data_abs = require('electron').remote.getGlobal('sharedObject').abstimePropert;
setInterval(function () {
    num_data_real = require('electron').remote.getGlobal('sharedObject').realProperty;
    num_data_imag = require('electron').remote.getGlobal('sharedObject').imagProperty;
    my_option_series_real = [
        {
            name: 'line1',
            type: 'line',
            stack: '总量',
            data: num_data_real[0]
        },
        {
            name: 'line2',
            type: 'line',
            stack: '总量',
            data: num_data_real[1]
        },
        {
            name: 'line3',
            type: 'line',
            stack: '总量',
            data: num_data_real[2]
        },
        {
            name: 'line4',
            type: 'line',
            stack: '总量',
            data: num_data_real[3]
        },
        {
            name: 'line5',
            type: 'line',
            stack: '总量',
            data: num_data_real[4]
        },
        {
            name: 'line6',
            type: 'line',
            stack: '总量',
            data: num_data_real[5]
        },
        {
            name: 'line7',
            type: 'line',
            stack: '总量',
            data: num_data_real[6]
        },
        {
            name: 'line8',
            type: 'line',
            stack: '总量',
            data: num_data_real[7]
        },
        {
            name: 'line9',
            type: 'line',
            stack: '总量',
            data: num_data_real[8]
        }
    ];
    
    my_option_series_imag = [
        {
            name: 'line1',
            type: 'line',
            stack: '总量',
            data: num_data_imag[0]
        },
        {
            name: 'line2',
            type: 'line',
            stack: '总量',
            data: num_data_imag[1]
        },
        {
            name: 'line3',
            type: 'line',
            stack: '总量',
            data: num_data_imag[2]
        },
        {
            name: 'line4',
            type: 'line',
            stack: '总量',
            data: num_data_imag[3]
        },
        {
            name: 'line5',
            type: 'line',
            stack: '总量',
            data: num_data_imag[4]
        },
        {
            name: 'line6',
            type: 'line',
            stack: '总量',
            data: num_data_imag[5]
        },
        {
            name: 'line7',
            type: 'line',
            stack: '总量',
            data: num_data_imag[6]
        },
        {
            name: 'line8',
            type: 'line',
            stack: '总量',
            data: num_data_imag[7]
        },
        {
            name: 'line9',
            type: 'line',
            stack: '总量',
            data: num_data_imag[8]
        }
    ];

    my_option_series_abs = [
        {
            name: 'line1',
            type: 'line',
            stack: '总量',
            data: num_data_abs[0]
        },
        {
            name: 'line2',
            type: 'line',
            stack: '总量',
            data: num_data_abs[1]
        },
        {
            name: 'line3',
            type: 'line',
            stack: '总量',
            data: num_data_abs[2]
        },
        {
            name: 'line4',
            type: 'line',
            stack: '总量',
            data: num_data_abs[3]
        },
        {
            name: 'line5',
            type: 'line',
            stack: '总量',
            data: num_data_abs[4]
        },
        {
            name: 'line6',
            type: 'line',
            stack: '总量',
            data: num_data_abs[5]
        },
        {
            name: 'line7',
            type: 'line',
            stack: '总量',
            data: num_data_abs[6]
        },
        {
            name: 'line8',
            type: 'line',
            stack: '总量',
            data: num_data_abs[7]
        },
        {
            name: 'line9',
            type: 'line',
            stack: '总量',
            data: num_data_abs[8]
        }
    ];
    
    
    option_real = {
        title: {
            text: 'REAL DATA'
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: carries
        },
        yAxis: {
            type: 'value'
        },
        series: my_option_series_real
    };
    
    option_abs = {
        title: {
            text: 'ABS DATA'
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: carries
        },
        yAxis: {
            type: 'value'
        },
        series: my_option_series_abs
    };

    option_imag = {
        title: {
            text: 'IMAG DATA'
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: carries
        },
        yAxis: {
            type: 'value'
        },
        series: my_option_series_imag
    };
    real_Chart.setOption(option_real);
    imag_Chart.setOption(option_imag);
    abs_Chart.setOption(option_abs);
    
}, 1000);
