fn dom_posts posts:arr
 let posts dup posts

 tbl_index posts
 tbl_remove_column posts "url"
 tbl_remove_column posts "content"
 tbl_remove_column posts "excerpt"
 tbl_remove_column posts "image"
 tbl_remove_column posts "author"
 tbl_remove_column posts "view"
 tbl_remove_column posts "index"
 tbl_remove_column posts "categories"

 tbl_rename_column posts "date" "Date"
 tbl_rename_column posts "title" "Titre"

 let r dom_tbl posts
 let trs dom_children r

 shift trs

 for trs
  let td_index dom_column v "#"
  let td_id dom_column v "id"
  let td_date dom_column v "Date"
  let td_title dom_column v "Titre"
  let n sub posts.length i
  let date dom_data_get td_date
  let date date_str date
  let url dom_data_get td_id
  let url concat "?p=" url
  let title dom_data_get td_title
  let a dom_a

  dom_text td_index n
  dom_right td_index
  dom_color td_index "gray"

  dom_text a title
  dom_href a url

  dom_text td_date date
  dom_clear td_title
  dom_push td_title a
 end

 dom_remove_column r "id"

 ret r
end
