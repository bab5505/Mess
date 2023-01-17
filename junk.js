document.addEventListener('DOMContentLoaded', function(e){
    e.preventDefault()
    const chooseImage = document.querySelector('#url');
    const textAbove = document.querySelector('#top');
    const textBelow = document.querySelector('#bottom');
    const button = document.querySelector('#btn');
    chooseImage.addEventListener("change", () => {
        const imageDataURL = URL.createObjectURL(chooseImage.files[0]);
        image = new Image();
        image.src = imageDataURL;
      });
    //   const canvas = document.querySelector('#canvas');
    // if (canvas.getContext) {
    //   var ctx = canvas.getContext("2d");
    //   // supported canvas code here
    // } else {
    //   // unsupported canvas code here
    // }
    if (canvas.getContext("2d")) {
          const ctx = canvas.getContext("2d");
          ctx.beginPath();
          const width = image.width;
          const height = image.height;
          const yOffSet = height / 7;
          // load the canvas background
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(image, 0, 0);
      } else {
        alert("Your browser does not support this image format");
      }
      if (canvas.getContext("2d")) {
          // styling the meme text
          ctx.font = "Bold 40px Sans-serif";
          ctx.fillStyle = "white";
          ctx.strokeStyle = "black";
          // adding the top meme text
          ctx.textBaseline = "Top";
          ctx.fillText(textAbove.value, width / 3, yOffSet);
          ctx.strokeText(textAbove.value, width / 3, yOffSet);
          // adding the bottom text
          ctx.textBaseline = "Bottom";
          ctx.fillText(textBelow.value, width / 3, height - yOffSet);
          ctx.strokeText(textBelow.value, width / 3, height - yOffSet);
      } else {
        alert("Your browser does not support this image format");
      }
      if (canvas.getContext("2d")) {
        const loadImage = () => {
          button.addEventListener("click", loadImage);
        };
      } else {
        alert("Your browser does not support this image format");
      }
});
