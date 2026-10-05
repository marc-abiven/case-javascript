fn dom_data_set node:obj key value
 if is_undef value
  check same arguments.length 2

  ret dom_data_set node "value" key
 end

 check is_str key
 check is_def value

 if not has node.dataset "user"
  let o obj
  let s json_encode o

  assign node.dataset.user s

  ret dom_data_set node key value
 end

 let s get node.dataset "user"
 let o json_decode s

 set o key value

 assign node.dataset.user json_encode o
end
