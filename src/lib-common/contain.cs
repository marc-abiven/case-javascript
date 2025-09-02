fn contain x y
 check is_vec x

 if is_undef y
  check same arguments.length 2

 if is_str x
  check is_str y

 ret x.includes y
end