fn txt_trim_r x
 if is_str x
  check is_uint y

  let a split x
  let a txt_trim_r a

  ret join a
 end

 check is_arr x

 let s join x
 let s trim_r s
 let a split s

 ret map a trim_r
end