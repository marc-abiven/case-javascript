fn fn_match x
 check is_str x

 let r obj

 forin fns
  if not match k x
   cont

  let v get fns k

  put r k v
 end

 ret r
end