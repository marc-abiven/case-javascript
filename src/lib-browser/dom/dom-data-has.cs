fn dom_data_has x:obj y:str
 if not has x.dataset "user"
  ret false

 let o json_decode x.dataset.user

 ret has o y
end
