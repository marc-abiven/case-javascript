fn cpl_deinit x
 check is_obj x

 let s json_dump x.cache

 file_save x.path s
end