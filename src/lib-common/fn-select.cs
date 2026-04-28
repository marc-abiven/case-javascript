fn fn_select x:str
 let r obj
 let pattern concat x "*"
 let fns fn_match pattern

 forin fns
  let v get fns k
  let name strip_l k x

  put r name v
 end

 ret r
end
