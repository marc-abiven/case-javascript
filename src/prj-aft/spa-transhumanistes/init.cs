gn init x:etc
 assign global.slogan "Plus humain, demain"

 let site run site_download

 dump site

 //css

 let head dom_by_tag "head"
 let head front head
 let link dom_link

 dom_href link "res/style.css"
 dom_attr link "rel" "stylesheet"
 dom_push head link

 run dom_load link

 let unit dom_var "unit"
 let color dom_var "color"

 assign global.css obj unit color

 dom_margin body 0
 dom_padding body css.unit

 //header

 let table dom_table
 let tr dom_tr
 let td1 dom_td
 let td2 dom_td
 let td3 dom_td
 let a dom_a
 let img dom_img
 let div1 dom_div
 let div2 dom_div
 let div3 dom_div
 let spacer dom_spacer
 let height dom_mul css.unit 3

 dom_padding_right td1 css.unit
 dom_padding_right td2 css.unit

 dom_href a "."
 dom_title a slogan

 dom_src img "res/aft.png"
 dom_height img height

 dom_push a img
 dom_push td1 a

 dom_text div1 "Association"
 dom_text div2 "Française"
 dom_text div3 "Transhumaniste"

 let a_pages dom_a
 let a_categories dom_a
 let a_authors dom_a
 let separator1 dom_span

 dom_text separator1 " | "
 dom_color separator1 "gray"

 let separator2 dom_clone separator1

 dom_text a_pages "Pages"
 dom_href a_pages "?v=pg"

 dom_text a_categories "Categories"
 dom_href a_categories "?v=cat"

 dom_text a_authors "Auteurs"
 dom_href a_authors "?v=auth"

 dom_width td3 "100%"
 dom_center td3
 dom_valign td3 "bottom"

 dom_push td3 a_pages
 dom_push td3 separator1
 dom_push td3 a_categories
 dom_push td3 separator2
 dom_push td3 a_authors

 dom_push td2 div1
 dom_push td2 div2
 dom_push td2 div3
 dom_push tr td1
 dom_push tr td2
 dom_push tr td3
 dom_push table tr

 dom_push body table
 dom_push body spacer

 //page

 let args to_str location
 let args url_parse args
 let args args.args

 if has args "p"
  let id get args "p"

  site_post site id
 elseif has args "pg"
  let id get args "pg"

  site_page site id
 elseif has args "c"
  let id get args "c"

  site_category site id
 elseif has args "a"
  let id get args "a"

  site_author site id
 elseif has args "v"
  let view get args "v"

  if same view "pg"
   site_pages site
  elseif same view "cat"
   site_categories site
  elseif same view "auth"
   site_authors site
  else
   stop
 else
  site_home site

 run wp_download
 run wait
end
