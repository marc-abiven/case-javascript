fn ansi_init fore back attr
 if is_undef fore
  ret ansi_init "black" back attr

 if is_undef back
  ret ansi_init fore "white" attr

 if is_undef attr
  ret ansi_init fore back "normal"

 //get fore

 fn get_fore x:def
  if is_str x
   let colors ansi_get_colors

   let n get colors x
   let n n.fore

   ret to_str n
  elseif is_rgb x
   let n ansi_rgb x

   ret concat "38;5;" n
  else
   stop
 end

 //get back

 fn get_back x:def
  if is_str x
   let colors ansi_get_colors

   let n get colors x
   let n n.back

   ret to_str n
  elseif is_rgb x
   let n ansi_rgb x

   ret concat "48;5;" n
  else
   stop
 end

 //get attr

 fn get_attr x
  check is_str x

  let attrs ansi_get_attrs

  ret get attrs x
 end

 //main

 let escape chr 27
 let fore get_fore fore
 let back get_back back
 let attr get_attr attr

 ret obj escape fore back attr
end