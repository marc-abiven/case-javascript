gn init x:etc
 let site run download
 
 dump site

 //css

 let head dom_by_tag "head"
 let head front head
 let link dom_link

 dom_href link "res/style.css"
 dom_attr link "rel" "stylesheet"
 dom_push head link
 
 //header
 
 let table dom_table
 let tr dom_tr
 let td1 dom_td
 let td2 dom_td
 let a1 dom_a
 let a2 dom_a
 let img dom_img
 let spacer dom_spacer

 dom_href a1 "/"
 dom_src img "res/aft.png"
 dom_height img "1.4vw"
   
 dom_href a2 "/"
 dom_text a2 "Association Française Transhumaniste"
 
 dom_push a1 img
 dom_push td1 a1
 dom_push td2 a2
 dom_push tr td1
 dom_push tr td2
 dom_push table tr
 dom_push body table
 dom_push body spacer
 
 //home
 
 site_home site
end
