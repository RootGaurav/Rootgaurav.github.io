
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circlemousefollower()
{
window.addEventListener("mousemove",function(dets){
    document.querySelector("#mini").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    
})

}
circlemousefollower();

