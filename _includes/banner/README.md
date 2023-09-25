## Banner

### Usage

```html
{/% include banner/banner.html %}
```

### Options

| Option | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| `banner` | Banner object | Object | `null` |
| `banner.title` | Banner title | String | `null` |
| `banner.description` | Banner description | String | `null` |
| `banner.media` | Banner image or viedo | String | `/assets/media/video/Homepage_website_SimonStevin.mp4` |
| `banner.clickthrough_url` | Banner clickthrough url | String | `null` |
| `banner.clickthrough_text` | Banner clickthrough text | String | `null` |
| `banner.quotes` | Banner quotes | Object | `null` | 
| `banner.quotes.title` | Banner quotes title | String | `null` |
| `banner.quotes.clickthrough_url` | Banner quotes clickthrough url | String | `null` |
| `banner.quotes.clickthrough_text` | Banner quotes clickthrough text | String | `null` |
| `banner.topics` | Banner topics | Object | `null` |
| `banner.topics.title` | Banner topics title | String | `null` |
| `banner.topics.clickthrough_url` | Banner topics clickthrough url | String | `null` |
| `banner.topics.clickthrough_text` | Banner topics clickthrough text | String | `null` |
| `banner.topics.image` | Banner topics image | String | `null` |
| `banner.topics.colw` | Banner topics column width | String | `4` |


### Example with options
```yml
---
banner:
  title: "VLIZ-be jekyll theme"
  clickthrough_text: "Learn more about the theme"
  clickthrough_url: "#documentation"
---
{/% include banner/main.html banner=page.banner %}
```