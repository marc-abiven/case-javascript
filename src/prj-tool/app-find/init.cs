fn init x:str y:etc
 //visit

 let args dup y
 let inside extract args "--inside"
 let history arr
 let founds arr

 fn visit dir:str inside:bool str:str
  for safe_dir_read dir
   //kernel

   if is_kernel_dir v
    cont

   //visited

   if contain history v
    cont

   //link

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

 //is kernel dir

 fn is_kernel_dir x
  if not is_str x
   ret false

  for arr "proc" "sys" "dev"
   let path concat "/" v

   if same path x
    ret true

   let path concat path "/"

   if match_l v path
    ret true
  end

  ret false
 end

 //main

 visit "/" inside x
end
