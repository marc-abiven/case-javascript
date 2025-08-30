fn cpl_scan cpl str
 check is_obj cpl
 check is_str str
 
 fn is_complex x
  if not is_str x
   ret false

  if contain x "//"
   ret true

  if contain x "\""
   ret true

  ret false
 end
 
 let s trim str

 if is_complex s
  if has cpl.cache s
   let r get cpl.cache s
   let r dup r

   ret r
  end

  let r scan s
  
  let r reject r is_trivia
  let a dup r
  
  put cpl.cache s a

  ret r
 end
 
 let r split s " "
 let r reject r is_empty

 ret r
end
