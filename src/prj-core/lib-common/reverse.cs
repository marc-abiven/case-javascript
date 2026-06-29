fn reverse x:composite
 //string

 if is_str x
  let r explode x

  reverse r

  let r implode r

  ret r
 end

 //array

 if is_arr x
  x.reverse

  ret
 end

 //object

 if is_obj x
  let r obj
  let keys obj_keys x

  reverse keys

  for keys
   let k v
   let v get x k

   put r k v
  end

  ret r
 end

 //any

 stop
end