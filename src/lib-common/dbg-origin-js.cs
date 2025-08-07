fn dbg_origin_js x y
 if is_undef x
  let e new Error "origin"
  
  ret dbg_origin_js e
 end
 
 check is_obj x

 if is_undef y
  ret dbg_origin_js x 15
 
 let stack dbg_callstack x
 let frame front stack 
 let source dbg_source
 let lines split source
 let a arr

 let n div y 2
 let n trunc n
 var n sub frame.line n
  
 if lt n 0
  assign n 0
 elseif gte n lines.length
  assign n sub lines.length y  
   
 fornum y
  let n add n i
  var p " "
  
  if same n frame.line
   assign p ">"
  
  var index dec n
  
  if is_browser
   assign index sub index 2
  
  let code at lines index
  let o obj n p code
  
  push a o
 end
 
 let a2 arr
 
 forof a
  push a2 v.code
 end
 
 let s join a2
 
 let s str_unindent s
 let a3 split s
 
 forin a3
  let i to_i k
  let code at a3 i
  let o at a i
  
  assign o.code code
 end
 
 ret a
end
