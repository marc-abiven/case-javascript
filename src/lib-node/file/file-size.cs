fn file_size x:str
 let stat fs.statSync x

 ret stat.size
end
