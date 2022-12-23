client.once('ready', () => {
    function currentTime() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let month = date.getMonth() + 1;
        let dd = date.getDay() + 1; 
        let age = date.getFullYear() - 2002
        let session = "AM";

        if (hh == 0) {
            hh = 12;
        }
        if (hh > 12) {
            hh = hh - 12;
            session = "PM";
        }

        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;

        let time = month + '-' + dd + '-' +hh + "-" + mm + "-" + ss + session;
        let t = setTimeout(function () { currentTime() }, 1000);
        console.log(time)
    }
    console.log(`${currentTime()}`)
},)