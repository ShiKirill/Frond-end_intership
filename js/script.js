document.getElementById("list").options[2].selected = true;
let pict_slope = document.getElementsByClassName('check_icon_slope');
let elements_slope = document.querySelectorAll("[id^='slope']");
for (let e = 0; e < elements_slope.length; e++) {
    let val_slope = elements_slope[e].getAttribute('data-value');
    if (val_slope >= 95 && val_slope <= 105) pict_slope[e].src = "pictures/Green.svg"
    else pict_slope[e].src = "pictures/Red.svg";
}
let pict_offset = document.getElementsByClassName('check_icon_offset');
var elements_offset = document.querySelectorAll("[id^='offset']");
for (let e = 0; e < elements_offset.length; e++) {
    let val_offset = elements_offset[e].getAttribute("data-value");
    if (val_offset >= -20 && val_offset <= 20) pict_offset[e].src = "pictures/Green.svg";
    else pict_offset[e].src = "pictures/Red.svg";
}