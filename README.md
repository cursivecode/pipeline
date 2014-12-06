# Pipeline
> Elixir library ...

At this point pipeline is in the design phase.

The main goal of the project is to provide a simple way to add and handle assets within Phoenix.  The tool of choice is Gulp because of its ease of use, number of plugins, and similarities to Elixir in regards to transforming data.

## Getting Started

### Requirements

- Elixir v1.0.2+

### Setup

1. Install Phoenix

        git clone https://github.com/phoenixframework/phoenix.git && cd phoenix && git checkout v0.6.1 && mix do deps.get, compile


2. Create a new Phoenix application

        mix phoenix.new my_app /path/to/scaffold/my_app

    *Important*: Run this task in the Phoenix installation directory cloned in the step above. The path provided: `/path/to/scaffold/my_app/` should be outside of the framework installation directory. This will either create a new application directory or install the application into an existing directory.

    #### Examples:
        mix phoenix.new my_app /Users/you/projects/my_app
        mix phoenix.new my_app ../relative_path/my_app

4. cd out of phoenix directory

         cd ..

3. Install Pipeline

        git clone https://github.com/cursivecode/pipeline.git && cd pipeline && mix do deps.get, compile

4. Run Pipeline Script

        mix pipe /path/to/scaffold/my_app

5. Change directory to `/path/to/scaffold/my_app`. Install dependencies and start web server

        mix do deps.get, compile
        gulp serve