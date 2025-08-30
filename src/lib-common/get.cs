fn get x y
 check is_obj x
 check is_str y
 check has x y

 ret inline "x[y]"
end