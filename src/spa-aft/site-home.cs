fn site_home site
 check is_obj site
 
 assign document.title "AFT: Plus humain, demain"
 
 //posts
 
 let table dom_table
 
 forof site.posts
  let date date_str v.date
  let length 105
  var title v.title
  
  if gt title.length length
   let length sub length 3
   
   assign title slice_l title length
   assign title trim_r title
   assign title concat title "..."
  end
  
  let tr dom_tr
  let td1 dom_td
  let td2 dom_td
  let a dom_a
    
  dom_text a title
  dom_href a v.url
  dom_text td1 date
  
  dom_padding_right td1 "1vw"
  
  dom_push td2 a
  dom_push tr td1
  dom_push tr td2
  dom_push table tr
 end

 dom_push body table
end
