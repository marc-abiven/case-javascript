fn is_symbolic_link x
 if not is_str x
  ret false

 let throwIfNoEntry false
 let o obj throwIfNoEntry
 let o fs.lstatSync x o

 if is_undef o
  ret false

 ret o.isSymbolicLink
end
