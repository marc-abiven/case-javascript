fn dbg_backtrace x
 if is_undef x
  let e new Error "backtrace"
  
  ret dbg_backtrace e
 end
 
 check is_obj x
 
 fn parse_numbers x
  check is_arr x
  
  let r arr
  
  forof x
   if not is_numeric v
    cont
   
   let n json_decode v
    
   if not is_uint n
    cont
   
   push r n
  end
  
  ret r
 end

 fn is_fast x
  if is_alnum x
   ret true

  if is_access x
   ret true

  if is_numeric x
   ret true
   
  if is_lit x
   ret true

  if is_lit_char x
   ret true

  ret false
 end
 
 let r arr
 let stack x.stack
 let stack trim stack
 let stack split stack 
 let source dbg_source
 let lines split source
 
 forof stack  
  if is_node
   let script at process.argv 1
   
   if not contain v script
    cont
  end

  let s trim v
  let s replace s "@" " "
  let a split s " "
  let s front a
  
  if same s "at"
   shift a
   
  var fn shift a
  
  if is_empty fn
   assign fn "anonymous"
  
  if not is_noun fn
   cont
  
  let a shift a  
  let a scan a is_fast
  let a parse_numbers a
  
  if not is_many a
   cont
  
  let line back a 1
  
  var index dec line
  
  if is_node
  elseif is_browser  
   assign index sub line 3
   
  let code at lines index
  let code trim code
  let o obj fn line code
  
  push r o
 end
 
 ret r
end
