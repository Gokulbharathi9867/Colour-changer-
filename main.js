const btn = document.getElementsByClassName(".btn");
const hexcode = document.getElementsByClassName(".hexcode");
const randomcolorcode=[
    "#FF0000",
    "#00FFFF",
    "#0000FF",
    "#00008B",
    "#ADD8E6",
    "#800080",
    "#FFFF00",
    "#00FF00",
    "#FF00FF",
    "#C0C0C0",
    "#808080",
    "#000000",
    "#FFA500",
    "#A52A2A",
    "#800000",
    "#008000",
    "#808000",

];
btn.addEventListener("CLICK", () =>{
    const random = randomcolorcode[Math.floor(Math.random() * randomcolorcode.length)];
    document.body.style.background = random;
    hexcode.textcontent = random;
});