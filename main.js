function forummafiavotecounter() {
    forummafiavotecounter_pagetoposts();
}

function forummafiavotecounter_pagetoposts() {
    jQuery('.postbody .content blockquote').remove(); // Remove all block quotes - these will result in non-real votes
    posts = [];
    votes = [];
    jQuery('.postbody').each(function (a, b) {
        posts.push([forummafiavotecounter_getauthor(b), forummafiavotecounter_getpostbody(b)]);
    });
    for (var i = 0; i < posts.length; i++) {
        var vote=forummafiavotecounter_getvote(posts[i][1]);
	if(vote!==null)
	{
	    votes.push(vote);
	}
    }
}

function forummafiavotecounter_getauthor(post) {
    return jQuery(post).find('.author strong a').html();
}

function forummafiavotecounter_getpostbody(post) {
    return jQuery(post).find('.content').html();
}

function forummafiavotecounter_getvote(content) {
    var matches = content.match(/<span style="font-weight: bold">\/vote (.+?)<\/span>/i);
    if (matches === null) {
        return null;
    }
    return matches[1];
}
forummafiavotecounter();