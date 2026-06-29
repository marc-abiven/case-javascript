fn not x y:etc
 //bool

 if is_bool x
  ret not x

 //fn

 if is_fn x
  let v x y:etc

  ret not v
 end

 //any

 stop
end