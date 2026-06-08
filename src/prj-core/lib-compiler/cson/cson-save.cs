fn cson_save path:str x:def
 let s cson_encode x

 file_save path s
end
