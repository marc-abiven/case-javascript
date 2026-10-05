fn dir_find path:str base:str
 let r arr

 for dir_load path
  let s path_base v

  if match s base
   push r v
 end

 ret r
end
