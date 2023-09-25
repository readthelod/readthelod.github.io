### item/list/carrousel/waved

This is a carrousel of which the items are waved blocks. The background is opace. It is used in the default layout.

#### Options

| Option | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| `title` |  title of the component | String | `null` |
| `items` | List of items | Object | `null` |
| `items.title` | Item title | String | `null` |
| `items.clickthrough_url` | Item url | String | `null` |
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
        - title: "example 2"
        clickthrough_url: "/example_url"
        description: "Test description"
---

{/% include item/list/carrousel/waved/main.html include=page.example %}
```