fn scan2 x:str
 //parse literal

 fn parse_literal inputs:arr
  let a dup inputs
  let outputs arr

  //open

  let open front a

  if different open "\""
   ret null

  push outputs open
  shift a

  //body

  var close false

  while is_full a
   let c shift a

   //close

   if same c "\""
    push outputs c

    assign close true

    brk
   end

   //escape sequence

   if same c "\\"
    if is_full a
     //skip next character

     let c2 shift a

     push outputs c
     push outputs c2

     cont
    end
   end

   //body character

   push outputs c
  end

  if not close
   ret null

  //shift

  shift inputs outputs.length

  ret implode outputs
 end

 //parse word

 fn parse_word inputs:arr
  let a dup inputs
  let outputs arr

  while is_full a
   let c front a

   //space

   if is_space c
    brk

   //word character

   shift a
   push outputs c
  end

  //empty

  if is_empty outputs
   ret null

  //shift

  shift inputs outputs.length

  ret implode outputs
 end

 //parse spaces

 fn parse_spaces inputs:arr
  let a dup inputs
  let outputs arr

  while is_full a
   let c front a

   //word character

   if not is_space c
    brk

   //space

   shift a
   push outputs c
  end

  //empty

  if is_empty outputs
   ret null

  //shift

  shift inputs outputs.length

  ret implode outputs
 end

 //main

 let r arr
 let inputs explode x
 let outputs arr

 while is_full inputs
  //literal

  let string parse_literal inputs

  if is_str string
   push r string

   cont
  end

  //word

  let string parse_word inputs

  if is_str string
   push r string

   cont
  end

  //spaces

  let string parse_spaces inputs

  check is_str string

  push r string
 end

 ret r
end
