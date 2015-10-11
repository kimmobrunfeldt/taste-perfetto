# Contributing

Rules:

* Everything in English.
* All ingredients are measured in grams. If the ingredient is less then a gram, use either decimals or a very precise description of the amount.
* Provide good pictures.
* Provide clear instructions.
* Quality first.

## Improving a recipe

You can either:

* Open an issue to suggest an improvement or start discussion
* Create a pull request to improve the recipe

    You should include the reasoning why your improvement makes the recipe better.

Remember to always reference the recipe with it's title.

## Adding a new recipe

Create a pull request where you have the following changes:

* Create a new folder under [recipes/](recipes/). Folder names are lower case and spaces are replaced with dashes.
* Inside the folder, create:

    * A markdown file, e.g. `pina-colada.md`. The name should match the folder name.

        Use the exactly same format as other recipes are using.

    * Images or GIFs
    * Other possible assets

    All files related to the single recipe is inside the directory.

* Link the new recipe to [README.md](README.md).


## Renaming post

See https://github.com/timnew/hexo-console-rename

## Videos

To create smaller videos with h.264 coded, use ffmpeg:

``` bash
ffmpeg -i input.mov -an -c:v libx264 -vf "scale=600:-2" -metadata:s:v:0 rotate=270 -pix_fmt yuv420p -movflags faststart output.mov
```

* `-an` Remove audio
* `-c:v libx264` Use h.264 codec
* `-vf "scale=600:-2"` Scale so that width is 600px
* `-metadata:s:v:0 rotate=270` Set video rotation
* `-pix_fmt yuv420p -movflags faststart` See [this answer](http://superuser.com/questions/750811/convert-avi-into-h-264-that-works-inside-an-html5-video-tag).
