(function() {
  const renderCharts = (seriesName, sensorData, anotherSeriesName) => {
    const histogramData = Helper.getHistogramData(sensorData, seriesName);
    const tableData = Helper.getTabularData(sensorData);
    const selectedSeriesMean = tableData.filter(({ key }) => (key === seriesName))[0];

    Chart.render("histogramPlotContainer", "histogram", histogramData);
    Chart.render("boxPlotContainer", "boxplot", histogramData, { mean: selectedSeriesMean.mean });
    Chart.render("tableContainer", "table", tableData);
  };

  API.get('/data').then((data) => {
    const sensorData = data.sensor_data;
    const sensors = Helper.getAllSensors(sensorData);

    renderCharts('sensor0', sensorData, 'sensor1');

    UI.renderSelectBox({
      id: "seriesSelector",
      data: sensors
    });

    UI.addEventListener("seriesSelector", "change", (val) => {
      renderCharts(val, sensorData, val);
    });

  }).catch(() => {
    console.log('error');
  });

})();
