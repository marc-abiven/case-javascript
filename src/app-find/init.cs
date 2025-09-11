fn init x:str y:etc
 //~ check is_str x

 fn safe_read x:str
  //~ check is_str x

  try
   ret dir_read x true
  catch
   ret arr
  end
 end

 let history arr
 let founds arr

 fn visit x:str y:str
  //~ check is_str x
  //~ check is_str y

  forof safe_read x
   if contain history v
    cont

   push history v

   if contain v y
    let s concat "#" founds.length

    log s v

    push founds v
   end

   if is_dir v
    visit v y
  end
 end

 visit "/" x
end
