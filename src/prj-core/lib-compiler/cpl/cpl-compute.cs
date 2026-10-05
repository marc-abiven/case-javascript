fn cpl_compute cpl:obj cache:obj name:str path:str
 check is_absolute path

 //access

 var compute true
 let modified fs_modified path

 if has cache path
  let entry get cache path

  if same entry.modified modified
   assign compute false
 end

 //cache

 if not compute
  let entry get cache path

  ret copy entry
 end

 //compute

 let _modified time_hn modified
 let path path_shorten path
 let o obj path _modified
 let s obj_option o

 log3 name s

 ret null
end
