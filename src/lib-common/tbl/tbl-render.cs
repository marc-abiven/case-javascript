fn tbl_render x:arr
 //~ check is_arr x

 fn stringify_tbl x:arr
  //~ check is_arr x

  let r arr

  forof x
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

 fn pad_column x:arr
  //~ check is_arr x

  let r arr
  let a arr

  forof x
   if is_num v
    let s to_fixed v

    push a s
   elseif is_str v
    push a v
   else
    stop
  end

  var length 0

  forof a
   assign length max length v.length
  end

  forof a
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

 let tbl stringify_tbl x
 let titles tbl_columns tbl
 let columns arr

 forof titles
  let title v
  let column tbl_column tbl title

  unshift column title

  let column pad_column column

  push columns column
 end

 var length 0

 forof columns
  let column v
  var n 0

  forof column
   assign n max n v.length
  end

  assign length add length n
 end

 assign length add length columns.length
 assign length dec length

 let a arr
 let separator repeat "-" length

 push a separator

 let header arr

 forof columns
  let s shift v

  push header s
 end

 let s join header " "

 push a s
 push a separator

 let first front columns

 for first
 //~ forin first
  //~ let i to_i k
  let line arr

  forof columns
   let s at v i

   push line s
  end

  let s join line " "

  push a s
 end

 push a separator

 ret join a
end
