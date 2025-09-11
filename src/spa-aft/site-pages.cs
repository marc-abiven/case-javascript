fn site_pages site:obj
 assign document.title "Pages"

 //breadcrumb

 let breadcrumb breadcrumb_init
 let spacer dom_spacer

 breadcrumb_push breadcrumb "Accueil" "."
 breadcrumb_push breadcrumb "Pages"

 let breadcrumb breadcrumb_render breadcrumb

 dom_push body breadcrumb
 dom_push body spacer

 //pages

 let tbl dup site.pages

 tbl_index tbl
 tbl_remove_column tbl "parent"
 tbl_remove_column tbl "url"
 tbl_remove_column tbl "content"
 tbl_remove_column tbl "excerpt"
 tbl_remove_column tbl "image"
 tbl_remove_column tbl "children"
 tbl_remove_column tbl "index"

 tbl_rename_column tbl "date" "Date"
 tbl_rename_column tbl "title" "Titre"

 let table dom_tbl tbl
 let trs dom_children table

 shift trs

 for trs
  let td_index dom_column v "#"
  let td_id dom_column v "id"
  let td_date dom_column v "Date"
  let td_title dom_column v "Titre"
  let n sub site.pages.length i
  let date dom_data_get td_date
  let date date_str date
  let url dom_data_get td_id
  let url concat "?pg=" url
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

 dom_remove_column table "id"

 dom_push body table
end
