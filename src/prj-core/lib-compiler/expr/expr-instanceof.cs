fn expr_instanceof cpl:obj value:name _class:identifier args:etc
 check is_empty args

 ret space value "instanceof" _class
end
