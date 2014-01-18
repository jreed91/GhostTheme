$(function() {
    var text = $('.post-content').text();
    var charactersCount = text.length;
    var wordsCount = text.split(/\s+/).length;
    var readingtime = Math.round( wordsCount / 200) ;
    console.log(wordsCount);
    console.log(charactersCount);
    $('#readingTime').html(readingtime + ' min read');

    $(window).scroll(function(event) {

    	if($(".stats").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
    // something when the .target div visible
    setTimeout(function(){
		    words.innerHTML = wordsCount;
		    characters.innerHTML = charactersCount;
		}, 1000);
			} else {
			    words.innerHTML = "0";
		    characters.innerHTML = "0";
			}
 
    })
});
