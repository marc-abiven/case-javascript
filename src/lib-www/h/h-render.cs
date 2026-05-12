fn h_render x:obj
 //html inline

 fn html_inline x:str
  let r replace x "\n" " "
  let r replace r "\r" ""
  let r replace_rec r "  " " "

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

 if same x.name "html"
  push lines "<!doctype html>"

 let attr dup x.attr

 //style

 if is_full x.style
  var style arr

  forin x.style
   let v get x.style k
   let s concat k ": " v ";"

   push style s
  end

  let style join style " "

  put attr "style" style
 end

 //attributes

 let attributes arr

 forin attr
  let v get attr k
  let s dom_special_chars v
  let s quote s
  let s concat k "=" s

  push attributes s
 end

 let attributes join attributes " "

 //open

 let open arr x.name

 if is_full attributes
  push open attributes

 let open join open " "
 let open angle open

 let close concat "/" x.name
 let close angle close

 let name x.name
 let text x.text
 let children x.children

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
 elseif x.short
  //short

  check is_empty text
  check is_empty children

  push lines open
 elseif x.inline
  //inline

  var line open
  let text dom_special_chars text
  let text html_inline text

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
  let text html_inline text
  let line concat open text close

  push lines line
 else
  //block

  push lines open

  let text dom_special_chars text
  let text html_inline text
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
