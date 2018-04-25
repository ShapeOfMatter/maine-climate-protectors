---
title: Timeline
date: 2017-12-13 14:50:00 -05:00
events:
- date: 2018-01-24 00:00:00 -05:00
  text: "2:30 in the State of Maine Room at Portland City Hall \nIn a spirited, art-filled
    celebration of this potentially ground-breaking petition, Maine youth spoke their
    minds on the importance of acting decisively and wholeheartedly to address earth’s
    rapidly deteriorating climate. In addition, a member of the Maine bar addressed
    the essence of the Maine law invoked by the petition and provide a bird’s eye
    view of similar efforts in other states, as well as in federal and international
    forums.  \nThe petitions were delivered to the DEP's Southern Maine Regional Office
    by a convoy of electric cars."
- date: 2018-03-25 00:00:00 -04:00
  text: The deadline for the DEP to begin the rule-making process as described in
    the petition.
- date: 2018-04-25 00:00:00 -04:00
  text: 'The hearing is formally announced. '
- date: 2018-05-15 00:00:00 -04:00
  text: "There will be a public hearing on the proposed rules to to reduce greenhouse
    gas emissions, to be held May 15th at 1pm at \n    The DEP Response Training Room,\n
    \   4 Blossom Lane (AMHI Complex)\n    Augusta."
- date: 2018-06-29 00:00:00 -04:00
  text: The public comment period will end.
---

{% comment %}
If you need to add or edit items, do so in the meta-data list below, not this textbox.
The "date"s will be displayed without the time-of-day part, so don't bother setting it; include time-of-day information in the event's text.
Contact Mako if this way of organizing stuff isn't working out. The below is highly white-space sensitive!
{% endcomment %}
Here's basically what has been and will be going on:
{% assign events = page.events | sort:"date" %}
{% for event in events %}
{{ event.date | date:"%D" }}  
{{ event.text }}

{% endfor %}
