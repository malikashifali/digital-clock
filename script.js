// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s + " " + session;
//     // document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;
    
//     setTimeout(showTime, 1000);
    
// }

// showTime();



function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM" ;
    if(hour == 0){
        hour = 12
    }
    if(hour > 12){
        hour = hour - 12 ;
        session = "PM"
    }

    hour = (hour < 10) ? "0" + hour : hour ;
    minutes = (minutes < 10) ? "0" + minutes : minutes ;
    seconds = (seconds < 10) ? "0" + seconds : seconds ;

    let time = hour + ":" + minutes + ":" + seconds + " " + session ;
    document.getElementById("MyClockDisplay").textContent = time ;

    setTimeout(showTime, 1000)
    
}

showTime()


// let arr = [1,4,2,4,3,3,2,6,6,0,1,2]
// let newArr = [...new Set(arr)]
// console.log(arr)
// console.log(newArr)


// const int = 1553/10 | 0 ;;s