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
         + posts[i].date.year + '년 ' + posts[i].date.month + '월 ' + posts[i].date.day + '일 '
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
$(document).ready(function() {
        $('#post a').filter(function() {
         return this.hostname && this.hostname !== location.hostname;
        }).addClass('externalLink') .attr('target', '_blank');
      });


/* TOC Generator JS */
(function(f){f.fn.toc=function(d){var c=f.extend({},f.fn.toc.defaults,d);var e=this.append('<p class="toc_title">목차</p><ul></ul>').children('ul');var g={h1:0,h2:0,h3:0,h4:0,h5:0,h6:0};var j=0;var i={h1:0,h2:0,h3:0,h4:0,h5:0,h6:0};for(var h=1;h<=6;h++){i['h'+h]=(c.exclude.match(new RegExp('h'+h,'i'))===null&&f('h'+h).length>0)?++j:0}return this.each(function(){f(c.context+' :header').not(c.exclude).each(function(){var a=f(this);for(var b=6;b>=1;b--){if(a.is('h'+b)){if(c.numerate){k(g['h'+b],e);l(g,'h'+b);if(c.autoId&&!a.attr('id')){a.attr('id',m(a.text()))}a.text(n(g,'h'+b,a.text()))}o(e,i['h'+b],a.attr('id'),a.text())}}})})};function k(a,b){if(a===0&&b.find(':last').length!==0&&!b.find(':last').is('ul')){b.find('li:last').append('<ul></ul>')}};function l(d,c){f.each(d,function(a,b){if(a===c){++d[a]}else if(a>c){d[a]=0}})};function m(a){return a.replace(/[ <>#\/\\?&\n]/g,'_')};function n(d,c,e){var g='';f.each(d,function(a,b){if(a<=c&&d[a]>0){g+=d[a]+'.'}});return g+' '+e};function o(a,b,d,c){var e=a;for(var g=1;g<b;g++){if(e.find('> li:last > ul').length===0){e.append('<li><ul></ul></li>')}e=e.find('> li:last > ul:first')}if(d===''){e.append('<li>'+c+'</li>')}else{e.append('<li><a href="#'+d+'">'+c+'</a></li>')}};f.fn.toc.defaults={exclude:'h1, h5, h6',context:'',autoId:false,numerate:true}})(jQuery);