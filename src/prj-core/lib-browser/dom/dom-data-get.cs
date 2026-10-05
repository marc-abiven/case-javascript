fn dom_data_get node:obj key
 if is_undef key
  ret dom_data_get node "value"

 check is_str key

 let s get node.dataset "user"
 let o json_decode s

 ret get o key
end
