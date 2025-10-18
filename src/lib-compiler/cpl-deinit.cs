fn cpl_deinit cpl:obj
 let s json_dump cpl.cache

 file_save cpl.path s
end
