fn contain x:vec y

 if is_undef y
  check same arguments.length 2

 if is_str x
  check is_str y

 ret x.includes y
end
