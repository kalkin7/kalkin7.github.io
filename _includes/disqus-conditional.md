<section class="comments">
<div class=disqusbox>
<div class=disqusbutton> 
<p><strong>댓글을 보거나 작성하시려면 아래 버튼을 눌러주세요.</strong></p>
<button class="show-comments" data-disqus-url="http://www.kalkinblog.tk{{ site.production_url }}{{ page.url }}"><span class="icon-comments"></span>&nbsp;&nbsp;댓글 보기</button>
</div>
<div id="disqus_thread"></div>

<script type="text/javascript">
if(typeof window.orientation !== 'undefined')
{
$(document).ready(function () {
    var disqusPublicKey = "fOXhMULciQhdioBjLVw4VZgvKJOLRcVUYcwwPAmG2iXr7ynUByPHxKFWlux6tfjv";
    var disqusShortname = "kalkingithub";
    var threadUrl = 'link:' + $('.show-comments').attr('data-disqus-url');

    $.ajax({
        type: 'GET',
        url: 'https://disqus.com/api/3.0/threads/set.jsonp',
        data: { api_key: disqusPublicKey, forum: disqusShortname, thread: threadUrl },
        cache: false,
        dataType: 'jsonp',
        success: function(result) {
            if (result.response.length === 1) {
                btnText = '댓글 보기 (' + result.response[0].posts + '개)';
                $('.show-comments').html(btnText);
            }
        }
    });

    $('.show-comments').on('click', function() {
        $.ajaxSetup({cache:true});
        $.getScript('http://' + disqusShortname + '.disqus.com/embed.js');
        $.ajaxSetup({cache:false});
        $(this).remove();
    });

    if(/\#comment/.test(location.hash)){
        $('.show-comments').trigger('click');
    }
});
}
else
{
var disqus_shortname = 'kalkingithub'; // required: replace example with your forum shortname

/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
	var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
		dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		})();
	</script>
<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
}
</script>

<style scoped=scoped>
@media print{
 .disqusbox{display:none}
}
</style>
</div>
</section>