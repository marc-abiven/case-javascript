fn file_read x:str
 let o fs.readFileSync x

 ret o.toString
end
