function* wp_posts()
{
 const r=arr()
 const posts=yield* wp_load("https://transhumanistes.com/wp-json/wp/v2/posts")
 
 for(const v of posts)
 {
  //log(v)
  
 }
 
 return r
}
