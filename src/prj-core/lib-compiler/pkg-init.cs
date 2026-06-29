fn pkg_init base
 if is_undef base
  ret pkg_init "include.cson"

 check is_str base

 //load

 let cache path_file base
 let cache concat cache ".json"
 let cpl cpl_init "pkg" cache
 let o obj

 for dir_read "src" true
  check is_dir v

  let path path_concat v base

  if not is_file path
   cont

  let cson file_load path
  let cson cson_decode cson path cpl

  //merge

  forin cson
   put o k v
  end
 end

 //save cache

 cpl_deinit cpl

 ret sort o
end
