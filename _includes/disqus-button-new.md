<section class="comments">
<div class=disqusbox>
<div>
<p><strong>댓글을 보거나 작성하시려면 아래 버튼을 눌러주세요.</strong></p>
<button class="show-comments" data-disqus-url="http://www.kalkinblog.tk{{ site.production_url }}{{ page.url }}"><span class="icon-comments"></span>&nbsp;&nbsp;댓글 보기</button>
</div>
<div id="disqus_thread"></div>
<script>
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
</script>
<style scoped=scoped>
@media print{
 .disqusbox{display:none}
}
</style>
</div>
</section>