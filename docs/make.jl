using VisuTest
using Documenter

makedocs(
    sitename = "Visualisation",
    format = Documenter.HTML(prettyurls = false),
    pages = [
        "Home" => "index.md",
    ]
)

deploydocs(
    repo = "https://github.com/ocots/VisuTest.git",
    devbranch = "main"
)