function* init(...x)
{ 
 const categories=yield* wp_categories()
 const pages=yield* wp_pages()
 const posts=yield* wp_posts()
 
 log(pages)
 log(categories)
 log(posts)
 
 log("ok")
}
