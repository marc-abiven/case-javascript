fn is_fn x
 let type get_type x

 if different type "function"
  ret false

 let _class get_class x

 ret different _class "GeneratorFunction"
end
