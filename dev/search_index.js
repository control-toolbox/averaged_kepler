var documenterSearchIndex = {"docs":
[{"location":"spheres.html","page":"Spheres","title":"Spheres","text":"<canvas id=\"unity-canvas\" width=816 height=510 tabindex=\"-1\" style=\"width: 816px; height: 510px; background: #231F20\"></canvas>\n\n<script src=\"unity/Spheres/Spheres.loader.js\"></script>\n<script>\n    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {\n    // Mobile device style: fill the whole browser client area with the game canvas:\n    var meta = document.createElement('meta');\n    meta.name = 'viewport';\n    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';\n    document.getElementsByTagName('head')[0].appendChild(meta);\n    var canvas = document.querySelector(\"#unity-canvas\");\n    canvas.style.width = \"100%\";\n    canvas.style.height = \"100%\";\n    canvas.style.position = \"fixed\";\n    document.body.style.textAlign = \"left\";\n    }\n    createUnityInstance(document.querySelector(\"#unity-canvas\"), {\n    dataUrl: \"unity/Spheres/Spheres.data\",\n    frameworkUrl: \"unity/Spheres/Spheres.framework.js\",\n    codeUrl: \"unity/Spheres/Spheres.wasm\",\n    streamingAssetsUrl: \"StreamingAssets\",\n    companyName: \"DefaultCompany\",\n    productName: \"ControlN7Visuals\",\n    productVersion: \"0.1\",\n    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.\n    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.\n    });\n</script>","category":"page"},{"location":"geodesics.html","page":"Geodesics","title":"Geodesics","text":"<canvas id=\"unity-canvas\" width=816 height=510 tabindex=\"-1\" style=\"width: 816px; height: 510px; background: #231F20\"></canvas>\n\n<script src=\"unity/Geodesics/Geodesics.loader.js\"></script>\n<script>\n    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {\n    // Mobile device style: fill the whole browser client area with the game canvas:\n    var meta = document.createElement('meta');\n    meta.name = 'viewport';\n    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';\n    document.getElementsByTagName('head')[0].appendChild(meta);\n    var canvas = document.querySelector(\"#unity-canvas\");\n    canvas.style.width = \"100%\";\n    canvas.style.height = \"100%\";\n    canvas.style.position = \"fixed\";\n    document.body.style.textAlign = \"left\";\n    }\n    createUnityInstance(document.querySelector(\"#unity-canvas\"), {\n    dataUrl: \"unity/Geodesics/Geodesics.data\",\n    frameworkUrl: \"unity/Geodesics/Geodesics.framework.js\",\n    codeUrl: \"unity/Geodesics/Geodesics.wasm\",\n    streamingAssetsUrl: \"StreamingAssets\",\n    companyName: \"DefaultCompany\",\n    productName: \"ControlN7Visuals\",\n    productVersion: \"0.1\",\n    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.\n    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.\n    });\n</script>","category":"page"},{"location":"index.html#The-averaged-Kepler-problem","page":"Problem definition","title":"The averaged Kepler problem","text":"","category":"section"},{"location":"index.html","page":"Problem definition","title":"Problem definition","text":"@doc raw\"\"\" We consider the Hamiltonian","category":"page"},{"location":"index.html","page":"Problem definition","title":"Problem definition","text":"$","category":"page"},{"location":"index.html","page":"Problem definition","title":"Problem definition","text":"H(r, \\theta, p_r, p_\\theta) = v p_\\theta + \\Vert p \\Vert_{g}","category":"page"},{"location":"index.html","page":"Problem definition","title":"Problem definition","text":"$","category":"page"},{"location":"index.html","page":"Problem definition","title":"Problem definition","text":"where v is a constant, p = (p_r p_theta), and Vert cdot Vert_g is the norm induced by the metric","category":"page"},{"location":"index.html","page":"Problem definition","title":"Problem definition","text":"$","category":"page"},{"location":"index.html","page":"Problem definition","title":"Problem definition","text":"g = \\mathrm{d}r^2 + m_\\lambda^2(r)\\, \\mathrm{d}\\theta^2, \\quad \nm_\\lambda^2(r) = \\frac{\\sin^2 r}{1 - \\lambda \\sin^2 r}","category":"page"},{"location":"index.html","page":"Problem definition","title":"Problem definition","text":"$","category":"page"},{"location":"index.html","page":"Problem definition","title":"Problem definition","text":"with lambda = 45.","category":"page"},{"location":"index.html","page":"Problem definition","title":"Problem definition","text":"Along the geodesics, we have H+p^0 = 0. The parameter p^0 is constant equal to -1 (hyperbolic), 0 (abnormal) or 1 (elliptic).","category":"page"},{"location":"index.html","page":"Problem definition","title":"Problem definition","text":"Remark. We can parameterize the geodesics by the norm of the initial convector, setting Vertp_0Vert_g = 1.  This amounts to parameterize by the initial angle alpha_0: $     pr = \\sin \\alpha0, \\quad p\\theta = m\\lambda(r) \\cos \\alpha0. $ In that case, the hyperbolic geodeics are given by $     p\\theta\\, v + 1 = v\\, m\\lambda(r) \\cos \\alpha0 + 1 > 0.   $ \"\"\"","category":"page"},{"location":"synthesis.html","page":"Optimal Synthesis","title":"Optimal Synthesis","text":"<canvas id=\"unity-canvas\" width=816 height=510 tabindex=\"-1\" style=\"width: 816px; height: 510px; background: #231F20\"></canvas>\n\n<script src=\"unity/Synthesis/Synthesis.loader.js\"></script>\n<script>\n    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {\n    // Mobile device style: fill the whole browser client area with the game canvas:\n    var meta = document.createElement('meta');\n    meta.name = 'viewport';\n    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';\n    document.getElementsByTagName('head')[0].appendChild(meta);\n    var canvas = document.querySelector(\"#unity-canvas\");\n    canvas.style.width = \"100%\";\n    canvas.style.height = \"100%\";\n    canvas.style.position = \"fixed\";\n    document.body.style.textAlign = \"left\";\n    }\n    createUnityInstance(document.querySelector(\"#unity-canvas\"), {\n    dataUrl: \"unity/Synthesis/Synthesis.data\",\n    frameworkUrl: \"unity/Synthesis/Synthesis.framework.js\",\n    codeUrl: \"unity/Synthesis/Synthesis.wasm\",\n    streamingAssetsUrl: \"StreamingAssets\",\n    companyName: \"DefaultCompany\",\n    productName: \"ControlN7Visuals\",\n    productVersion: \"0.1\",\n    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.\n    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.\n    });\n</script>","category":"page"}]
}
