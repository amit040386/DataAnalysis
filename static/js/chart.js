const Chart = (function() {

    const renderHistogramChart = (elementId, data) => {
        Highcharts.chart(elementId, {
            title: {
                text: ''
            },
            xAxis: [{
                title: { text: 'Data' },
                alignTicks: false
            }, {
                title: { text: 'Histogram' },
                alignTicks: false,
                opposite: true
            }],

            yAxis: [{
                title: { text: 'Data' }
            }, {
                title: { text: 'Histogram' },
                opposite: true
            }],

            series: [{
                name: 'Histogram',
                type: 'histogram',
                xAxis: 1,
                yAxis: 1,
                baseSeries: 's1',
                zIndex: -1
            }, {
                name: 'Data',
                type: 'scatter',
                data: data,
                id: 's1',
                marker: {
                    radius: 2
                }
            }]
        });
    };

    const renderTable = (element, data) => {
        const html = [
            "<table>",
            "<tr>",
            "<td>Series</td>",
            "<td>Mean</td>",
            "<td>Mode</td>",
            "<td>Median</td>",
            "</tr>"
        ];

        data.forEach(({ mean, mode, median, series }) => {
            html.push(`<tr><td>${series}</td><td>${mean}</td><td>${mode}</td><td>${median}</td></tr>`);
        });

        html.push("</table>");

        element.innerHTML = html.join('');
    };

    const renderChart = (id, chartType, data, config) => {
        const element = document.getElementById(id);

        if (!element) {
            return null;
        }

        switch (chartType) {
            case 'histogram':
                renderHistogramChart(element, data);
                break;
            case 'table':
                renderTable(element, data);
                break;
            default:
                return null;
        }
    };

    return {
        render: renderChart
    };

})();
