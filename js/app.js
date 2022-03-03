document.querySelector(".open").addEventListener("click", toggleLite);
// document.querySelector(".close").addEventListener("click", imgOff);
let isOn = false;
function toggleLite()
{
    isOn = !isOn;
    if (isOn)
    {
        document.querySelector(".off").src = "../imgs/pic_bulbon.gif"
    } else
    {
        document.querySelector(".off").src = "../imgs/pic_bulboff.gif"
    }
}
// function imgOff()
// {
//     document.querySelector(".off").src = "../imgs/pic_bulboff.gif";
// };
// function imgOn()
// {
//     document.querySelector(".off").src = "../imgs/pic_bulbon.gif";
// };

