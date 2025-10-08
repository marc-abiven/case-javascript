fn cpl_uncomment cpl:obj path:str
 if has cpl.files path
  ret get cpl.files path

 let path_real path_concat "src" path
 let content file_load path_real
 let r arr

 for split content
  let indent str_indent v
  let tokens cpl_scan cpl v

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

 put cpl.files path r

 ret r
end