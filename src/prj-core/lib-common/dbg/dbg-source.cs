fn dbg_source x
 //get source

 fn get_source
  //node

  if is_node
   ret file_load script //global

  //browser

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

 var source ""

 if is_undef x
  assign source get_source
 else
  assign source file_load x

 let source trim_r source
 let lines split source

 //remove source map

 while true
  let s pop lines

  if match_l s "const meta="
   brk
 end

 ret join lines
end
