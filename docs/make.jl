using Documenter

makedocs(
    sitename = "AveragedKepler",
    format = Documenter.HTML(prettyurls = false),
    pages = [
        "Home" => "index.md",
        "3D Visualization" => [
                               "synthesis.md",
                               "spheres.md",
                               "geodesics.md",
                              ],
    ]
)

deploydocs(
    repo = "github.com/control-toolbox/averaged_kepler.git",
    devbranch = "main"
)
