fn dbg_origin source line key depth
 check is_arr source
 check is_uint line

 if is_undef key
  ret dbg_origin source line "" depth

 check is_str key

 if is_undef depth
  ret dbg_origin source line key 15

 check is_uint depth

 fn origin source line key depth
  check is_arr source
  check is_uint line
  check is_str key
  check is_uint depth

  let r arr
  let a arr

  let n div depth 2
  let n trunc n
  var n sub line n

  let length min source.length depth

  let nup add n length

  if lt n 1
   assign n 1
  elseif gte nup source.length
   assign n sub source.length length
   assign n inc n

   if lt n 1
    assign n 1
  end

  fornum length
   let n add n i
   var p " "

   if same n line
    assign p ">"

   let index dec n
   var code at source index

   if is_empty key
    check is_str code
   else
    assign code get code key

    check is_str code
   end

   let o obj n p code

   push a o
  end

  let a2 arr

  forof a
   push a2 v.code
  end

  let s join a2

  let s str_unindent s
  let a3 split s

  forin a3
   let i to_i k
   let code at a3 i
   let o at a i

   assign o.code code
  end

  forof a
   if is_empty v.code
    cont

   push r v
  end

  ret r
 end

 var r origin source line key depth

 if gte r.length depth
  ret r

 var n inc depth

 while lte n source.length
  assign r origin source line key n

  if gte r.length depth
   brk

  assign n inc n
 end

 ret r
end