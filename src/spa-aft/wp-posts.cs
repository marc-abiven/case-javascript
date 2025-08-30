gn wp_posts
 let r arr

 forof run wp_load "https://transhumanistes.com/wp-json/wp/v2/posts"
  let id v.id
  let date date_decode v.date
  let url v.link
  let title v.title.rendered
  let content v.content.rendered
  let excerpt v.excerpt.rendered
  let categories v.categories
  let o obj id date url title content excerpt categories

  push r o
 end

 ret r
end