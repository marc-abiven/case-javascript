fn txt_trim x
 if is_str x
  let a split x

  ret txt_trim a
 end

 check is_arr x

 let a arr

 for x
  let s trim v

  push a s
 end

 ret collate a
end
