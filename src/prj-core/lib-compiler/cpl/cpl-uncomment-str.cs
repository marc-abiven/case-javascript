fn cpl_uncomment_str cpl:obj str:str
 let a arr

 for split str
  let indent str_indent v
  let tokens cpl_scan cpl v

  if is_empty tokens
   push a ""
   cont
  end

  let indent repeat " " indent
  let line join tokens " "
  let line concat indent line

  push a line
 end

 let s join a

 ret trim_r s
end