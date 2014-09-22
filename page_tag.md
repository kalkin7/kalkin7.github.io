---
layout: default
title: 태그별 글목록 @ Kalkin's Blog
description: Kalkin's Blog 태그별 글목록
permalink: /tag/
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
<!-- site_tags: {{ site_tags }} -->
{% assign tag_words = site_tags | split:',' | sort %}
<!-- tag_words: {{ tag_words }} -->

<article id="tags">
  <p><h1>태그별 글목록</h1><br /></p>
  <p>
  <ul class="tag-box inline">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}

	{% for data_tag in site.data.tags %}
	    {% if data_tag.slug == this_word %}
	        {% assign tag = data_tag %}
	    {% endif %}
	{% endfor %}

    <li><a href="#{{ this_word | cgi_escape }}">{{ tag.name }} <span>{{ site.tags[this_word].size }}</span></a></li>
  {% endunless %}{% endfor %}
  </ul>

  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}

	{% for data_tag in site.data.tags %}
	    {% if data_tag.slug == this_word %}
	        {% assign tag = data_tag %}
	    {% endif %}
	{% endfor %}

  <h2 id="{{ this_word | cgi_escape }}" class="tag_title">{{ tag.name }}</h2>
  <ul class="posts">
    {% for post in site.tags[this_word] %}{% if post.title != null %}
    <li itemscope><small><span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%Y년 %m월 %d일" }}</time></span></small>&nbsp;&nbsp;&nbsp;<a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}{% endfor %}
  </ul>
  {% endunless %}{% endfor %}
  </p>
</article>