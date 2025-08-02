fn file_read x
 check is_str x
 
 let o fs.readFileSync x
 
 ret call o.toString
end
