fn dom_data_has node:obj key:str
 if not has node.dataset "user"
  ret false

 let o json_decode node.dataset.user

 ret has o key
end
