---
layout: post
title: "윈도우즈에 Jekyll과 Git를 설치하고 블로그를 Github에 호스팅하는 방법"
description: "윈도우즈에 Jekyll과 Git를 설치하고 Github Pages 기능을 이용해서 Github에 블로그를 호스팅하는 방법을 설명해본다."
category: blog
tags: [ blog ]
---

<div id="toc"><p class="toc_title">목차</p></div>

## Jekyll 블로그 만들기

[Jekyll](http://jekyllrb.com/)은 Static Site Generator 즉, 정적 사이트 생성기다. 사이트를 만들 대 HTML을 이용해서 각각의 페이지들을 만들고 통합하는 것은 쉬운 일이 아니다. 하지만 Jekyll을 이용하면 이런 과정을 쉽게 처리할 수 있다.

[Liquid](http://docs.shopify.com/themes/liquid-documentation/basics)라는 템플릿 언어를 사용해서 템플릿을 작성하고, 사이트에 들어갈 내용만 작성한 후 템플릿을 지정해주면, Jekyll이 자동으로 템플릿과 내용을 합쳐서 원하는 모양의 HTML 문서를 만들어낸다. 이렇게 처음부터 끝까지 HTML을 코딩해서 만드는 것보다 훨씬 쉽게 사이트를 만들 수 있게 된다.

또한 Jekyll은 블로그 형식을 지원한다. 고유주소, 카테고리, 페이지, 포스트, 사용자 레이아웃 등 블로그에 필요한 기능들이 갖추어져 있기 때문에 블로그에 어울리는 템플릿만 있으면, Jekyll로 블로그를 운영하는 것도 가능하다. 그뿐만 아니라, [다른 블로그로부터 마이그레이션할 수 있는 툴](http://import.jekyllrb.com/docs/home/)도 있어서, 다른 블로그에서 Jekyll로 쉽게 이전이 가능하다.

요즘 많은 사람들이 워드프레스등의 전통적인 블로그에서 Jekyll로 블로그를 이전하고 있다. 왜 블로그에서 **'정적 사이트 생성기'**인 Jekyll로 이동하는 것일까? **Jekyll**에는 다음과 같은 **장점**이 있기 때문이다.

- [Github](https://github.com/)에서 제공하는 [Github Pages](https://pages.github.com/)기능을 이용하면 **무료**로 블로그를 만들 수 있다.
- [git](http://ko.wikipedia.org/wiki/%EA%B9%83_%28%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%29)를 기본으로 하기 때문에 **버전관리**가 확실히 된다. 즉, 변경사항을 쉽게 확인할 수 있고, 변경이력을 확인 후 이전 버전으로 복원이 가능해진다.
- PHP, DB를 전혀 사용하지 않고, 로그인 과정 같은 것이 없으므로 **보안에 뛰어나다**.
- **업데이트에 신경쓸 필요가 없다**. 워드프레스를 쓰는 경우, 업데이트를 잘 하지 않으면 해킹 당하거나 블로그가 망가질 가능성이 매우 높아진다.
- **빠르다**. 브라우저는 원래 HTML만 인식한다. 그래서 워드프레스등의 CMS는 사용자가 요청하면 DB에서 데이터를 가져와서 PHP를 이용해 HTML 문서를 만들어서 사용자에게 전송한다. 서버에서 처리하는 과정이 필요하므로 당연히 그만큼 느려진다. 물론 서버에 부담도 된다. 반면에 Jekyll은 미리 HTML을 만들어서 요청하면 바로 전송하는 형식으로 되어 있어서 빠를 수 밖에 없다.







