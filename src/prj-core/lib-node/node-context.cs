fn node_context
 //verbose flag

 fn verbose_flag
  let argv process.argv

  if contain argv "--verbose"
   ret "--verbose"

  if contain argv "--quiet"
   ret "--quiet"

  ret null
 end

 //main

 let r arr
 let verbose verbose_flag

 if is_str verbose
  push r verbose

 if is_color
  push r "--color"

 //if not log_file
 // push r "--no-log"

 ret r
end