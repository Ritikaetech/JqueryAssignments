
$(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        beforeLoad: function() 
        {
            this.title = $(this.element).attr('caption');
        }
});