fn cpl_fold cpl:obj nodes:arr
 //visit

 fn visit nodes:arr
  let parent shift nodes
  let indent parent.indent
  let descendants arr

  while is_full nodes
   let o front nodes

   if gt o.indent indent
    shift nodes
    push descendants o
   else
    brk
  end

  let children arr

  while is_full descendants
   let o visit descendants

   push children o
  end

  let operator parent.operator
  let args parent.args
  let source parent.source

  ret obj operator args children source
 end

 //main

 let r arr
 let nodes dup nodes

 while is_full nodes
  let o visit nodes

  push r o
 end

 ret r
end