---
layout: index.hbs
---

{{#each collections.recipes}}
 ## [{{this.title}}]({{this.path}})
 {{debug this}}
 ![](this.cover)
{{/each}}
