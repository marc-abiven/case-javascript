fn map x:arr y:fn z:etc
 let r arr

 for x
  let v y v z:etc

  check is_def v

  push r v
 end

 ret r
end
