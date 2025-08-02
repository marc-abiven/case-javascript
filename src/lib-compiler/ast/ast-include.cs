fn ast_include x y
 check is_obj x
 check is_str y

 let parameters y.parameters
 let children y.children

 check is_single parameters
 check is_empty children
 
 let s front parameters
 
 check is_lit s
 
 let include unwrap s
 
 stop
 
 if match_l include "/"
  ret cpl_parse x include

 let path path_concat y include
 
 ret cpl_parse x path
end
 
