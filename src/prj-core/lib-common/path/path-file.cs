fn path_file path:str
 let base path_base path

 if is_empty base
  ret ""

 let components split base "."

 if is_single components
  ret base

 drop components

 ret join components "."
end
