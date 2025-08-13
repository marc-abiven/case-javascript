fn path_ext x
 check is_str x
 
 let s path.extname x
 
 ret strip_l s "."
end
