---
title: Posts
date: 2017-12-13 16:14:00 -05:00
---

Legal matters sometimes move slowly. If we haven't posted lately you can contact us for updates.

We need to put our email here.

{% for post in site.posts %}
 + [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}