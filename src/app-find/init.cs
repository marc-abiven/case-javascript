fn init x:str y:etc
 //visit

 let history arr
 let founds arr

 fn visit dir:str inside:bool str:str
  for safe_dir_read dir
   //visited

   if contain history v
    cont

   if is_symbolic_link v
    cont

   push history v

   //match

   var match false

   if inside
    let content safe_file_read v

    if contain content str
     assign match true
   elseif contain v str
    assign match true

   //found

   if match
    let s concat "#" founds.length

    log s v

    push founds v
   end

   //visit

   if is_dir v
    visit v inside str
  end
 end

 //safe dir read

 fn safe_dir_read x:str
  try
   ret dir_read x true
  catch
   ret arr
  end
 end

 //safe file read

 fn safe_file_read x:str
  try
   ret file_read x
  catch
   ret ""
  end
 end

 //main

 let args dup y
 let inside extract args "--inside"

 visit "/" inside x
end