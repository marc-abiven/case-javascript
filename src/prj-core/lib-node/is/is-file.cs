fn is_file x
 if not is_str x
  ret false

 let throwIfNoEntry false
 let o obj throwIfNoEntry
 let o fs.statSync x o

 if is_undef o
  ret false

 ret o.isFile
end