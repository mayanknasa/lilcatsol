document.addEventListener('DOMContentLoaded', function () {
    const canvas = new fabric.Canvas('canvas');
    const imageUpload = document.getElementById('imageUpload');
    const downloadButton = document.getElementById('downloadButton');
  
    imageUpload.addEventListener('change', function (e) {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
          const fabricImg = new fabric.Image(img);
          canvas.clear();
          canvas.setWidth(img.width);
          canvas.setHeight(img.height);
          canvas.add(fabricImg);
          addCapOverlay(canvas);
        };
        img.src = event.target.result;
      };
  
      reader.readAsDataURL(file);
    });
  
    function addCapOverlay(canvas) {
      fabric.Image.fromURL('cap.png', function (capImg) {
        capImg.set({
          scaleX: 0.5,
          scaleY: 0.5,
          left: canvas.width / 2,
          top: canvas.height / 2,
          selectable: true,
          transparentCorners: false,
          centeredRotation: true
        });
        canvas.add(capImg);
        canvas.setActiveObject(capImg);
      });
    }
  
    downloadButton.addEventListener('click', function () {
      const dataUrl = canvas.toDataURL({ format: 'png' });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'edited_image.png';
      a.click();
    });
  });
  