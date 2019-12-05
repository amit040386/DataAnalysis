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

    const getScatterPlotData = (obj, series) => {
        const classLabels = obj.class_label;
        const seriesData = obj[series];
        const positiveClassArr = [];
        const negativeClassArr = [];

        classLabels.forEach((val, index) => {
            if (val === 1) {
                positiveClassArr.push([]);
            } else {
                negativeClassArr.push([]);
            }
        });

        return {
            "positiveClasLabel": positiveClassArr,
            "negativeClassLabel": negativeClassArr
        }
    };

    const getHistogramData = (obj, seriesName) => {
        return obj[seriesName];
    };

    const getMedianValue = (numbers) => {
        const numsLen = numbers.length;
        numbers.sort();
        return (numsLen % 2 === 0) ? (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2 : numbers[(numsLen - 1) / 2];
    };

    const getModeValue = (numbers) => {
        const modes = [];
        const count = {};
        let maxIndex = 0;

        numbers.forEach((number) => {
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        });

        for (index in count) {
            if (count[index] === maxIndex) {
                modes.push(Number(index));
            }
        }

        return modes[0];
    };

    const getMeanValue = (numbers) => (numbers.reduce((acc, val) => acc + val, 0) / numbers.length);

    const getTabularData = (obj) => {
        const keys = Object.keys(obj);
        const arr = [];
        keys.forEach((val) => {
            if (val.startsWith('sensor')) {
                const series = obj[val];
                const splitedVal = val.split('sensor');
                arr.push({
                    key: val,
                    series: `Sensor ${+splitedVal[1]+1}`,
                    mean: getMeanValue(series),
                    mode: getModeValue(series),
                    median: getMedianValue(series)
                });
            }
        });
        return arr;
    };

    return {
        getAllSensors,
        getScatterPlotData,
        getHistogramData,
        getTabularData
    };
})();
