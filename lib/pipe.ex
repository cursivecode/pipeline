defmodule Mix.Tasks.Pipe do
	@shortdoc "Basic phoenix assets setup"

	@moduledoc """
	Basic phoenix assets setup	
	"""
	def run([project_root]) do
		if !File.dir? "#{project_root}/priv/assets" do
			File.mkdir! "#{project_root}/priv/assets"
			File.mkdir!"#{project_root}/priv/assets/coffeescripts"
			File.mkdir! "#{project_root}/priv/assets/javascripts"
			File.mkdir! "#{project_root}/priv/assets/stylesheets"
			File.cp! "templates/stylesheets/phoenix.scss", "#{project_root}/priv/assets/stylesheets/phoenix.scss"
			File.cp! "templates/javascripts/main.js", "#{project_root}/priv/assets/javascripts/main.js"
			File.cp! "templates/coffeescripts/main.coffee", "#{project_root}/priv/assets/coffeescripts/main.coffee"
		end
		File.cp! "templates/gulp/gulpfile.js", "#{project_root}/gulpfile.js"
		File.cp! "templates/node/package.json", "#{project_root}/package.json"
		File.cp! "templates/layout/application.html.eex", "#{project_root}/web/templates/layout/application.html.eex"
		File.cd! project_root
		System.cmd "npm", ~w(install --save-dev gulp 
												gulp-uglify 
			                                    gulp-sass 
			                                    gulp-plumber 
			                                    gulp-livereload 
			                                    gulp-shell
			                                    gulp-concat 
			                                    gulp-sourcemaps 
			                                    gulp-coffee)
	end
	
end
