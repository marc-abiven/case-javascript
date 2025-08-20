fn cpl_scan x y
 check is_obj x
 check is_str y

 fn is_complex x
  if not is_str x
   ret false

  if contain x "//"
   ret true

  if contain x "\""
   ret true

  ret false
 end

 let s trim y

 if is_complex s
  if has x.cache s
   let r get x.cache s
   let r dup r

   ret r
  end

  let r scan s
  let r reject r is_trivia
  let a dup r

  put x.cache s a

  ret r
 end

 let r split s " "
 let r reject r is_empty

 ret r
end