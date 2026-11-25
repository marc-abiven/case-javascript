fn file_size path:str
 let stat fs.statSync path

 ret stat.size
end
