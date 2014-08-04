<!-- alexpearce.js -->

// from https://github.com/alexpearce/alexpearce.github.com/blob/master/assets/js/alexpearce.js

// Capitalises a string
// Accepts:
//   str: string
// Returns:
//   string
var majusculeFirst = function(str) {
  var temp = str.charAt(0).toUpperCase();
  for (var i = 1; i < str.length; i++) {
    temp += str.charAt(i).toLowerCase();
  }
  return temp;
}

// Retrieves the value of a GET parameter with a given key
// Accepts:
//   param: string
// Returns:
//   string or null
var getParam = function(param) {
  var queryString = window.location.search.substring(1),
      queries = queryString.split("&");
  for (var i in queries) {
    var pair = queries[i].split("=");
    if (pair[0] == param) {
      return pair[1];
    }
  }
  return null;
};

// Filters posts with the condition `post['property'] == value`
// Accepts:
//   posts - array of post objects and a string
//   property - string of post object property to compare
//   value - filter value of property
// Returns:
//  array of post objects
var filterPostsByPropertyValue = function(posts, property, value) {
  var filteredPosts = [];
  // The last element is a null terminator
  posts.pop();
  for (var i in posts) {
    var post = posts[i],
        prop = post[property];
    
    // Last element of tags is null
    post.tags.pop();
    
    // The property could be a string, such as a post's category,
    // or an array, such as a post's tags
    if (prop.constructor == String) {
      if (prop.toLowerCase() == value.toLowerCase()) {
        filteredPosts.push(post);
      }
    } else if (prop.constructor == Array) {
      for (var j in prop) {
        if (prop[j].toLowerCase() == value.toLowerCase()) {
          filteredPosts.push(post);
        }
      }
    }
  }
  
  return filteredPosts;
};

// Formats search results and appends them to the DOM
// Accepts:
//   property: string of object type we're displaying
//   value: string of name of object we're displaying
//   posts: array of post objects
// Returns: nothing
var layoutResultsPage = function(property, value, posts) {
  // Make sure we're on the search results page
  var $container = $('#results');
  if ($container.length == 0) return;
  
  // Update the header
  var str = majusculeFirst(property) + " Listing for ‘" + majusculeFirst(value) + '’';
  $container.find('h1').text(str);
  
  // Loop through each post to format it
  for (var i in posts) {
    // Create an unordered list of the post's tags
    var tagsList = '<ul class="tags cf">',
        post     = posts[i],
        tags     = post.tags;
        
    for (var j in tags) {
      tagsList += '<li><a href="/search/?tags=' + tags[j] + '">' + tags[j].toLowerCase() + '</a></li>';
    }
    tagsList += '</ul>';
    
    $container.find('ul.results').append(
      '<li>'
        // Page anchor
        + '<a href="' + post.href + '">'
        + posts[i].title
        + '</a>'
        // Post date
        + ' <span class="date">- '
        + posts[i].date.day + ' ' + posts[i].date.month + ' ' + posts[i].date.year
        + '</span>'
        // Tags
        + tagsList
        + '</li>'
    );
  }
}

// Formats the search results page for no results
// Accepts:
//   property: string of object type we're displaying
//   value: string of name of object we're displaying
// Returns: nothing
var noResultsPage = function(property, value) {
  // Make sure we're on the search results page
  var $container = $('#results');
  if ($container.length == 0) return;
  
  $container.find('h1').text('No Results Found.').after('<p class="nadda"></p>');
  
  var txt = "We couldn't find anything associated with '" + value + "' here.";
  $container.find('p.nadda').text(txt);
};

// Replaces ERB-style tags with Liquid ones as we can't escape them in posts
// Accepts:
//   elements: jQuery elements in which to replace tags
// Returns: nothing
var replaceERBTags = function(elements) {  
  elements.each(function() {
    // Only for text blocks at the moment as we'll strip highlighting otherwise
    var $this = $(this),
        txt   = $this.html();
    
    // Replace <%=  %>with {{ }}
    txt = txt.replace(new RegExp("&lt;%=(.+?)%&gt;", "g"), "{{$1}}");
    // Replace <% %> with {% %}
    txt = txt.replace(new RegExp("&lt;%(.+?)%&gt;", "g"), "{%$1%}");
    
    $this.html(txt);
  });
};

$(function() {
  var map = {
    'category' : getParam('category'),
    'tags'     : getParam('tags'),
    'search'   : getParam('search')
  };

  $.each(map, function(type, value) {
    if (value !== null) {
      $.getJSON('/search.json', function(data) {
        posts = filterPostsByPropertyValue(data, type, value);
        if (posts.length === 0) {
          noResultsPage(type, value);
        } else {
          layoutResultsPage(type, value, posts);
        }
      });
    }
  });
  
  // Replace ERB-style Liquid tags in highlighted code blocks...
  replaceERBTags($('div.highlight').find('code.text'));
  // ... and in inline code
  replaceERBTags($('p code'));
});



<!-- instantclick.min.js -->

/* InstantClick 3.0 | (C) 2014 Alexandre Dieulot | http://instantclick.io/license.html */
var InstantClick=function(e,g){function v(a){var c=a.indexOf("#");return 0>c?a:a.substr(0,c)}function y(a){for(;"A"!=a.nodeName;)a=a.parentNode;return a}function t(a,c){for(var b=0;b<D[a].length;b++)D[a][b](c)}function G(a,c,b,l){e.title=a;e.documentElement.replaceChild(c,e.body);if(b){history.pushState(null,null,b);a=b.indexOf("#");a=-1<a&&e.getElementById(b.substr(a+1));c=0;if(a)for(;a.offsetParent;)c+=a.offsetTop,a=a.offsetParent;scrollTo(0,c);m=v(b)}else scrollTo(0,l);H();z.done();t("change",
!1)}function I(a){w(y(a.target).href)}function J(a){a=y(a.target);a.addEventListener("mouseout",Q);E?(K=a.href,r=setTimeout(w,E)):w(a.href)}function R(a){a=y(a.target);A?a.removeEventListener("mousedown",I):a.removeEventListener("mouseover",J);w(a.href)}function S(a){1<a.which||a.metaKey||a.ctrlKey||(a.preventDefault(),L(y(a.target).href))}function Q(){r?(clearTimeout(r),r=!1):u&&!h&&(p.abort(),h=u=!1)}function T(){if(!(4>p.readyState)&&0!=p.status){q.ready=+new Date-q.start;t("receive");if(p.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var a=
e.implementation.createHTMLDocument("");a.documentElement.innerHTML=p.responseText;F=a.title;x=a.body;var c=v(s);f[c]={body:x,title:F,scrollY:c in f?f[c].scrollY:0};for(var a=a.head.children,c=0,b,l=a.length-1;0<=l;l--)if(b=a[l],b.hasAttribute("data-instant-track")){b=b.getAttribute("href")||b.getAttribute("src")||b.innerHTML;for(var n=B.length-1;0<=n;n--)B[n]==b&&c++}c!=B.length&&(C=!0)}else C=!0;h&&(h=!1,L(s))}}function H(a){for(var c=e.getElementsByTagName("a"),b,l=g.protocol+"//"+g.host,n=c.length-
1;0<=n;n--){b=c[n];var d;if(!((d=b.target)||(d=b.hasAttribute("download"))||(d=0!=b.href.indexOf(l+"/"))||(d=-1<b.href.indexOf("#")&&v(b.href)==m)))if(M){a:{d=b;do{if(!d.hasAttribute)break;if(d.hasAttribute("data-no-instant"))break;if(d.hasAttribute("data-instant")){d=!0;break a}}while(d=d.parentNode);d=!1}d=!d}else a:{d=b;do{if(!d.hasAttribute)break;if(d.hasAttribute("data-instant"))break;if(d.hasAttribute("data-no-instant")){d=!0;break a}}while(d=d.parentNode);d=!1}d||(b.addEventListener("touchstart",
R),A?b.addEventListener("mousedown",I):b.addEventListener("mouseover",J),b.addEventListener("click",S))}if(!a)for(a=e.body.getElementsByTagName("script"),n=0,j=a.length;n<j;n++)c=a[n],c.hasAttribute("data-no-instant")||(b=e.createElement("script"),c.src&&(b.src=c.src),c.innerHTML&&(b.innerHTML=c.innerHTML),l=c.parentNode,d=c.nextSibling,l.removeChild(c),l.insertBefore(b,d))}function w(a){if(A||!("display"in q&&100>+new Date-(q.start+q.display)))if(r&&(clearTimeout(r),r=!1),a||(a=K),!u||a!=s&&!h)u=
!0,h=!1,s=a,C=x=!1,q={start:+new Date},t("fetch"),p.open("GET",a),p.send()}function L(a){"display"in q||(q.display=+new Date-q.start);r?s&&s!=a?g.href=a:(w(a),z.start(0,!0),t("wait"),h=!0):!u||h?g.href=a:C?g.href=s:x?(f[m].scrollY=pageYOffset,h=u=!1,G(F,x,s)):(z.start(0,!0),t("wait"),h=!0)}var N=navigator.userAgent,O="createTouch"in e,m,K,r,f={},p,s=!1,F=!1,C=!1,x=!1,q={},u=!1,h=!1,B=[],M,A,E,D={fetch:[],receive:[],wait:[],change:[]},z=function(){function a(a,d){f=a;e.getElementById(k.id)&&e.body.removeChild(k);
k.style.opacity="1";e.getElementById(k.id)&&e.body.removeChild(k);l();d&&setTimeout(c,0);clearTimeout(m);m=setTimeout(b,500)}function c(){f=10;l()}function b(){f+=1+2*Math.random();98<=f?f=98:m=setTimeout(b,500);l()}function l(){g.style[h]="translate("+f+"%)";e.getElementById(k.id)||e.body.appendChild(k)}function n(){e.getElementById(k.id)?(clearTimeout(m),f=100,l(),k.style.opacity="0"):(a(100==f?0:f),setTimeout(n,0))}function d(){k.style.left=pageXOffset+"px";k.style.width=innerWidth+"px";k.style.top=
pageYOffset+"px";var a=innerWidth/screen[90==Math.abs(orientation)?"height":"width"]*2;k.style[h]="scaleY("+a+")"}var k,g,h,f,m;return{init:function(){k=e.createElement("div");k.id="instantclick";g=e.createElement("div");g.id="instantclick-bar";g.className="instantclick-bar";k.appendChild(g);var a=["Webkit","Moz","O"];h="transform";if(!(h in g.style))for(var b=0;3>b;b++)a[b]+"Transform"in g.style&&(h=a[b]+"Transform");var c="transition";if(!(c in g.style))for(b=0;3>b;b++)a[b]+"Transition"in g.style&&
(c="-"+a[b].toLowerCase()+"-"+c);a=e.createElement("style");a.innerHTML="#instantclick{position:"+(O?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+c+":opacity .25s .1s}.instantclick-bar{background:#29d;width:100%;margin-left:-100%;height:2px;"+c+":all .25s}";e.head.appendChild(a);O&&(d(),addEventListener("resize",d),addEventListener("scroll",d))},start:a,done:n}}(),P="pushState"in history&&(!N.match("Android")||N.match("Chrome/"))&&"file:"!=g.protocol;return{supported:P,
init:function(){if(!m)if(P){for(var a=arguments.length-1;0<=a;a--){var c=arguments[a];!0===c?M=!0:"mousedown"==c?A=!0:"number"==typeof c&&(E=c)}m=v(g.href);f[m]={body:e.body,title:e.title,scrollY:pageYOffset};for(var c=e.head.children,b,a=c.length-1;0<=a;a--)b=c[a],b.hasAttribute("data-instant-track")&&(b=b.getAttribute("href")||b.getAttribute("src")||b.innerHTML,B.push(b));p=new XMLHttpRequest;p.addEventListener("readystatechange",T);H(!0);z.init();t("change",!0);addEventListener("popstate",function(){var a=
v(g.href);a!=m&&(a in f?(f[m].scrollY=pageYOffset,m=a,G(f[a].title,f[a].body,!1,f[a].scrollY)):g.href=g.href)})}else t("change",!0)},on:function(a,c){D[a].push(c)}}}(document,location);