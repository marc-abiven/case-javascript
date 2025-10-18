fn strip_r x:str y:str
 if match_r x y
  let n sub x.length y.length

  ret slice_l x n
 end

 ret x
end
