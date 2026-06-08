fn init x:etc
 //source files
 
 fn source_files
  let r arr
  
  for dir_load "src"
   if not is_file v
    cont
    
   let ext path_ext v
   
   if same ext "cs"
    push r v
  end
  
  ret r
 end
 
 //source code

 fn source_code 
  let lines arr
  
  for source_files
   let a file_load v
   let a uncomment a
   let a split a
   let a reject a is_blank
   
   append lines a
  end
  
  ret join lines
 end
 
 let source source_code
 
 //compute cost
 
 fn compute_cost
  let s os_execute "sloccount" "src"
  
  forof split s
   if not contain v "$"
    cont
    
   let s split v "$"
   let s back s
   let s trim s
   let s replace s "," ""
   
   ret to_uint s
  end
  
  stop
 end
 
 //count app
 
 fn count_app
  var r 0
  
  for dir_load "src" true
   if not is_dir v
    cont
    
   let base path_base v
   
   if match_l base "app-"
    assign r inc r
  end
  
  ret r
 end

 //count lib
 
 fn count_lib
  var r 0
  
  for dir_load "src" true
   if not is_dir v
    cont
    
   let base path_base v
   
   if match_l base "lib-"
    assign r inc r
  end
  
  ret r
 end

 //count test
 
 fn count_test
  var r 0
  
  for dir_load "src" true
   if not is_dir v
    cont
    
   let base path_base v
   
   if match_l base "app-test-"
    assign r inc r
  end
  
  ret r
 end
 
 //count word
 
 fn count_word
  var r 0
  
  for split source
   let a split v " "
   let a reject a is_empty
   
   assign r add r a.length
  end
  
  ret r
 end

 //count fn
 
 fn count_fn
  var r 0
  
  for split source
   let s trim v
   
   if match_l s "fn "   
    assign r inc r
  end
  
  ret r
 end
 
 //count gn
 
 fn count_gn
  var r 0
  
  for split source
   let s trim v
   
   if match_l s "gn "
    assign r inc r
  end
  
  ret r
 end

 //count let
 
 fn count_let
  var r 0
  
  for split source
   let s trim v
   
   if match_l s "let "
    assign r inc r
  end
  
  ret r
 end

 //count var
 
 fn count_var
  var r 0
  
  for split source
   let s trim v
   
   if match_l s "var "
    assign r inc r
  end
  
  ret r
 end

 //count size
 
 fn count_size
  var r 0
  
  for split source
   let s trim v
   
   assign r add r s.length
  end
  
  ret r
 end
 
 //main

 //cost
 
 let cost compute_cost
 let cost div cost 1000
 let cost trunc cost
 let cost concat cost "K$"
 
 dump cost
 
 //app
 
 let app count_app
 
 dump app

 //lib
 
 let lib count_lib
 
 dump lib

 //test
 
 let test count_test
 
 dump test
 
 //file
 
 let file source_files
 let file file.length
 
 dump file
 
 //line
 
 let line split source
 let line line.length
 
 dump line
 
 //word
 
 let word count_word
 
 dump word
 
 //token
 
 let token div word 4
 let token trunc token

 dump token
 
 //callable
 
 let fn count_fn
 let gn count_gn
 let callable add fn gn
 
 //callable
  
 dump callable

 //fn
  
 dump fn
 
 //gn
  
 dump gn
 
 //let
 
 let _let count_let
 
 dump _let

 //var
 
 let _var count_var
 
 dump _var
 
 //size
 
 let size count_size
 let size byte_size size
 
 dump size
end
