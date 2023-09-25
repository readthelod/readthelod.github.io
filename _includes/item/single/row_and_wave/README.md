### item/single/row_and_wave

This component is used to display a single item in a row with a wave background. It is used in the projects page.

#### Options

| Option | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| `item.title` | Item title | String | `null` |
| `item.clickthrough_url` | Item url | String | `null` |
| `item.clickthrough_text` | Item url | String | `null` |
| `items.image` | Item image | String | `null` |
| `item.description` | Item description | String | `null` |


#### Example with options

in the md file in the front matter add:

```yml
---
example:
    data:
        title: "GEORGE"
    item:
        title: "GEORGE"
        description: >-
          GEORGE is a Horizon Europe-funded project that develops novel technologies to improve ocean observations. The technologies developed
          will represent the next level in systematic long-term autonomous ocean observations.
        clickthrough_url: https://george-project.eu/
        clickthrough_text: "Visit the GEORGE website"
        image: "/assets/media/img/project/george-logo.png"
---

{/% include item/single/row_and_wave/main.html 
data=page.example.data 
item=page.example.item
%}
```