fn not x y:etc
 if is_bool x
  ret not x
 elseif is_fn x
  let v x y:etc

  ret not v
 else
  stop
end