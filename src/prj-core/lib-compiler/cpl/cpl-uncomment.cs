fn cpl_uncomment cpl:obj path:str
 let cache cpl.cache.uncomments
 let entry cpl_compute cpl cache "uncomment" path

 //compute

 if is_null entry
  let string file_load path
  let string cpl_uncomment_str cpl string
  let modified fs_modified path
  let entry obj modified string

  set cache path entry

  ret string
 end

 //cache

 ret entry.string
end