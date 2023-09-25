### item/list/row/image_text_link

This component is a row with an image, text and a link. It is used in the default layout.

#### Options

| Option | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| `items` | List of items | Object | `null` |
| `items.title` | Item title | String | `null` |
| `items.clickthrough_url` | Item url | String | `null` |
| `items.image` | Item image | String | `null` |
| `items.description` | Item description | String | `null` |
| `items.tags` | array of tags | Array | `null` |
| `items.icon_url` | array of objects | Array | `null` |


#### Example with options

in the md file in the front matter add:

```yml
---
items:
  - title: "DMBON Assistant"
    description: "DMBON is a tool to assist in the creation of a Data Management Plan (DMP). 
      It is a web application that guides the user through the process of creating a DMP. 
      It is based on the DCC DMPonline tool, but has been adapted to the needs of the Belgian marine research community. 
      The tool is available in English."
    clickthrough_url: "/applications-tools/dmbon-assistant"
    image: "/assets/media/img/app/dmbon-assistant-logo.svg"
    tags:
      - open data
      - data management
    icon_url: 
      github: "https://github.com/vliz-be-opsci/dmbon-assistant"

  - title: "Open-AIS.org"
    description: "VLIZ Open-Science has a historic affiliation and vetted interest into the development of open-ais.org: a set of tools and solutions for exploring captured vessel traffic data in a research context."
    clickthrough_url: "/applications-tools/open-ais"
    image: "/assets/media/img/app/open-ais-logo.svg"
    tags:
      - open data
      - vessels
    icon_url:
      github: https://gitlab.com/openais/
      book: https://open-ais.org
---

{/% include item/list/row/image_text_link/main.html items=page.items %}
```