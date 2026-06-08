gn wp_posts medias:arr
 let r arr

 for run wp_load "https://transhumanistes.com/wp-json/wp/v2/posts"
  let id v.id
  let date date_decode v.date
  let url v.link
  let title wp_normalize v.title.rendered
  let title trim title
  let content wp_normalize v.content.rendered
  let excerpt wp_normalize v.excerpt.rendered
  let categories v.categories
  let author v.yoast_head_json.author
  let view v.views

  var media null

  try
   assign media wp_find medias v.featured_media
  catch
  end

  var image null

  if not is_null media
   if same media.type "image"
    assign image media.url
  end

  let o obj id date url title content excerpt image categories author view

  push r o
 end

 ret r
end
