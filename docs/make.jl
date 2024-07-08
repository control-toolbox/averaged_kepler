#using AveragedKepler
using Documenter

makedocs(
    sitename = "AveragedKepler",
    format = Documenter.HTML(prettyurls = false),
    pages = [
        "Home" => "index.md",
    ]
)

deploydocs(
    repo = "github.com/ocots/averaged_kepler.git",
    devbranch = "main"
)