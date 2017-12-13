---
title: Posts
date: 2017-12-13 16:14:00 -05:00
---

I'm going to have to rebuild the layouts structure I can tell.

{% for post in site.posts %}
 + [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}