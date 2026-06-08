fn path_file x:str
 let s path_base x

 if is_empty s
  ret ""

 let a split s "."

 if is_single a
  ret s

 drop a

 ret join a "."
end