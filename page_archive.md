---
layout: archive
title: 전체글목록 @ Kalkin's Blog
description: Kalkin's Blog 전체글목록
permalink: /archive/
---

<article id="archive">
<p><h1>전체글목록</h1><br /></p>
<!-- <p><div id="toc"><p class="toc_title">년도</p></div></p> -->
<p>
<ul>
  {% for post in site.posts %}

    {% unless post.next %}
      <h2 class="archive_year">{{ post.date | date: '%Y년' }}</h2>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h2 class="archive_year">{{ post.date | date: '%Y년' }}</h2>
      {% endif %}
    {% endunless %}

    <li class="archive_post_list" data-index="{{ post.title | downcase }}"><small><time>{{ post.date | date:"%m월 %d일" }}</time></small>&nbsp;&nbsp;&nbsp;<a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
</p>
</article>