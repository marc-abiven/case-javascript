fn cpl_scan cpl:obj str:str
 //is complex

 fn is_complex x
  if not is_str x
   ret false

  if contain x "//"
   ret true

  if contain x "\""
   ret true

  ret false
 end

 //main

 let s trim str

 if is_complex s
  let cache cpl.cache.scans

  if has cache s
   let r get cache s
   let r dup r

   ret r
  end

  let r scan s

  let r reject r is_trivia
  let a dup r

  put cache s a

  ret r
 end

 let r split s " "
 let r reject r is_empty

 ret r
end