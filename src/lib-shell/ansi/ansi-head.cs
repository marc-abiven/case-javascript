fn ansi_head x:str length:uint
 let a explode x
 let escape chr 27
 let at asc "@"
 let tilde asc "~"
 var buffer ""
 var visible 0
 var control 0

 while is_full a
  if gte visible length
   brk

  //escape

  let c1 shift a

  if different c1 escape
   assign buffer concat buffer c1
   assign visible inc visible

   cont
  end

  //malformed

  if is_empty a
   let s char_escape c1

   assign buffer concat buffer s
   assign visible add visible s.length

   cont
  end

  //bracket

  let c2 shift a
  var malformed false

  if different c2 "["
   assign malformed true

  if is_empty a
   assign malformed true

  //malformed

  if malformed
   let s char_escape c1

   assign buffer concat buffer s
   assign buffer concat buffer c2
   assign visible add visible s.length 1

   cont
  end

  //body

  var body ""
  var closed false

  while is_full a
   let c3 shift a
   let n asc c3

   assign body concat body c3

   if between n at tilde
    assign closed true

    brk
   end
  end

  //malformed

  if not closed
   let s char_escape c1

   assign buffer concat buffer s
   assign buffer concat buffer c2
   assign buffer concat buffer body
   assign visible add visible s.length 1 body.length

   cont
  end

  assign buffer concat buffer c1 c2 body
  assign control add control 2 body.length
 end

 let length min visible length
 let length add length control
 let r slice_l buffer length

 if gt control 0
  ret concat r escape "[0m"

 ret r
end