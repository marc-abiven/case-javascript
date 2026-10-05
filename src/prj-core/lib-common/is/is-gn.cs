fn is_gn x
 let type get_type x

 if different type "function"
  ret false

 let _class get_class x

 ret same _class "GeneratorFunction"
end
