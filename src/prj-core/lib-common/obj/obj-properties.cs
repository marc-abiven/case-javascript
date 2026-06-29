fn obj_properties x:def
 let r arr

 //prototypes

 let prototypes arr

 push prototypes x

 while true
  let last back prototypes
  let parent Object.getPrototypeOf last

  if is_null parent
   brk

  push prototypes parent
 end

 //properties

 for prototypes
  let prototype v

  for Object.getOwnPropertyNames prototype
   //proto

   if match_l v "__"
    cont

   //constructor

   if same v "constructor"
    cont

   //macros-like

   if is_upper v
    cont

   //node

   if is_node
    //throw an ExperimentalWarning caught in process.on_warning

    if same x global
     if same v "localStorage"
      cont
    end
   end

   //value

   var value null

   try
    assign value get prototype v
   catch
    //TypeError: Value of "this" must be of DOMException

    cont
   end

   //fn

   if is_fn value
    cont

   //duplicate

   if contain r v
    cont

   //property

   push r v
  end
 end

 ret r
end