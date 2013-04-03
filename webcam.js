var webcam = (function() {

  var video;
  var canvas;
  var ctx;

  var hiddenCanvas;
  var hiddenCtx;

  var width;
  var height;

  var editor;

  var FPS = 1000 / 30;


  // Setup takes the ACE editor as input
  function setup(textEditor) {

    editor = textEditor;

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;

    navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {

      video = document.querySelector('video');
      video.src = window.URL.createObjectURL(localMediaStream);

      // Get canvases
      canvas = document.getElementById("c1");
      ctx = canvas.getContext("2d");

      hiddenCanvas = document.getElementById("hidden-canvas");
      hiddenCtx = hiddenCanvas.getContext("2d");


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
      pixels.push({
        r: rawPixels[i],
        g: rawPixels[i + 1],
        b: rawPixels[i + 2],
      })
    }

    computeUserInput(pixels);

    // Put the pixels back into image data form
    for (var i = 0, j = 0; i < pixels.length; i++, j += 4) {
      rawPixels[j] = pixels[i].r;
      rawPixels[j + 1] = pixels[i].g;
      rawPixels[j + 2] = pixels[i].b;
    }

    // Finally, draw pixels to screen
    ctx.putImageData(imageData, 0, 0);

  }

  function computeUserInput(pixels) {

    var input = editor.getValue();

    try {
      eval(input);
      filter(pixels);
    } catch(e) {
    }

  }

  // Setup is public
  return {
    setup: setup
  }

})();

window.webcam = webcam;