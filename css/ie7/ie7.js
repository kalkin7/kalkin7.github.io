/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'kalkin7-github\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-film': '&#xf008;',
		'icon-home': '&#xf015;',
		'icon-tags': '&#xf02c;',
		'icon-book': '&#xf02d;',
		'icon-photo': '&#xf03e;',
		'icon-pencil': '&#xf040;',
		'icon-warning': '&#xf071;',
		'icon-calendar': '&#xf073;',
		'icon-folder-open': '&#xf07c;',
		'icon-comments': '&#xf086;',
		'icon-external-link': '&#xf08e;',
		'icon-twitter': '&#xf099;',
		'icon-facebook': '&#xf09a;',
		'icon-github': '&#xf09b;',
		'icon-rss': '&#xf09e;',
		'icon-hand-o-right': '&#xf0a4;',
		'icon-chain': '&#xf0c1;',
		'icon-paperclip': '&#xf0c6;',
		'icon-google-plus-square': '&#xf0d4;',
		'icon-lightbulb-o': '&#xf0eb;',
		'icon-cloud-download': '&#xf0ed;',
		'icon-cloud-upload': '&#xf0ee;',
		'icon-quote-left': '&#xf10d;',
		'icon-quote-right': '&#xf10e;',
		'icon-github-alt': '&#xf113;',
		'icon-rss-square': '&#xf143;',
		'icon-check-square': '&#xf14a;',
		'icon-tumblr-square': '&#xf174;',
		'icon-envelope-square': '&#xf199;',
		'icon-send': '&#xf1d8;',
		'icon-feed': '&#xe602;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
