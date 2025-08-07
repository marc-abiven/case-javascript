fn path_file x
 check is_str x
 
 let s path_base x
 let a split s "."
 
 if is_single a
  ret s
 
 drop a
 
 ret join a "."
end
