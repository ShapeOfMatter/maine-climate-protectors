---
title: Gallery
date: 2017-12-25 12:57:00 -05:00
layout: busy
---

{% assign uploads_collection = site.collections | where: 'label', 'uploads' | first %}
{% for file in uploads_collection.files reversed %}
  {% assign extension = file.extname | downcase %}
  [{{ file.name }}]({{ file.path | remove_first:"_" | relative_url }})
  {% case extension %}
  {% when ".jpg" or ".jpeg" or ".png" or ".gif" or ".svg" %}
    ![{{ file.name }}]({{ file.path | remove_first:"_" | relative_url }})
  {% else %}
  {% endcase %}
  {% comment %} This should turn into an empty line, which markdown needs here. {% endcomment %}
{% endfor %}