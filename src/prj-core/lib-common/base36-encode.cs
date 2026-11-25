fn base36_encode x:str
 var r ""

 for x
  let v asc v
  let v to_base36 v
  let v pad_l v "0" 4

  assign r concat r v
 end

 ret r
end
