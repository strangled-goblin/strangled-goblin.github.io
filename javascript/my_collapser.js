$('.expand').click(function(){
    target_num = $(this).attr('id').split('-')[1];
    content_id = '#expandable-'.concat(target_num);
    $(content_id).toggle(50);
});