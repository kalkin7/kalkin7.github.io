/* alexpearce.js */
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
  // var str = majusculeFirst(property) + " Listing for ‘" + majusculeFirst(value) + '’';
  var str = " 태그 글목록 : " + majusculeFirst(value);
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
  
  $container.find('h1').text('아무것도 찾을 수 없습니다.').after('<p class="nadda"></p>');
  
  // var txt = "We couldn't find anything associated with '" + value + "' here.";
  var txt = "죄송합니다. 입력한 검색어 '" + value + "' 에 해당하는 항목이 없습니다. 다른 키워드로 바꿔서 시도해보세요.";
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



/* External Link to New Window */
this.blankwin=function(){var c=window.location.hostname;c=c.replace("www.","").toLowerCase();var b=document.getElementsByTagName("a");this.check=function(e){var a=e.href.toLowerCase();return(a.indexOf("http://")!=-1&&a.indexOf(c)==-1)?true:false};this.set=function(a){a.target="_blank";a.className="external"};for(var d=0;d<b.length;d++){if(check(b[d])){set(b[d])}}};this.addEvent=function(c,b,a){if(c.attachEvent){c["e"+b+a]=a;c[b+a]=function(){c["e"+b+a](window.event)};c.attachEvent("on"+b,c[b+a])}else{c.addEventListener(b,a,false)}};addEvent(window,"load",blankwin);


/* TOC Generator JS */
(function(d){d.fn.toc=function(j){var l=d.extend({},d.fn.toc.defaults,j);var n=this.append("<ul></ul>").children("ul");var m={h1:0,h2:0,h3:0,h4:0,h5:0,h6:0};var h=0;var g={h1:0,h2:0,h3:0,h4:0,h5:0,h6:0};for(var k=1;k<=6;k++){g["h"+k]=(l.exclude.match(new RegExp("h"+k,"i"))===null&&d("h"+k).length>0)?++h:0}return this.each(function(){d(l.context+" :header").not(l.exclude).each(function(){var p=d(this);for(var o=6;o>=1;o--){if(p.is("h"+o)){if(l.numerate){b(m["h"+o],n);c(m,"h"+o);if(l.autoId&&!p.attr("id")){p.attr("id",a(p.text()))}p.text(f(m,"h"+o,p.text()))}e(n,g["h"+o],p.attr("id"),p.text())}}})})};function b(h,g){if(h===0&&g.find(":last").length!==0&&!g.find(":last").is("ul")){g.find("li:last").append("<ul></ul>")}}function c(g,h){d.each(g,function(j,k){if(j===h){++g[j]}else{if(j>h){g[j]=0}}})}function a(g){return g.replace(/[ <>#\/\\?&\n]/g,"_")}function f(i,j,h){var g="";d.each(i,function(k,l){if(k<=j&&i[k]>0){g+=i[k]+"."}});return g+" "+h}function e(m,g,l,k){var j=m;for(var h=1;h<g;h++){if(j.find("> li:last > ul").length===0){j.append("<li><ul></ul></li>")}j=j.find("> li:last > ul:first")}if(l===""){j.append("<li>"+k+"</li>")}else{j.append('<li><a href="#'+l+'">'+k+"</a></li>")}}d.fn.toc.defaults={exclude:"h1, h5, h6",context:"",autoId:false,numerate:true}})(jQuery);