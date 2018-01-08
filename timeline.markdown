---
title: Timeline
date: 2017-12-13 14:50:00 -05:00
events:
- date: 2018-01-24 00:00:00 -05:00
  text: |-
    2:30 to 3:30 p.m in the State of Maine Room at Portland City Hall
    In a spirited, art-filled celebration of this potentially ground-breaking petition, Maine youth, will speak their minds on the importance of acting decisively and wholeheartedly to address earth’s rapidly deteriorating climate. In addition, a member of the Maine bar will briefly address the essence of the Maine law invoked by the petition and provide a bird’s eye view of similar efforts in other states, as well as in federal and international forums. Then the petitions will be delivered to a representative of the DEP.
---

{% comment %}
If you need to add or edit items, do so in the meta-data list below, not this textbox.
The "date"s will be displayed without the time-of-day part, so don't bother setting it; include time-of-day information in the event's text.
Contact Mako if this way of organizing stuff isn't working out.
{% endcomment %}
Here's basically what has been and will be going on:
{% assign events = page.events | sort:"date" %}
{% for event in events %}
{{ event.date | date:"%D" }}
{{ event.text }}
{% comment %} Empty line! {% endcomment %}
{% endfor %}
