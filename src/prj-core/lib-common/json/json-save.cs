fn json_save path:str x:def
 let s json_encode x

 file_save path s
end