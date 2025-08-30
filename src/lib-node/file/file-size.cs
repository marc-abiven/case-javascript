fn file_size x
 check is_str x

 let v fs.statSync x

 ret v.size
end