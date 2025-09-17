fn dbg_source x
 fn get_source
  if is_node
   //~ let path at process.argv 1
   //~ let s file_load path

   let s file_load script

   ret s
  elseif is_browser
   ret html.outerHTML
  else
   stop
 end

 var r ""

 if is_undef x
  assign r get_source
 else
  assign r file_load x

 let r trim_r r
 let r split r

 while true
  let s pop r

  if match_l s "const app="
   brk
 end

 let r join r

 ret r
end
