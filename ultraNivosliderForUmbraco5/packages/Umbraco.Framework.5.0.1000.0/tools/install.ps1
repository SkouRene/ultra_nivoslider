param($installPath, $toolsPath, $package, $project)

# Try to delete Dynamic Expressions.html
if ($project) {
	$project.ProjectItems | ForEach { if ($_.Name -eq "Dynamic Expressions.html") { $_.Delete() } }
}