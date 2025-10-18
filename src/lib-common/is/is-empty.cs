fn is_empty x
 if is_vec x
  ret same x.length 0

 if is_obj x
  let keys obj_keys x

  ret is_empty keys
 end

 ret false
end
