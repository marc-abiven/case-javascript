fn file_size x:str
 let v fs.statSync x

 ret v.size
end
