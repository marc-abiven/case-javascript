fn file_write x y
 check is_str x
 check is_str y
 
 fs.writeFileSync x y
end
