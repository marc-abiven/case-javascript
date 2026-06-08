fn cpl_parse cpl:obj path:str
 let nodes cpl_load cpl path
 let nodes cpl_tokenize cpl nodes
 let nodes cpl_escape_lisp cpl nodes
 let nodes cpl_fold cpl nodes

 ret nodes
end