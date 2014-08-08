---
layout: post
title: "윈도우즈에 Jekyll과 Git를 설치하고 블로그를 Github에 호스팅하는 방법"
description: "윈도우즈에 Jekyll과 Git를 설치하고 Github Pages 기능을 이용해서 Github에 블로그를 호스팅하는 방법을 설명해본다."
category: blog
tags: [ blog, jekyll, git ]
---

<div id="toc"><p class="toc_title">목차</p></div>

## Jekyll 블로그

[Jekyll][jekyll]은 Static Site Generator 즉, 정적 사이트 생성기다. 사이트를 만들 대 HTML을 이용해서 각각의 페이지들을 만들고 통합하는 것은 쉬운 일이 아니다. 하지만 Jekyll을 이용하면 이런 과정을 쉽게 처리할 수 있다.

[Liquid][Liquid]라는 템플릿 언어를 사용해서 템플릿을 작성하고, 사이트에 들어갈 내용만 작성한 후 템플릿을 지정해주면, Jekyll이 자동으로 템플릿과 내용을 합쳐서 원하는 모양의 HTML 문서를 만들어낸다. 이렇게 처음부터 끝까지 HTML을 코딩해서 만드는 것보다 훨씬 쉽게 사이트를 만들 수 있게 된다.

또한 Jekyll은 블로그 형식을 지원한다. 고유주소, 카테고리, 페이지, 포스트, 사용자 레이아웃 등 블로그에 필요한 기능들이 갖추어져 있기 때문에 블로그에 어울리는 템플릿만 있으면, Jekyll로 블로그를 운영하는 것도 가능하다. 그뿐만 아니라, [다른 블로그로부터 마이그레이션할 수 있는 툴](http://import.jekyllrb.com/docs/home/)도 있어서, 다른 블로그에서 Jekyll로 쉽게 이전이 가능하다.

요즘 많은 사람들이 워드프레스등의 전통적인 블로그에서 Jekyll로 블로그를 이전하고 있다. 왜 블로그에서 **'정적 사이트 생성기'**인 Jekyll로 이동하는 것일까? **Jekyll**에는 다음과 같은 **장점**이 있기 때문이다.

- [Github][Github]에서 제공하는 [Github Pages][Github Pages]기능을 이용하면 **무료**로 블로그를 만들 수 있다.
- [Github][Github] **서버의 안정성**이 뛰어나다. 그래서 블로그가 접속이 되지 않는다거나 하는 일이 거의 없다.
- [git][git]를 기본으로 하기 때문에 **버전관리**가 확실히 된다. 즉, 변경사항을 쉽게 확인할 수 있고, 변경이력을 확인 후 이전 버전으로 복원이 가능해진다.
- PHP, DB를 전혀 사용하지 않고, 로그인 과정 같은 것이 없으므로 **보안에 뛰어나다**.
- **업데이트에 신경쓸 필요가 없다**. 워드프레스를 쓰는 경우, 업데이트를 잘 하지 않으면 해킹 당하거나 블로그가 망가질 가능성이 매우 높아진다.
- **빠르다**. 브라우저는 원래 HTML만 인식한다. 그래서 워드프레스등의 CMS는 사용자가 요청하면 DB에서 가져온 데이터를 PHP를 이용해서 HTML 문서로 만들어서 사용자에게 전송한다. 서버에서 처리하는 과정이 필요하므로 당연히 그만큼 느려진다. 물론 서버에 부담도 된다. 반면에 Jekyll은 미리 HTML을 만들어서 요청하면 바로 전송하는 형식으로 되어 있어서 빠를 수 밖에 없다.[^1]    
아쉬운 점은 서버가 한국에 없기 때문에 엄청나게 빠른 속도를 보여주는 것은 아니라는 점이다. 외국 사용자들이 워드프레스에서 Github 블로그로 이전하고 속도 향상에 만족한다는 말이 많은데, 좀 아쉬운 점이다. 그래도 Disqus 댓글 부분을 제외하면 1초 초반대로 로딩이 완료되기 때문에 속도가 너무 느리다는 느낌을 받지는 않을 것이다.   
만약에 [Github Pages][Github Pages]가 너무 느리다고 생각한다면 한국 웹호스팅에 HTML로 만들어진 파일들을 올리는 형식으로 블로그를 운영하면 된다. 다만 그렇다고 해도 Disqus 댓글 때문에 전체적인 로딩 속도가 그리 빠르지 않다고 느낄 수는 있다. 그것이 싫다면 한국에 서버가 있는 라이브리 댓글을 사용해보는 것도 고려해 볼 수 있을 것이다.

물론 **단점**이 없는 것은 아니다.

- [git][git]와 [Github][Github]에 대한 기초 지식이 필요하다.[^2]
- [Github][Github]에 글을 올리기 전에 로컬 PC에서 글을 확인하려면 PC에 [Jekyll][jekyll]을 설치해야 한다. 그런데 윈도우즈에서는 Jekyll의 설치가 좀 까다로운 편이다.
- 글을 수정하고 난 뒤에 커맨드라인 명령어를 이용해서 글을 올려야 한다. 하지만 배치파일을 이용하거나, 윈도우즈용 git 프로그램을 이용하면 꼭 커맨드라인 명령어를 쓸 필요가 없어진다.
- 테마 변경이 워드프레스에 비해서 까다롭다. 워드프레스처럼 테마를 파는 사람이 따로 있는 것도 아니고, 테마를 모아놓는 곳도 특별히 없다. 그래서 테마를 찾고 설치하는 게 그리 쉽지 않은 편이다.     
다만 테마를 직접 수정해야 할 때는 오히려 Jekyll 블로그가 더 낫다. 워드프레스는 복잡한 기능 때문에 테마를 직접 수정하는 것이 매우 어렵다.

난 블로그에 글을 쓰는데 markdown을 사용하는 것이 좋고, 가능하면 내 블로그를 내가 완전히 콘트롤 할 수 았으면 좋겠다. 어떤 이유로든지 블로그의 글이 








<!-- 링크 -->
[jekyll]: http://jekyllrb.com/
[Liquid]: http://docs.shopify.com/themes/liquid-documentation/basics
[Github]: https://github.com/
[Github Pages]: https://pages.github.com/
[git]: http://ko.wikipedia.org/wiki/%EA%B9%83_%28%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%29



<!-- 각주 -->
[^1]: 워드프레스에서도 [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/)나 [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)와 같은 캐시 플러그인을 이용하면 미리 HTML 파일을 만들어서 전송하는 게 가능하긴 하다. 하지만 글의 수가 많으질수록 HTML를 미리 만드는 작업이 서버에 부담이 될 수 있다.
[^2]: [git - 간편 안내서](http://rogerdudler.github.io/git-guide/index.ko.html)와 [완전 초보를 위한 깃허브 @ Nolboo's Blog](http://nolboo.github.io/blog/2013/10/06/github-for-beginner/)에서 Github를 블로그를 사용하기 위한 기초 지식을 배울 수 있다.


