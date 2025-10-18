fn txt_compact x
 if is_str x
  let a split x
  let a txt_compact a

  ret join a
 end

 check is_arr x

 let s join x
 let s trim_r s
 let a split s

 while is_full a
  let first front a
  let first trim_r first

  if is_empty first
   shift a
  else
   brk
 end

 let r arr

 for a
  if not is_empty v
   push r v
   cont
  end

  if is_empty r
   push r v
   cont
  end

  let last back r

  if is_empty last
   cont

  push r v
 end

 ret r
end
