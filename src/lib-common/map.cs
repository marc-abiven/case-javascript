fn map x:arr y:fn
 //~ check is_arr x
 //~ check is_fn y

 let r arr

 forof x
  let v y v

  check is_def v

  push r v
 end

 ret r
end
