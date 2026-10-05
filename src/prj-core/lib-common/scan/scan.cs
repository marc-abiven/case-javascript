fn scan x:str reducer delimiter
 if is_undef reducer
  ret scan x is_token

 check is_fn reducer

 if is_undef delimiter
  ret scan x reducer is_fragment

 check is_fn delimiter

 //group

 fn group x:arr reducer:fn
  let r arr
  let fragments dup x

  while is_full fragments
   let a reduce fragments reducer

   if is_full a
    let s implode a

    push r s
    shift fragments a.length
   else
    let s shift fragments

    push r s
   end
  end

  ret r
 end

 //reduce

 fn reduce x:arr reducer:fn
  check is_fn reducer
  check is_full x

  let r dup x

  while is_full r
   let s implode r

   if reducer s
    brk

   drop r
  end

  ret r
 end

 //main

 let a delimit x delimiter

 ret group a reducer
end