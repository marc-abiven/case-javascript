fn count_size
 var r 0

 for split source_code
  let s trim v

  assign r add r s.length
 end

 ret r
end
