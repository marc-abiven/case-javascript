fn map x:arr y:fn
 let r arr

 for x
  let v y v

  check is_def v

  push r v
 end

 ret r
end
