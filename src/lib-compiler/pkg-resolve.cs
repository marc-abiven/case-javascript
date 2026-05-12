fn pkg_resolve pkg:str file:str
 //is unique

 fn is_unique x:arr
  for x
   let n count x v

   if gt n 1
    ret false
  end

  ret true
 end

 //main

 let r arr
 let pkgs pkg_list
 let dir get pkgs pkg
 let path path_concat dir file

 if is_file path
  let lines file_load path
  let lines split lines

  for lines
   let name strip_l v "lib-" //to remove after bootstrap
   let path get pkgs name
   let children pkg_resolve name file

   append r children
  end
 end

 push r dir

 check is_unique r

 ret r
end