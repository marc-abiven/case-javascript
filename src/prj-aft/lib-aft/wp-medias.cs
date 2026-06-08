gn wp_medias
 let r arr

 for run wp_load "https://transhumanistes.com/wp-json/wp/v2/media"
  let id v.id
  let date date_decode v.date
  let url v.source_url
  let type v.media_type
  let o obj id date url type

  push r o
 end

 ret r
end
