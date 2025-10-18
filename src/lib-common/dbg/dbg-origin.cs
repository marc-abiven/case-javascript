fn dbg_origin source:arr line:uint key depth
 if is_undef key
  ret dbg_origin source line "" depth

 check is_str key

 if is_undef depth
  ret dbg_origin source line key 15

 check is_uint depth

 //find origin

 fn find_origin fn:fn source:arr line:uint key:str depth:uint
  var n depth
  var r fn source line key n

  while lte n source.length
   if gte r.length depth
    brk

   assign n inc n
   assign r fn source line key n

   let end add line r.length

   if gte end source.length
    brk
  end

  ret r
 end

 //origin

 fn origin source:arr line:uint key:str depth:uint
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

  for a
   push a2 v.code
  end

  let s join a2

  let s txt_unindent s
  let a3 split s

  for a3
   let o at a i

   assign o.code v
  end

  for a
   if is_empty v.code
    cont

   push r v
  end

  ret r
 end

 //origin center

 fn origin_center source:arr line:uint key:str depth:uint
  let a origin source line key depth

  ret center a
 end

 //center

 fn center x:arr
  var middle get_position x

  var range middle

  let length mul range 2
  let length inc length

  if gt length x.length
   assign range sub x.length middle
   assign range dec range

  let ybefore sub middle range
  let yafter inc middle

  let before slice x ybefore range
  let center at x middle
  let after slice x yafter range
  let r arr before:etc center after:etc

  ret r
 end

 //get position

 fn get_position x:arr
  for x
   if same v.p ">"
    ret i
  end

  stop
 end

 //main

 let centered find_origin origin_center source line key depth

 if same centered.length depth
  ret centered

 ret find_origin origin source line key depth
end
