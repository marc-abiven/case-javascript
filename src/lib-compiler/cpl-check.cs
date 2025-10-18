fn cpl_check cpl:obj nodes:arr
 //visit

 fn visit nodes:arr
  let r arr

  for nodes
   if not is_xn v.operator
    let node dup v

    assign node.children visit node.children
    push r node

    cont
   end

   let node instrument v

   push r node
  end

  ret r
 end

 //instrument

 fn instrument node:obj
  let r dup node
  let name front r.args
  let parameters slice r.args 1

  let arity get_arity parameters

  if same arity.operator "gte"
   if same arity.count 0
    assign r.children visit r.children

    ret r
   end
  end

  let operator "check_arity"
  let count to_str arity.count
  let s_operator to_lit arity.operator
  let args arr s_operator "arguments.length" count
  let children arr
  let source dup r.source
  let node obj operator args children source

  unshift r.children node

  reverse parameters
  clear r.args

  for parameters
   if is_identifier v
    unshift r.args v

    cont
   end

   check is_tuple v

   let a unwrap v

   check is_pair a

   let identifier at a 0
   let type at a 1

   if same type "etc"
    unshift r.args v

    cont
   end

   unshift r.args identifier

   let s_identifier to_lit identifier
   let s_type to_lit type
   let is concat "is_" type

   let operator "check_arg"
   let args arr is identifier s_identifier s_type
   let children arr
   let source dup r.source
   let node obj operator args children source

   unshift r.children node
  end

  unshift r.args name

  assign r.children visit r.children

  ret r
 end

 //get arity

 fn get_arity args:arr
  var operator "same"
  var count 0

  for args
   if is_tuple v
    let a unwrap v
    let type at a 1

    if same type "etc"
     assign operator "gte"

     cont
    end
   elseif is_identifier v
    assign operator "gte"

    cont
   end

   assign count inc count
  end

  ret obj operator count
 end

 //is xn

 fn is_xn x
  if same x "fn"
   ret true

  if same x "gn"
   ret true

  ret false
 end

 //main

 ret visit nodes
end
