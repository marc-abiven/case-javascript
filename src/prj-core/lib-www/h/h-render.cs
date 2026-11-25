fn h_render node:obj
 //inline text

 fn inline_text x:str
  if is_empty x
   ret x

  //preserve a whitespace at both ends

  let begin front x
  let begin is_space begin
  let end back x
  let end is_space end
  var r txt_inline x

  if is_empty r
   if begin
    ret " "

   if end
    ret " "
  end

  if begin
   assign r concat " " r

  if end
   assign r concat r " "

  ret r
 end

 //indent child

 fn indent_child x:arr
  let r arr
  let a dup x

  while is_full a
   let s shift a

   if not pre_begin s
    let s txt_indent s

    push r s

    cont
   end

   let s txt_indent s

   push r s

   if pre_end s
    cont

   while is_full a
    let s shift a

    push r s

    if pre_end s
     brk
   end
  end

  ret r
 end

 //pre begin

 fn pre_begin x:str
  let s trim x

  ret match_l s "<pre>"
 end

 //pre end

 fn pre_end x:str
  let s trim x

  ret match_r s "</pre>"
 end

 //main

 let lines arr

 if same node.name "html"
  push lines "<!doctype html>"

 let attr dup node.attr

 //style

 if is_full node.style
  var style arr

  forin node.style
   let s concat k ": " v ";"

   push style s
  end

  let style join style " "

  put attr "style" style
 end

 //attributes

 let attributes arr

 forin attr
  let s dom_special_chars v
  let s quote s
  let s concat k "=" s

  push attributes s
 end

 let attributes join attributes " "

 //open

 let open arr node.name

 if is_full attributes
  push open attributes

 let open join open " "
 let open angle open

 let close concat "/" node.name
 let close angle close

 let name node.name
 let text node.text
 let children node.children

 if same name "pre"
  //pre

  check is_empty children

  let text dom_special_chars text
  let line concat open text close

  push lines line
 elseif same name "script"
  //script

  check is_empty children

  let text replace text "</script>" "<\\/script>"
  let text txt_indent text
  let text split text

  push lines open
  append lines text
  push lines close
 elseif node.short
  //short

  check is_empty text
  check is_empty children

  push lines open
 elseif node.inline
  //inline

  var line open
  let text dom_special_chars text
  let text inline_text text

  assign line concat line text

  for children
   let s h_render v

   assign line concat line s
  end

  //close

  assign line concat line close

  push lines line
 elseif is_empty children
  //terminal

  let text dom_special_chars text
  let text inline_text text
  let line concat open text close

  push lines line
 else
  //block

  push lines open

  let text dom_special_chars text
  let text txt_inline text
  let text txt_indent text

  if is_full text
   push lines text

  //children

  for children
   let s h_render v
   let a split s
   let a indent_child a

   append lines a
  end

  //close

  push lines close
 end

 ret join lines
end
