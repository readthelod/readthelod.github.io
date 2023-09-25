## item/list/block/colored

This is a list of items with a colored background. It is used in the default layout.

### Options

| Option | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| `items` | List of items | Object | `null` |
| `items.title` | Item title | String | `null` |
| `items.clickthrough_url` | Item url | String | `null` |

### Example with options

in the md file in the front matter add:

```yml
---
items:
  - title: "Open Science"
    clickthrough_url: "#/open-science"
  - title: "Open Science at Departments"
    clickthrough_url: "#/open-science-at-departments"
  - title: "FAIR & Open Data"
    clickthrough_url: "#/fair-open-data"
---

{/% include item/list/block/colored/main.html items=page.items %}
```

