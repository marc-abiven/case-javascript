fn dom_data_set x:obj y z
 if is_undef z
  check same arguments.length 2

  ret dom_data_set x "value" y
 end

 check is_str y
 check is_def z

 if not has x.dataset "user"
  let o obj
  let s json_encode o

  assign x.dataset.user s

  ret dom_data_set x y z
 end

 let s get x.dataset "user"
 let o json_decode s

 set o y z

 assign x.dataset.user json_encode o
end
