fn ast_include cpl:obj args:arr children:arr source:obj
 check is_single args
 check is_empty children

 let path front args

 check is_lit path

 let path unwrap path

 stop
end
