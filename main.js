//Data tools

//Deal with empty value
const parseNA=string =>(string==='NA'?undefined:string);
//string->date object
const parseDate=string=>d3.timeParse('%Y-%m-%d')(string);
//format transform & colomn selection
function type(d){
    const date=parseDate(d.release_date);
    return{
        budget:+d.budget,
        genre:parseNA(d.genre),
        genres:JSON.parse(d.genres).map(d=>d.name),
        homepage:parseNA(d.homepage),
        id:+d.id,
        imdb_id:parseNA(d.imdb_id),
        original_language:parseNA(d.original_language),
        overview:parseNA(d.overveiw),
        popularity:+d.popularity,
        poster_path:parseNA(d.poster_path),
        production_countries:JSON.parse(d.production_countries),
        release_date:date,
        release_year:date.getFullYear(),
        revenue:+d.revenue,
        runtime:+d.runtime,
        tagline:parseNA(d.tagline),
        title:parseNA(d.title),
        vote_average:+d.vote_average,
        vote_count:d.vote_count
    }
}
 










//Load Data
d3.csv('data/movies.csv').then(
    res=>{
        console.log(res);
    }
)