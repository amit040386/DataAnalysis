const API = (function() {
    const xhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    const callAPI = (url, method) => {
        return new Promise((resolve, reject) => {
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200 && this.responseText) {
                    resolve(JSON.parse(this.responseText));
                } else if (this.readyState === 4 && this.status !== 200) {
                    reject(this.error);
                }
            };
            xhttp.open(method, url, true);
            xhttp.send();
        });
    };

    return {
        get: (url) => {
            return callAPI(url, "GET");
        }
    };

})();
