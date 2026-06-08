fn pkg_init base
 if is_undef base
  ret pkg_init "include.cson"

 check is_str base

 let r obj

 //load

 for dir_read "src" true
  check is_dir v

  let path path_concat v base

  if not is_file path
   cont

  let o cson_load path

  //merge

  forin o
   let v get o k

   put r k v
  end
 end

 ret r
end
