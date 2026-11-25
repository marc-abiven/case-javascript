fn is_buffer x
 //node

 if is_node
  //object

  if is_obj x
   //with constructor

   if has x "constructor"
    let _class get_class x

    ret same _class "Buffer"
   end
  end
 end

 //any

 ret false
end