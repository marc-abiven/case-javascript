fn dbg_origin_cs x
 if is_undef x
  let e new Error "origin"
  
  ret dbg_origin_cs e
 end
 
 check is_obj x
 
 fn get_line x
  check is_arr x
  
  forof x
   if same v.p ">"
    ret v.n
  end
  
  stop
 end
 
 let r arr
 let range 15
 let sample mul range 3
 let a arr 
 
 forof dbg_origin_js x sample
  let code app_decompile v.code   
  
  if is_empty code
   cont
  
  let o dup v
  
  assign o.code code
  
  push a o
 end
 
 let line get_line a 
 let before arr
 let half div range 2
 let half trunc half
 let n add half 2
 
 while is_full a
  let o shift a
  
  push before o

  if gte before.length n
   shift before
   
  if same o.n line
   brk
 end

 let after arr

 while is_full a
  if same after.length half
   brk

  let o shift a
  
  push after o
 end

 append r before
 append r after
 
 ret r
end
