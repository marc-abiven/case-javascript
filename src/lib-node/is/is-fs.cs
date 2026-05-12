fn is_fs x
 if not is_str x
  ret false

 let throwIfNoEntry false
 let o obj throwIfNoEntry
 let o fs.statSync x o

 ret is_def o
end