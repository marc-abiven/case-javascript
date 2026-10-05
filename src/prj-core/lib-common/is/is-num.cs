fn is_num x
 if Number.isNaN x
  ret false

 if same x Number.NEGATIVE_INFINITY
  ret false

 if same x Number.POSITIVE_INFINITY
  ret false

 let type get_type x

 ret same type "number"
end
