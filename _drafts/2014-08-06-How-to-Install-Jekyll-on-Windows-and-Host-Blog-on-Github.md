---
layout: post
title: "윈도우즈에 Jekyll과 Git를 설치하고 블로그를 Github에 호스팅하는 방법"
description: "윈도우즈에 Jekyll과 Git를 설치하고 Github Pages 기능을 이용해서 Github에 블로그를 호스팅하는 방법을 설명해본다."
category: blog
tags: [ blog, jekyll, git ]
---

<div id="toc"></div>

## Jekyll 블로그

나는 [마크다운][마크다운]을 이용해서 블로그에 올릴 글을 쓴다. 이미지를 위주로 하는 글을 쓰는 것이 아니라면 마크다운을 이용해서 글을 쓰는 것이 정말 편리하다. 글을 쓸 때 어떻게 글을 꾸밀지 고민하기보다는 글에 집중을 할 수 있어서 좋고, 블로그의 모든 글들의 모양이 통일성을 갖출 수 있어서 좋고, 마크다운으로 작성한 글이란 것이 단순한 텍스트 파일이기 때문에 보관과 백업, 버전관리가 편한 것도 좋다.

난 현재 워드프레스 블로그를 메인 블로그로 운영하고 있는데, 워드프레스도 자체적으로 마크다운을 지원하기 시작해서 마크다운으로 글을 쓰기 좋아졌다.

하지만 사람이란 게 점점 더 편한 방법을 찾기 마련이다. 내가 현재 워드프레스 블로그에 글을 올리는 과정은 다음과 같다.

1. 웹브라우저를 실행하고, 워드프레스 블로그에 접속한다.
2. 로그인한다.
3. 관리자 화면에서 글쓰기를 선택한다.
4. 위지윅 에디터에 글을 작성하고 저장한다.
5. 끝!!!

하지만 [Jekyll][jekyll]을 이용해서 [Github][Github]에 블로그를 만들면, 다음과 같은 과정을 통해 블로그에 글을 올릴 수 있다.

1. 애용하는 에디터로 글을 쓰고 저장한다.
2. 배치 파일을 실행한다.
3. 끝!

**훨씬 간편하게 글을 올릴 수 있다.** 물론 엄청난 사용자를 가진 워드프레스보다 사용이 불편할 수는 있다. 프로그래머들이 사용하는 [Github][Github]을 사용하고, 커맨드라인 명령어를 사용한다는 것만으로도 보통 사람들에게는 기피의 대상이 될수도 있다.

하지만 블로그에 글을 더 편하게 올릴 수 있고, 더불어 일반적인 웹호스팅보다 훨씬 더 안정적이며, 또한 완전히 무료이기까지 한 [Jekyll][jekyll]+[Github][Github] 블로그는 상당히 매력적이기도 하다.

그래서 이 글에서는 윈도우즈에서 [Jekyll][jekyll]과 [git][git]를 설치하고, 블로그를 만들고 글을 작성해서 올리는 방법에 대해서 설명해 보고자 한다.

사실 나 역시 아직 [Jekyll][jekyll]과 [git][git]에 대해 잘 모른다. 프로그래머도 아니다보니 모두 생소한 것 뿐이다. 하지만 블로그를 운영하는 데 필요한 정도의 지식을 쌓는 것은 그리 힘들지 않다. 이 글을 천천히 따라하다보면 [Jekyll][jekyll]+[Github][Github]를 운영하는 것은 쉽게 할 수 있게 될 것이다.

※ [Github][Github]이나 [git][git], [Jekyll][jekyll]에 대한 좀 더 상세한 지식을 얻고 싶으면 [Nolboo's Blog](http://nolboo.github.io/)를 방문해서 관련글을 읽어보면 좋을 것이다.


## Github에 블로그 생성하기

### git 설치
**1) git for windows 다운로드**

[http://git-scm.com/](http://git-scm.com/)에 접속한 후 **'Downloads for Windows'** 버튼을 눌러서 파일을 다운 받는다.

![git for windows setup 1](http://lh4.googleusercontent.com/-pvnnmHf-lXE/U-iuAsrljRI/AAAAAAABrY8/EcTv5fUJGng/s0/git-download%252528700%252529.jpg)     
▲ git-scm.com 사이트. 우하단에서 **'Downloads for Windows'** 버튼을 눌러서 파일을 다운 받는다.


**2) git for windows 설치**

![git for windows setup 1](http://lh6.googleusercontent.com/-xDALUdhWacQ/U-itJepk-pI/AAAAAAABrY0/ZbEanwvc9P8/s0/git-setup1.png)     
▲ git for windows 설치 화면. 다운받은 파일을 실행하면 뜨는 창이다.

![git for windows setup - component 선택](http://lh5.googleusercontent.com/-y4E77WAueF0/U-ivAn4m2aI/AAAAAAABrZE/QhetyDEIHUg/s0/git-setup2.png)     
▲ git for windows component 선택 화면. 여기서 **"Advanced context menu"**를 선택하면 아래와 같이 마우스 컨텍스트 메뉴에 git 관련 메뉴들이 추가되서 편하다.

![git for windows mouse context menu](http://lh5.googleusercontent.com/-UKl91j0eqm8/U-ivedLfKWI/AAAAAAABrZM/nyI6HlYv8nA/s0/git-setup3.png)     
▲ git for windows 마우스 컨텍스트 메뉴

![git for windows line ending conversion](http://lh3.googleusercontent.com/-VGsdi0pkVKY/U-iwF4ZL6BI/AAAAAAABrZU/I2OWhQ3j3g0/s0/git-setup4.png)     
▲ git for windows 행변환 문자 설정. 윈도우는 CRLF를 행변환 때 사용하는 반면, 유닉스에서는 LF만을 사용하기 때문에, 윈도우즈 환경에서 git를 쓸 때는 첫번째를 선택해줘야 한다.


**3) git 기본 환경 설정**

다음 명령어를 입력하여 이름과 이메일 주소를 저장한다.

	git config --global user.name "xxxxxx"
	git config --global user.email "xxxxxx@gmail.com"

다음 명령어를 입력하여 제대로 설정되었는지 확인한다.

	git config --global --list
	user.name=xxxxxx
	user.email=xxxxxx@gmail.com

실수로 잘못 입력한 것이 있다면 다음 명령으로 삭제할 수 있다.

	git config --global --unset 전역변수 이름



### Github 가입




### Github 블로그 생성

**1) 원하는 테마 찾기**
[Jekyll Themes](http://jekyllthemes.org/)에 상당수의 jekyll 테마들이 모여 있다. 여기서 마음에 드는 테마를 골라서 다운받아 놓는다. 다운로드는 테마 설명 부분에 있는 **'Download'** 버튼을 눌러서 쉽게 받을 수 있다. 또한 대부분의 테마들이 github에 호스팅되어 있기 때문에 `git clone` 명령어를 통해서 다운받아도 된다.



## PC에 Jekyll 설치하기

[Jekyll][jekyll]을 Winodws PC에서 실행하려면 [Ruby][Ruby]라는 프로그래밍 언어를 설치해야 한다. 또한 구문 강조를 위해서 Pygments를 설치하려면 [Python]이라는 프로그래밍 언어까지 설치해야 한다. 아무래도 꽤 복잡하고 귀찮은 일이다. 따라서 만약에 [Github Pages][Github Pages]기능을 이용해서 [Github][Github]에 블로그를 호스팅할 예정이고, Jekyll 테마를 많이 수정하지 않고 사용하려고 한다면 PC에 Jekyll를 설치하지 않고 블로그를 운영하는 것도 나쁘지 않다.

하지만 [Github][Github]에 블로그를 호스팅하지 않고 Jekyll로 HTML 파일을 생성한 뒤 웹호스팅등에 올려서 블로그를 운영하려고 한다면 PC에 Jekyll을 설치해야 한다. 물론 테마를 많이 고치고자 할 때도 PC에 Jekyll을 설치하는 것이 훨씬 편하다. 또한 Jekyll의 draft 기능을 사용해서 글을 올리기 전에 블로그에서 어떤 모습으로 보여질지를 확인하려면 PC에 Jekyll이 꼭 설치되어 있어야 한다.


### Ruby와 Ruby DevKit 설치

**1) Ruby 설치**

**[Ruby for Windows 다운로드](http://rubyinstaller.org/downloads/)**

위의 링크로 Ruby for Windows 다운로드 페이지에 접속한 후에, Ruby 2.0.0 버전을 자신의 윈도우즈에 맞게 다운로드한다. 자신의 윈도우즈가 64bit 버전이라면 **`Ruby 2.0.0-pxxx(x64)`**를, 그렇지 않다면 **`Ruby 2.0.0-pxxx`**를 다운받아 설치하면 된다.

설치시에는 **'Add Ruby executables to your PATH'**에 꼭 체크하고 설치해야 한다. 그래야, 나중에 어떤 폴더에서도 Ruby 명령어를 사용할 수 있다.


**2) Ruby DevKit 설치**

**[Ruby DevKit 다운로드](http://rubyinstaller.org/downloads/)**

위의 링크로 접속한 후, 자신의 윈도우즈가 64bit 버전이라면 **`DevKit-mingw64-64-xxxx.exe`**를 그렇지 않다면 **`DevKit-mingw64-32-xxxxx.exe`**를 다운받아서 설치한다.






지금 소개하려는 방법은 특별히 PC에서 테마를 수정한다거나 하는 일 없이, 

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
다만 테마를 직접 수정해야 할 때는 오히려 Jekyll 블로그가 더 낫다. 워드프레스는 복잡한 기능 때문에 테마의 구조가 많이 복잡해서 테마 관련 파일들을 직접 수정하는 것이 매우 어렵다.

사실 마크다운을 사용하지 않는다면 그냥 티스토리 블로그를 사용하는 것이 더 나을 것이다. 한국에 서버가 있어서 더 빠르고, HTML과 CSS 모두 편집이 가능하므로 능력만 있다면 자신이 원하는 디자인의 블로그를 직접 만드는 것도 가능하다.

하지만 나처럼 마크다운으로 글을 쓰는 사람들에게는 Jykyll과 Github을 이용한 블로그가 훨씬 편하다. 다음은 내가 블로그에 글을 올리는 과정이다.

1. 애용하는 에디터로 글을 쓰고 저장한다.
2. 배치 파일을 실행한다.
3. 끝!

반면에 티스토리 블로그에 글을 쓰는 과정은 다음과 같을 것이다.

1. 웹브라우저를 실행하고, 티스토리 블로그에 접속한다.
2. 로그인한다.
3. 관리자 화면에서 글쓰기를 선택한다.
4. 위지윅 에디터에 글을 작성하고 저장한다.
5. 끝!

사실 티스토리 블로그에 글을 쓰는 과정도 그리 불편한 것은 아니지만, 아무래도 Jekyll 블로그에 글을 올리는 과정이 더 간단하다. 더 편하게 글을 올리려면 배치 파일에 단축키를 지정할 수도 있다. 그렇게 하면 글을 다 쓴 다음에 단축키를 누르면 글이 올라가게 하는 것이 가능해진다.








<!-- 링크 -->
[마크다운]: http://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4
[jekyll]: http://jekyllrb.com/
[Ruby]: http://ko.wikipedia.org/wiki/%EB%A3%A8%EB%B9%84_%28%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4%29
[Python]: http://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%B4%EC%8D%AC
[Github]: http://github.com/
[Github Pages]: http://pages.github.com/
[git]: http://ko.wikipedia.org/wiki/%EA%B9%83_%28%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%29




<!-- 각주 -->
[^1]: 워드프레스에서도 [WP Super Cache](http://wordpress.org/plugins/wp-super-cache/)나 [W3 Total Cache](http://wordpress.org/plugins/w3-total-cache/)와 같은 캐시 플러그인을 이용하면 미리 HTML 파일을 만들어서 전송하는 게 가능하긴 하다. 하지만 글의 수가 많으질수록 HTML를 미리 만드는 작업이 서버에 부담이 될 수 있다.




[^2]: [git - 간편 안내서](http://rogerdudler.github.io/git-guide/index.ko.html)와 [완전 초보를 위한 깃허브 @ Nolboo's Blog](http://nolboo.github.io/blog/2013/10/06/github-for-beginner/)에서 Github를 블로그를 사용하기 위한 기초 지식을 배울 수 있다.