fn tbl_render tbl:arr
 //stringify tbl

 fn stringify_tbl tbl:arr
  let r arr

  for tbl
   let row dup v

   forin v
    let s cell_encode v

    set row k s
   end

   push r row
  end

  ret r
 end

 //pad column

 fn pad_column column:arr
  let r arr

  var length 0

  for column
   assign length max length v.length
  end

  if is_numeric_column column
   //numeric

   for column
    let s pad_l v " " length

    push r s
   end
  else
   //text

   for column
    let s pad_r v " " length

    push r s
   end
  end

  ret r
 end

 //is numeric column

 fn is_numeric_column column
  if not is_arr column
   ret false

  for column
   //skip title

   if same i 0
    cont

   //numeric

   if not is_numeric v
    ret false
  end

  ret true
 end

 //main

 //extract columns

 let tbl stringify_tbl tbl
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
  let s trim_r s

  push a s
 end

 push a separator

 ret join a
end
