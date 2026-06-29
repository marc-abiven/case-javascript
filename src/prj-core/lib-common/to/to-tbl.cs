fn to_tbl x:obj
 let r arr

 forin x
  let key to_lisp k //beautify
  let value v
  let o obj key value

  push r o
 end

 ret r
end
