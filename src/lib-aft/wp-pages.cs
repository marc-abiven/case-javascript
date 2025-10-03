gn wp_pages medias:arr
 let a arr
 let a arr

 for run wp_load "https://transhumanistes.com/wp-json/wp/v2/pages"
  if contain v.class_list "post-password-required"
   cont

  let id v.id
  let parent v.parent
  let date date_decode v.date
  let url v.link
  let title wp_normalize v.title.rendered
  let title trim title
  let content wp_normalize v.content.rendered
  let excerpt wp_normalize v.excerpt.rendered

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

  let o obj id parent date url title content excerpt image

  push a o
 end

 ret wp_fold a
end
