fn expr_iif cpl:obj condition:arg true_value:arg false_value:arg args:etc
 check is_empty args

 ret concat condition "?" true_value ":" false_value
end
