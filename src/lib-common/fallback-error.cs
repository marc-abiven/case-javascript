fn fallback_error x:str y:obj z
 let title space "Fallback" x

 flower title

 let s to_str y.stack
 let s trim_r s
 let s txt_prepend s "error-in-error> "

 console.log s

 if is_undef z
  ret

 check is_obj z

 let s to_str z.stack
 let s trim_r s
 let s txt_prepend s "original-error> "

 console.log s
end