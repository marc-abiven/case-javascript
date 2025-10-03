fn tbl_render x:arr
 //stringify tbl

 fn stringify_tbl x:arr
  let r arr

  for x
   let row dup v

   forin v
    let v get row k

    if is_str v
     cont

    let s json_encode v

    set row k s
   end

   push r row
  end

  ret r
 end

 //pad column

 fn pad_column x:arr
  let r arr
  let a arr

  for x
   if is_num v
    let s to_fixed v

    push a s
   elseif is_str v
    push a v
   else
    stop
  end

  var length 0

  for a
   assign length max length v.length
  end

  for a
   if is_numeric v
    let s pad_l v " " length

    push r s
    cont
   elseif is_str v
    let s pad_r v " " length

    push r s
   else
    stop
  end

  ret r
 end

 //main

 //extract columns

 let tbl stringify_tbl x
 let titles tbl_columns tbl
 let columns arr

 for titles
  let title v
  let column tbl_column tbl title

  unshift column title

  let column pad_column column

  push columns column
 end

 //find width

 var length 0

 for columns
  let column v
  var n 0

  for column
   assign n max n v.length
  end

  assign length add length n
 end

 //get headers

 assign length add length columns.length
 assign length dec length

 let a arr
 let separator repeat "-" length

 push a separator

 let header arr

 for columns
  let s shift v

  push header s
 end

 //construct body

 let s join header " "

 push a s
 push a separator

 let first front columns

 for first
  let index i
  let line arr

  for columns
   let s at v index

   push line s
  end

  let s join line " "

  push a s
 end

 push a separator

 ret join a
end