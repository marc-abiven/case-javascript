fn fallback_error x:str y:obj z
 var print value log
 let title space "Fallback" x

 try
  flower title
 catch
  assign print value console.log
 end

 let s to_str y.stack
 let s trim_r s
 let s txt_prepend s "error-in-error> "

 print s

 if is_undef z
  ret

 check is_obj z

 let s to_str z.stack
 let s trim_r s
 let s txt_prepend s "original-error> "

 print s
end