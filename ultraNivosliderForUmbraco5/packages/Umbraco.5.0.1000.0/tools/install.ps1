param($rootPath, $toolsPath, $package, $project)

# Try to delete App_Start folder and license.txt
# Remove WebActivator assembly reference
# Copy umbraco files from package to project folder
# Open readme.txt file
# TODO - Set Visual Studio Project property to enable IISExpress
if ($project) {
	
	$projectPath = Split-Path $project.FullName -Parent
	$projectPathAppStart = Join-Path $projectPath "App_Start"
	$AppStartFolderExists = Test-Path $projectPathAppStart
	if($AppStartFolderExists)
	{
		$project.ProjectItems | ForEach { if ($_.Name -eq "App_Start") { $_.Remove() } }
		Remove-Item $projectPathAppStart -Recurse -Force
	}
	
	$project.ProjectItems | ForEach { if ($_.Name -eq "license.txt") { $_.Delete() } }
	
	$project.Object.References | Where-Object { $_.Name -eq 'WebActivator' } | ForEach-Object { $_.Remove() }
	
	$umbracoFilesPath = Join-Path $rootPath "UmbracoFiles\*"
	$projectDestinationPath = Split-Path $project.FullName -Parent
	Copy-Item $umbracoFilesPath $projectDestinationPath -recurse -force
	
	$DTE.ItemOperations.OpenFile($toolsPath + '\Readme.txt')
}