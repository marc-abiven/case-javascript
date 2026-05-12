fn site_categories site:obj
 assign document.title "Catégories"

 //breadcrumb

 let breadcrumb breadcrumb_init
 let spacer dom_spacer

 breadcrumb_push breadcrumb "Accueil" "."
 breadcrumb_push breadcrumb "Catégories"

 let breadcrumb breadcrumb_render breadcrumb

 dom_push body breadcrumb
 dom_push body spacer

 //categories

 let tbl dup site.categories

 tbl_index tbl
 tbl_remove_column tbl "parent"
 tbl_remove_column tbl "url"
 tbl_remove_column tbl "content"
 tbl_remove_column tbl "children"
 tbl_remove_column tbl "index"

 tbl_rename_column tbl "title" "Nom"
 tbl_rename_column tbl "count" "Articles"

 let table dom_tbl tbl
 let trs dom_children table

 shift trs

 for trs
  let td_index dom_column v "#"
  let td_id dom_column v "id"
  let td_name dom_column v "Nom"
  let td_count dom_column v "Articles"
  let a dom_a

  dom_right td_index
  dom_right td_count

  dom_color td_index "gray"

  let url dom_data_get td_id
  let url concat "?c=" url

  let name dom_data_get td_name

  dom_text a name
  dom_href a url
  dom_clear td_name
  dom_push td_name a
 end

 dom_remove_column table "id"

 dom_push body table
end
