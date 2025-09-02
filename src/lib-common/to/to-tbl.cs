fn to_tbl x
 check is_obj x

 let r arr

 forin x
  let key k
  let value get x k
  let o obj key value

  push r o
 end

 ret r
end