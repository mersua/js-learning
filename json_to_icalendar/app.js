'use strict';

let getData = function(url) {
    let res = new XMLHttpRequest();
    res.open('GET', url, false);
    res.send();

    //get response
    if(res.readyState == 4 && res.status == 200) {
        return JSON.parse(res.responseText);
    } else {
        console.log(res.status + ": " + res.statusText);
        return false;
    }
};



console.log(getData("http://javascript.kiev.ua/attach/icalendar/google_events.json"));