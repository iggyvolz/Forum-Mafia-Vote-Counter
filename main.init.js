function forummafiavotecounter(){forummafiavotecounter_pagetoposts()}function forummafiavotecounter_pagetoposts(){jQuery(".postbody .content blockquote").remove();posts=[];votes=[];jQuery(".postbody").each(function(d,c){posts.push([forummafiavotecounter_getauthor(c),forummafiavotecounter_getpostbody(c)])});for(var b=0;b<posts.length;b++){var a=forummafiavotecounter_getvote(posts[b][1]);if(a!==null){votes.push(a)}}}function forummafiavotecounter_getauthor(a){return jQuery(a).find(".author strong a").html()}function forummafiavotecounter_getpostbody(a){return jQuery(a).find(".content").html()}function forummafiavotecounter_getvote(a){var b=a.match(/<span style="font-weight: bold">\/vote (.+?)<\/span>/i);if(b===null){return null}return b[1]}forummafiavotecounter();