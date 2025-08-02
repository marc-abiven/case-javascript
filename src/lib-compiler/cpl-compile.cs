fn cpl_compile x y
 check is_obj x
 check is_str y
 
 let nodes cpl_parse x y
 let nodes cpl_fold x nodes
 let nodes cpl_scope x nodes
 
 ret cpl_block x nodes
end
