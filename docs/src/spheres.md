```@raw html
<canvas id="unity-canvas" width=816 height=510 tabindex="-1" style="width: 816px; height: 510px; background: #231F20"></canvas>

<script src="unity/Spheres/Spheres.loader.js"></script>
<script>
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    // Mobile device style: fill the whole browser client area with the game canvas:
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
    document.getElementsByTagName('head')[0].appendChild(meta);
    var canvas = document.querySelector("#unity-canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.position = "fixed";
    document.body.style.textAlign = "left";
    }
    createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "unity/Spheres/Spheres.data",
    frameworkUrl: "unity/Spheres/Spheres.framework.js",
    codeUrl: "unity/Spheres/Spheres.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "ControlN7Visuals",
    productVersion: "0.1",
    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
    });
</script>
```