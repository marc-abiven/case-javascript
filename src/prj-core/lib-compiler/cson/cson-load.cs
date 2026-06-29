fn cson_load path:str
 let s file_load path

 ret cson_decode s path
end
