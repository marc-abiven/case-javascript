fn cpl_check_try cpl:obj nodes:arr
 //visit

 fn visit nodes:arr
  var seen_try false
  var seen_catch false
  var seen_finally false

  for nodes
   try
    let operator v.operator
    let children v.children

    //try

    if same operator "try"
     assign seen_try true
     assign seen_catch false
     assign seen_finally false
     visit children

     cont
    end

    //catch

    if same operator "catch"
     if seen_try
      if seen_catch
       stop "Duplicate catch for a try."

      assign seen_catch true
      visit children

      cont
     else
      stop "Unexpected catch without a try."
    end

    //finally

    if same operator "finally"
     if seen_try
      if seen_finally
       stop "Duplicate finally for a try."

      assign seen_finally true
      visit children

      cont
     else
      stop "Unexpected finally without a try."
    end

    //children

    visit children
   catch e
    //set the error context

    cpl_push_error cpl v

    throw e
   end
  end
 end

 //main

 visit nodes
end
