fn tbl_dom x
 check is_arr x
 
 let r dom_table 
 let tr dom_tr 
 
 forof tbl_columns x
  let th dom_td
  
  dom_text th v
  dom_border th
  dom_push tr th
 end
 
 dom_push r tr
  
 forof x
  let tr dom_tr 
  let row v
  
  forin row
   let v get row k
   let td dom_td
   
   dom_text td v
   dom_border td
   dom_push r td
  end

  dom_push r tr
 end
 
 ret r
end
