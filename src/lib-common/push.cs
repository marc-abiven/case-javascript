fn push x:arr y
 //~ check is_arr x

 if is_undef y
  check same arguments.length 2

 x.push y
end
