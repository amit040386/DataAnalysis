(function() {
    API.get('/data').then((data) => {
        const sensorData = data.sensor_data;
        console.log(sensorData);
    }).catch(() => {
        console.log('error');
    });
})();
