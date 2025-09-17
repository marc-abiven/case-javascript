fn check x y:etc
 if is_true x
  if is_empty y
   ret
 elseif is_fn x
  let b x y:etc

  if is_true b
   ret
 end

 stop "check"
end
