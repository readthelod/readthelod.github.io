## Footer

### Options

| Option | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| `social_media` | Social media object | Object | `null` |
| `social_media.name` | Social media item name, this will be the icon that is used in teh banner | String | `null` |
| `social_media.url` | Social media item url | String | `null` |

### Example with options

To add a social media item to the footer, add the following to the ./_config.yml file:

```yaml
social_media:
  - name: "twitter"
    url: "https://twitter.com/VLIZBe"
  - name: "facebook"
    url: "https://www.facebook.com/VLIZ.be"
  - name: "linkedin"
    url: "https://www.linkedin.com/company/vliz"
  - name: "youtube"
    url: "https://www.youtube.com/user/VLIZOcean"
  - name: "instagram"
    url: "https://www.instagram.com/vliz.be/"
```