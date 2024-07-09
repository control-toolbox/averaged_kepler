using Documenter

makedocs(
    sitename = "AveragedKepler",
    format = Documenter.HTML(prettyurls = false),
    pages = [
        "Problem definition" => "index.md",
        "3D Visualization" => [
                               "Optimal Synthesis" => "synthesis.md",
                               "Spheres" => "spheres.md",
                               "Geodesics" => "geodesics.md",
                              ],
    ]
)

deploydocs(
    repo = "github.com/control-toolbox/averaged_kepler.git",
    devbranch = "main"
)
