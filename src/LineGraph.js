import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const covid_history =
  'https://disease.sh/v3/covid-19/historical/all?lastdays=2';

// format the covid history data to support chartjs integration
const buildChartData = (data, casesType = 'cases') => {
  const chartData = [];
  let lastDataPoint;
  data[casesType].forEach((date) => {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  });
  return chartData;
};

function LineGraph() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(covid_history)
      .then((response) => response.json())
      .then((data) => {
        const chartData = buildChartData(data);
        setData(chartData);
      }, []);
  });

  return (
    <div>
      <h2>Graph comes here</h2>
    </div>
  );
}

export default LineGraph;
