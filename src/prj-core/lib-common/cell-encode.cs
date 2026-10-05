//stringify a cell

fn cell_encode x:def
 //nothing

 if is_nothing x
  ret ""

 //string

 if is_str x 
  let r json_encode x //show escape sequences
  let r dequote r
  let r trim_r r
  
  ret r
 end

 //array

 if is_arr x
  if is_empty x
   ret ""

  let a arr

  for x
   if is_key v
    push a v
   else
    let s display_encode v

    push a s
   end
  end

  ret join a " "
 end

 //object

 if is_obj x
  if is_empty x
   ret ""

  let r display_encode x
  let r strip_l r "obj "
  let r strip_r r " end"

  ret r
 end

 //any

 ret display_encode x
end
