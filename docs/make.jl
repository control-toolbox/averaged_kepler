using Documenter

makedocs(
    sitename = "AveragedKepler",
    format = Documenter.HTML(prettyurls = false),
    pages = [
        "Home" => "index.md",
        "Geodesics" => "geodesics.md",
        "Sphere" => "sphere.md",
        "Synthetis" => "synthetis.md",
    ]
)

deploydocs(
    repo = "github.com/control-toolbox/averaged_kepler.git",
    devbranch = "main"
)
