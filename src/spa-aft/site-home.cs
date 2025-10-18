fn site_home site:obj
 assign document.title concat "AFT: " slogan

 let posts arr

 for site.posts
  var category ""

  if is_full v.categories
   assign category back v.categories
   assign category wp_find site.categories category
   assign category category.title
  end

  let post obj_push v "category" category

  push posts post
 end

 let table dom_posts posts

 dom_rename_column table "category" "Categorie"

 let trs dom_children table

 shift trs

 for trs
  let td_title dom_column v "Titre"
  let td_category dom_column v "Categorie"
  let a dom_by_tag td_title "a"
  let a front a
  let title dom_data_get td_title
  let length is_firefox
  let length iif length 62 60

  let data_title dom_data_get td_title
  let title cut_r data_title length
  let cutted different title data_title

  if cutted
   dom_title a data_title

  let category dom_data_get td_category
  let category wp_by_name site.categories category

  dom_text a title
  dom_clear td_category

  if not is_null category
   let url concat "?c=" category.id
   let a dom_a

   dom_text a category.title
   dom_href a url

   dom_push td_category a
  end
 end

 dom_push body table
end
