fn count x:vec y:def
 if is_str x
  check is_str y

  let a split x y

  ret dec a.length
 elseif is_arr x
  var r 0

  for x
   if same v y
    assign r inc r
  end

  ret r
 else
  stop
end