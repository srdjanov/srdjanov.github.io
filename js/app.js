function toggleSkill(targetId, element) {
    $('.tags > li > span').removeClass('active')
    $(element).addClass('active');
    $('.skill-list > li').each(function(index) {
        if ($(this).attr('id') == targetId) {
            $(this).show(50);
        }
        else {
            $(this).hide(50);
        }
    });
}