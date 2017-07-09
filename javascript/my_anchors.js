function openDivUnderAnchor(name){
    name = name.replace('#','');
    $('div.expandable').hide();
    $('a[name='+name+']').next('div').toggle();
}

$(document).ready(function(){
    // opens the correct div if its link is clicked
    $(document).on('click', 'a.open', function(){
        openDivUnderAnchor($(this).attr('href'));
    });
    // opens the correct div if its anchor is specified in the URL
    //openDivUnderAnchor(location.hash);
	name=location.hash;
	name=name.split('-')[1];
	//	alert(name);
	name = '#expandable-'.concat(name);
	//alert(name);
	//name = name.replace('#','');
	//alert(name);
	$(name).toggle(50);
});