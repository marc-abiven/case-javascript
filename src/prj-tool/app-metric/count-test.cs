fn count_test
 var r 0

 forin app_list
  if match_l k "test-"
   assign r inc r
 end

 ret r
end
