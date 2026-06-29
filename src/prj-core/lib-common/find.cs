fn find x:composite y:def
 if is_str x
  check is_str y
  
 //vector

 if is_vec x
  ret x.indexOf y
  
 //object
 
 if is_obj x
  forin x
   if same v y
    ret k
  end

  ret -1
 end
 
 //any
 
 stop
end
