//set arr as the default parameter for let/var

fn cpl_declare_default cpl:obj nodes:arr
 //visit

 fn visit nodes:arr
  let r arr

  for nodes
   var node null

   try
    assign node set_default v
   catch e
    //set the error context

    unshift cpl.stack v

    throw e
   end

   push r node
  end

  ret r
 end

 //set default

 fn set_default node:obj
  let operator node.operator
  let args node.args
  let children node.children
  let source dup node.source

  if is_declare operator
   if is_single args
    if is_full children
     let args arr args:etc "arr"
     let children visit children
     let r obj operator args children source

     ret r
   end
  end

  let args dup args
  let children visit children

  ret obj operator args children source
 end

 //main

 ret visit nodes
end