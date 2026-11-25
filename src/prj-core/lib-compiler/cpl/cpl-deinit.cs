fn cpl_deinit cpl:obj
 let s json_dump cpl.cache

 file_save cpl.cache_path s
end
