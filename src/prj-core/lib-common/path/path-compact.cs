fn path_compact path:str relative
 //is absolute

 fn is_absolute x:str
  if not match_l x "/"
   ret false

  let components path_split x

  if contain components "."
   ret false

  if contain components ".."
   ret false

  ret true
 end

 //main

 if is_undef relative
  let relative dir_current

  ret path_compact path relative
 end

 check is_absolute path
 check is_absolute relative

 if same path relative
  ret path

 let path path_split path
 let relative path_split relative

 check gte path.length relative.length

 while true
  if is_empty path
   brk

  if is_empty relative
   brk

  let path_component front path
  let relative_component front relative

  if different path_component relative_component
   brk

  shift path
  shift relative
 end

 ret path_join path
end
