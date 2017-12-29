$(document).ready(function(){
    $.backstretch([
        // "./img/bg1.jpg",
        "./img/bg2.jpg",
        "./img/bg3.png",
        "./img/bg4.jpg",
        "./img/bg5.jpg"
    ],{
        fade:2500,
        scale:"fill",
        transition:["fade","push_up","cover_left"],
        duration:5000
    });
    $("#regist").click(function(){
        $(window).attr("location","./regist.html");
    })



























})