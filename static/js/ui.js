const UI = (function() {

  const renderSelectBox = (id, list) => {
    const arr = [];
    list.forEach(({ key, label }) => {
      arr.push(`<option value='${key}'>${label}</option>`);
    });

    document.getElementById(id).innerHTML = arr.join('');
  };

  return {
    renderSelectBox
  };
})();
