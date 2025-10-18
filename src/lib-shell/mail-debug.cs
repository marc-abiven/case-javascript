fn mail_debug subject:str data:obj
 let data to_tbl data

 //body

 let html h_html
 let head h_head
 let body h_body

 h_font_family body font_family
 h_font_size body font_size

 let table h_tbl data

 h_push body table
 h_push html head
 h_push html body

 let html h_render html

 //log html

 //mail

 mail author subject html
end