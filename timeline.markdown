---
title: Timeline
date: 2017-12-13 14:50:00 -05:00
---

{% assign events = page.events | sort:"date" %}
{% for event in events %}
{{ event.date | date:"%D" }}
{{ event.text }}
{% comment %} Empty line! {% endcomment %}
{% endfor %}