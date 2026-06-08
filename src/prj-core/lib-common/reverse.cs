fn reverse x:vec
 if is_str x
  let r explode x

  reverse r

  let r implode r

  ret r
 elseif is_arr x
  x.reverse
 else
  stop
end
