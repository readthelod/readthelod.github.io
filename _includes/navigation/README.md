### Navigation

This is the navigation for the site. It is a list of links to other pages on the site. It is used in the default layout.

### Options

| Option | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| `navigation` | Navigation object | Object | `null` |
| `navigation.title` | Navigation title | String | `null` |
| `navigation.url` | Navigation links | Object | `null` |
| `navigation.items` | Navigation items | Object | `null` |

#### items options

| Option | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| `items.title` | Navigation item title | String | `null` |
| `items.url` | Navigation item url | String | `null` |
| `items.items` | Navigation item items | Object | `null` |

### Example with options

in _data/navigation.yml add:

```yml
  - do something here
```

in the md file in the front matter add:

```yml
---
layout: default

---

{/% include navigation/main.html %}
```