---
title: Gallery
date: 2017-12-25 19:41:00 -05:00
permalink: "/gallery/index.html"
layout: busy
---

{% for file in site.gallery.uploads | reverse %}
  {% assign extension = file.extname | downcase %}
  {% case extension %}
  {% when ".jpg" or ".jpeg" or ".png" or ".gif" or ".svg" %}
   [{{ file.name }}]({{ file.path | remove_first:"_" | relative_url }})
   ![{{ file.name }}]({{ file.path | remove_first:"_" | relative_url }})
  {% else %}
   [{{ file.name }}]({{ file.path | remove_first:"_" | relative_url }})
  {% endcase %}
  {% comment %} This should turn into an empty line, which markdown needs here. {% endcomment %}
{% endfor %}
