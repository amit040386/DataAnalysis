const UI = (function() {

  const renderSelectBox = ({ id, data, disableOption, placeholder }) => {
    const arr = [];
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    if (placeholder) {
      arr.push(`<option value='-1'>${placeholder}</option>`);
    }

    data.forEach(({ key, label }) => {
      arr.push(`<option value='${key}' ${disableOption === key ? 'disabled=true' : ''}>${label}</option>`);
    });

    element.innerHTML = arr.join('');
  };

  const addEventListener = (id, eventName, callback) => {
    document.getElementById(id).addEventListener(eventName, ({ target: { value } }) => {
      callback.call(null, value);
    }, false);
  };

  return {
    renderSelectBox,
    addEventListener
  };
})();
