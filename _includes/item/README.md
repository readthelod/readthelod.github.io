These nested templates visualise so called 'items' in different ways

## Which ones to use:

### for lists of items:

#### item/list/block/colored
#### item/list/card/colored
Renders each item in a 1/3rd block with a prominent background color from the vliz-scheme.
Only shows title and applies click-through.
TODO: distinction between block/card is not clear - why do we have both?

### item/list/row/image_text_link
Renders each item in a full row with 1-9-2 dsitributed cells.
These hold: image | title/tags + description | specific links

### item/list/row/text_image
Renders each item in a full row with 8-4 dsitributed cells.
These hold: title/tags + description | image

### item/list/carrousel/block
Renders each item as a block in a carrousel.
These blocks hold title and description.

### item/list/carrousel/waved
Renders each item as a block in a carrousel. Blocks-bottoms are wave-shaped.
These blocks hold title and description.


### for single items
#### item/single/row_and_wave
Displays the item in a row with 50-50 image and text+discription.
A wave is inserted over the image and under the text.



## way to use them

Some of these (see above) will take an additional `title= '... '`

These all expect an attribute `items=...` to be passed into them that looks like this:

```yml
items:
  - title: «required label for the thing»
    description: «optional description - not all templates use this»
    clickthrough_url: «optional link to follow»
    tags:
      - «optional tag#1»
      - «optional tag#2»
    icon_url:
      github: «github-url»
      cube: «packaging-url (like pypi)»
      eye: «demo-url»
      book: «docs-link»

```
Notes:
* for the icon_url you can add extra keys freely, they should just match the name of an [available font-awesome icon](https://fontawesome.com/search?q=&f=classic)
* for those includes taking single items (i.e. the ones in /single/), the construct passed is singular: `item=...`



## way to implement additional ones

* documentation 
  * add docs here
* css pickup, make sure to
  * introduce a div.included-item around the smallest group of tags that makes up one item
  * introduce a div.included-item-list.«your-name-here» around the included items
