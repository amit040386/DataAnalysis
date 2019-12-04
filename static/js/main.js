(function() {
  API.get('/data').then((data) => {
    const sensorData = data.sensor_data;
    const sensors = Helper.getAllSensors(sensorData);

    UI.renderSelectBox("seriesSelector", sensors);
    
  }).catch(() => {
    console.log('error');
  });
})();
