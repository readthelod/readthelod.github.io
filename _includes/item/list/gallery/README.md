### item/list/gallery

This is a gallery component for which all items are displayed in a grid. It is used in the default layout.

#### Options

| Option | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| `title` |  title of the component | String | `null` |
| `items` | List of items | Object | `null` |
| `items.title` | Item title | String | `null` |
| `items.clickthrough_url` | Item url | String | `null` |
| `items.image` | Item image | String | `null` |
| `items.date` | Item date | String | `null` |
| `items.description` | Item description | String | `null` |

#### Example with options

in the md file in the front matter add:

```yml
---
example:
    title: "Example"
    items:
        - title: "example 1"
          clickthrough_url: "/example_url"
          description: "Example descirption 1"
          image: "/assets/images/example.png"
          date: "2019-01-01"
        - title: "example 2"
          clickthrough_url: "/example_url"
          description: "Test description"
---

{/% include item/list/gallery/main.html 
    title=page.example.title
    items=page.example.items
%}
```