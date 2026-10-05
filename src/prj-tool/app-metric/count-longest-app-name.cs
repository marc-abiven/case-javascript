fn count_longest_app_name
 var r 0

 forin app_list
  if match_l k "test-"
   cont

  assign r max r k.length
 end

 ret r
end
