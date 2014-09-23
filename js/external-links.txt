/* External Link to New Window */
$(document).ready(function() {
        $('#post a').filter(function() {
         return this.hostname && this.hostname !== location.hostname;
        }).addClass('externalLink') .attr('target', '_blank');
      });