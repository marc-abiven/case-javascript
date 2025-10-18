gn wp_site
 let created time_get
 let created trunc created
 let medias run wp_medias
 let pages run wp_pages medias
 let posts run wp_posts medias
 let categories run wp_categories posts
 let authors wp_authors posts

 fn compare_title x:uint y:uint
  let left wp_find categories x
  let right wp_find categories y

  ret cmp left.title right.title
 end

 let count wp_count

 for posts
  sort v.categories compare_title
  assign v.index i
 end

 wp_index pages
 wp_index categories
 wp_index posts
 wp_index medias
 wp_index authors

 ret obj created count pages categories posts medias authors
end
