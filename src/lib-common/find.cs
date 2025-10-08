fn find x:composite y:def
 if is_str x
  check is_str y

 if is_vec x
  ret x.indexOf y
 elseif is_obj x
  forin x
   let v get x k

   if same v y
    ret k
  end

  ret -1
 else
  stop
end