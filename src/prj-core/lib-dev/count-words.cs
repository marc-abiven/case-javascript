fn count_words x:str
 //delimit words

 fn delimit_words words:def delimiter:str
  //string

  if is_str words
   ret split words delimiter

  //array

  check is_arr words

  let r arr

  for words
   let a split v delimiter

   append r a
  end

  ret r
 end

 //unwrap all

 fn unwrap_all words:arr
  let r arr

  for words
   if not is_unwrappable v
    push r v

    cont
   end

   let parts unwrap v

   if is_str parts
    push r parts
   else
    append r parts
  end

  ret r
 end

 //main

 let words delimit_words x " "
 let words delimit_words words cr
 let words delimit_words words lf
 let words reject words is_empty
 let words unwrap_all words

 ret words.length
end