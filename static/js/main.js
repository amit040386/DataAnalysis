(function() {
  API.get('/data').then((data) => {
    const sensorData = data.sensor_data;
    const sensors = Helper.getAllSensors(sensorData);
    const histogramData = Helper.getHistogramData(sensorData, 'sensor0');
    const tableData = Helper.getTabularData(sensorData);
    const selectedSeriesMean = tableData.filter(({ key }) => (key === 'sensor0'))[0];

    console.log(JSON.stringify(histogramData));

    UI.renderSelectBox({
      id: "seriesSelector",
      data: sensors
    });

    UI.renderSelectBox({
      id: "anotherSeriesSelector",
      data: sensors,
      disableOption: "sensor0",
      placeholder: "Please select another series"
    });

    Chart.render("histogramPlotContainer", "histogram", histogramData);
    Chart.render("boxPlotContainer", "boxplot", histogramData, { mean: selectedSeriesMean.mean });
    Chart.render("tableContainer", "table", tableData);

    UI.addEventListener("seriesSelector", "change", (val) => {
      UI.renderSelectBox({
        id: "anotherSeriesSelector",
        data: sensors,
        disableOption: val,
        placeholder: "Please select another series"
      });

      const scatterPlotData = Helper.getScatterPlotData(sensorData, val);
    });

  }).catch(() => {
    console.log('error');
  });

})();
