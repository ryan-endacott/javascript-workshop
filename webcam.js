var webcam = (function() {

  var video;
  var canvas;
  var ctx;

  var hiddenCanvas;
  var hiddenCtx;

  var width;
  var height;

  var editor;

  var status;

  var imageDiv;

  var FPS = 1000 / 30;


  // Setup takes the ACE editor as input
  function setup(textEditor) {

    editor = textEditor;

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;

    // Check if browser is supported
    if (!navigator.getUserMedia) {
      alert('Sorry, it looks like your browser won\'t work with this project!  Try chrome or firefox!');
      return;
    }

    navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {

      video = document.querySelector('video');
      video.src = window.URL.createObjectURL(localMediaStream);

      // Get canvases
      canvas = document.getElementById("c1");
      ctx = canvas.getContext("2d");

      canvas.onclick = takePic;

      hiddenCanvas = document.getElementById("hidden-canvas");
      hiddenCtx = hiddenCanvas.getContext("2d");

      // Get other elements
      status = document.getElementById('status');
      imageDiv = document.getElementById('image-div');



      // Set up event to kickstart everything
      video.addEventListener("play", function() {
        width = video.videoWidth;
        height = video.videoHeight;
        canvas.width = width;
        canvas.height = height;
        hiddenCanvas.width = width;
        hiddenCanvas.height = height;
        timerCallback();
      }, false);

    }, function(err) {
      console.log(err);
    })
  }

  function timerCallback() {

    if (video.paused || video.ended) {
      return;
    }

    computeFrame();

    setTimeout(function () {
      timerCallback();
    }, FPS);
  }

  function computeFrame() {

    hiddenCtx.drawImage(video, 0, 0, width, height);

    var imageData = hiddenCtx.getImageData(0, 0, width, height);

    var rawPixels = imageData.data;

    var pixels = [];

    // Build pixels array
    for(var i = 0; i < rawPixels.length; i += 4) {

      var pos = i / 4;

      pixels.push({
        r: rawPixels[i],
        g: rawPixels[i + 1],
        b: rawPixels[i + 2],
        a: rawPixels[i + 3],
        x: pos % width,
        y: Math.floor(pos/width)
      });

    }

    computeUserInput(pixels);

    // Put the pixels back into image data form
    for (var i = 0, j = 0; i < pixels.length; i++, j += 4) {
      rawPixels[j] = pixels[i].r;
      rawPixels[j + 1] = pixels[i].g;
      rawPixels[j + 2] = pixels[i].b;
      rawPixels[j + 3] = pixels[i].a;
    }

    // Finally, draw pixels to screen
    ctx.putImageData(imageData, 0, 0);

  }

  function computeUserInput(pixels) {

    var input = editor.getValue();

    try {
      // Get user filter function then use it
      eval(input);
      filter(pixels);

      // status messages
      status.innerHTML = 'Interpreted Successfully';
      status.style.color = '#264409';
      status.style.backgroundColor = '#C6D880';
    } catch(e) {
      status.innerHTML = e;
      status.style.color = '#8A1F11';
      status.style.backgroundColor = '#FBE3E4';
    }

  }

  // Add an image to the bottom of the page
  function takePic() {

    var dataURL = canvas.toDataURL();

    var img = document.createElement('img');
    img.src = dataURL;

    imageDiv.appendChild(img);
  }

  // Setup is public
  return {
    setup: setup
  }

})();

window.webcam = webcam;