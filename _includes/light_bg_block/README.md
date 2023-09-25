### light_bg_block

This snippet creates a block with a light background.

### Options

| Option | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| `content` | Content of the block | String | `null` |

### Example with options

in the md file in the front matter add:

```yml
---
layout: default

---

{/% include light_bg.html content=
"<h2>FAIR values</h2>
<p>
    The FAIR Guiding Principles for scientific data management and stewardship are intended to help improve the
    Findability, Accessibility, Interoperability, and Reuse of digital assets. The FAIR Principles emphasize
    machine-actionability (i.e., the capacity of computational systems to find, access, interoperate, and reuse data
    with none or minimal human intervention) because humans increasingly rely on computational support to deal with
    data as a result of the increase in volume, complexity, and creation speed of data.
</p>
"
%}
```