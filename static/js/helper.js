const Helper = (function() {

    const getAllSensors = (list) => {
        const keys = Object.keys(list);
        const arr = [];
        keys.forEach((val) => {
            if (val.startsWith('sensor')) {
                arr.push({ key: val, label: `Sensor ${parseInt(val.split('sensor')[1])+1}` });
            }
        });

        return arr;
    };

    return {
        getAllSensors
    };
})();
