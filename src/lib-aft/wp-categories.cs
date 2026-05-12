gn wp_categories posts:arr
 fn compare_count x:obj y:obj
  ret cmp x.count y.count
 end

 let r arr

 for run wp_load "https://transhumanistes.com/wp-json/wp/v2/categories"
  let id v.id
  let parent v.parent
  let url v.link
  let title wp_normalize v.name
  let title trim title
  let title strip_l title "__"
  let content wp_normalize v.description

  var count 0

  for posts
   if contain v.categories id
    assign count inc count
  end

  if same count 0
   cont

  let o obj id parent url title content count

  push r o
 end

 sort r compare_count
 reverse r

 ret r
end
