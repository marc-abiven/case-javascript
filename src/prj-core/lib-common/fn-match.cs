fn fn_match x:str
 let r obj

 forin fns
  if not match k x
   cont

  let v get fns k

  put r k v
 end

 ret r
end
