
function showDate() {
    var demo = new Date(document.getElementById("demo").value);
  
    var day =demo.getDate();
    var month = demo.toLocaleString('default', { month: 'long' });
    var monthShort = demo.toLocaleString('default', { month: 'short' });
    var year = demo.getFullYear();
  
    var dayWithSuffix = day + getDayNumberSuffix(day);
  
    var outputStrings = [
        demo.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }),
      year ,month,
      monthShort,
      day,
      day + ' ' + month + ' ' + year,
      day + ' ' + month,
      day + ' ' + monthShort,
      month + ' ' + day,
      dayWithSuffix + ' ' + monthShort
    ];
  
    document.getElementById("output").innerHTML = outputStrings.join('<br>');
  }
  
  function getDayNumberSuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }