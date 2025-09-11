fn dom_data_has x:obj y:str
 //~ check is_obj x
 //~ check is_str y

 if not has x.dataset "user"
  ret false

 let o json_decode x.dataset.user

 ret has o y
end
