fn cpl_scan2 cpl:obj str:str
 //cached

 let scans cpl.cache.scans

 if has scans str
  let tokens get scans str

  ret dup tokens
 end

 //compute

 let inputs scan2 str
 let tokens arr

 while is_full inputs
  let input shift inputs

  //comment

  if is_comment input
   brk

  //blank

  if is_blank input
   cont

  //token

  push tokens input
 end

 //cache

 let entry dup tokens

 put scans str entry

 ret tokens
end