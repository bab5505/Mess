document.addEventListener('mousemove', function (e){
    console.log(e.pageX, e.pageY);
    const r = Math.round(e.pageX * 255 / window.innerWidth);
    console.log(r);
    const q = Math.round(e.pageY * 255 / window.innerHeight);
    console.log(r, 0, q);
    const color = `rgb(${r}, ${q}, 0)`;
    document.body.style.backgroundColor = color;
    console.log(color);
});
