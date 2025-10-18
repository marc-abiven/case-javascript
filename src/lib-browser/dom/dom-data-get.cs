fn dom_data_get x:obj y
 if is_undef y
  ret dom_data_get x "value"

 check is_str y

 let s get x.dataset "user"
 let o json_decode s

 ret get o y
end
