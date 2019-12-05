import React, { useState, useEffect } from "react";

import axios from "axios";
import { Bar } from "react-chartjs-2"

const chartStyle = {
  paddingTop:"100px",
  backgroundColor: '#c3fae7'
}

const getResource = url => {
  const [data, setData] = useState({labels: [], datasets: [{
    label: 'Duration of watering',
    data: [], 
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
  }]});

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log('starting')
    axios
      .get(url)
      .then((res) => {
       
        let chartData = {labels: [], datasets: [{label: 'Duration of watering ', backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)', data: [] }]};
        console.log(res);
        for(let row of res.data.data){
          chartData.labels.push(row.created_at);
          chartData.datasets[0].data.push(row.duration);
        }
       
        setData(chartData)
      })
      .catch((err) => {
        console.log('error', err)
        setError(err)
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
};

const Chart = () => {
  const { data, error, loading } = getResource("/api/sensor-history");
  
  if (error) {
    return <div>Oops</div>;
  }
  
  if (loading) {
    return <div>...loading</div>;
  }


  return (
    <div>
    <div style= {chartStyle}>
  <Bar 
  data={data}
  redraw={true}
  
  />
  </div>
  </div>
  );
  
};

export default Chart;


