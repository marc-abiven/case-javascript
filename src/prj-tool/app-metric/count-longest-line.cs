fn count_longest_line
 var r 0

 for split source_code
  let s trim v

  assign r max r s.length
 end

 ret r
end
