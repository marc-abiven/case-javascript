fn dbg_source x
 //get source

 fn get_source
  if is_node
   ret file_load script
  end

  check is_browser

  let s to_str html.outerHTML

  //strip top html

  let lines split s

  for lines
   let s trim v

   if not match_l s "<"
    brk

   at lines i ""
  end

  //strip bottom html

  while is_full lines
   let s back lines
   let s trim s

   if is_empty s
   elseif match_l s "<"
   else
    brk

   drop lines
  end

  //unindent

  let lines txt_unindent lines

  ret join lines
 end

 //main

 var r ""

 if is_undef x
  assign r get_source
 else
  assign r file_load x

 let r trim_r r
 let r split r

 //remove source map

 while true
  let s pop r

  if match_l s "const app="
   brk
 end

 let r join r

 ret r
end