fn cpl_uncomment x:obj y:str 
 if has x.files y
  ret get x.files y
 
 let path path_concat "src" y
 let content file_load path
 let r arr

 forof split content
  let indent str_indent v
  let tokens cpl_scan x v

  if is_empty tokens
   push r ""
   cont
  end

  let indent repeat " " indent
  let line join tokens " "
  let line concat indent line

  push r line
 end

 let r join r
 let r trim_r r
 
 put x.files y r

 ret r
end
