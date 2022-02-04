<p align="center"><img src="https://i.imgur.com/WqwkPNa.png" /></p>

# ARMATO CLI

This is a command line interface tool for ARMATO. Initialize or start ARMATO server to sync with Roblox game project.

## Get Started

**Initialize project:**
`armato init` or `armato init [-c]`

**Start a local server:**
`armato serve`

## Commands

```console
init [name] [options]

	Options:

		-c			Only add 'armato.config.json' file


	Examples:

	- Initialize project in current directory
	armato init

	- Initialize project in new directory
	armato init [name]

	- Initialize project in new directory and only add config file
	armato init [name] -c



serve [options]

	Options:

		-ows			One way sync: if changes made in Roblox, it won't affect local files


	Examples:

	- Start server
	armato serve

	- Start serve with one way sync
	armato serve -ows
```
