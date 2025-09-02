gn wp_categories
 let a arr

 forof run wp_load "https://transhumanistes.com/wp-json/wp/v2/categories"
  let id v.id
  let parent v.parent
  let url v.link
  let title v.name
  let content v.description
  let o obj id parent url title content

  push a o
 end

 ret wp_fold a
end