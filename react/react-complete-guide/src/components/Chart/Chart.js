import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = dataPointValues.reduce((a,b) => Math.max(a,b), 0); //find max value in an array, if using Math.max => maybe there is error if array is too big

    return <div className='chart'>
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>)}
    </div>
};

export default Chart;