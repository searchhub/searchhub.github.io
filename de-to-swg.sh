#!/bin/bash

# Keep in mind, that lines with a https link are not touched at all. Either translate them manually or put the link on a separate line (in Markdown a single linebreak does not create a paragraph or linebreak in the final html doc)
sed -r -f swabian.sed ui/readme.de.md > ui/readme.swg.md
