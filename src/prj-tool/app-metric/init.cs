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

 let files source_files

 //source code

 fn source_code
  let lines arr

  for files
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

 //compute age

 fn compute_age
  let low front files
  var low fs_modified low

  let high front files
  var high fs_modified high

  for files
   let n fs_modified v

   assign low min low n
   assign high max high n
  end

  ret sub high low
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

 //count longest line

 fn count_longest_line
  var r 0

  for split source
   let s trim v

   assign r max r s.length
  end

  ret r
 end

 //count symbol

 fn count_symbol
  let symbols arr

  for split source
   let a split v " "

   for filter a is_label
    let names arr

    if is_identifier v
     push names v
    elseif is_access v
     let a unwrap v

     append names a
    elseif is_tuple v
     let a unwrap v

     append names a
    else
     stop

    for names
     if contain symbols v
      cont

     push symbols v
    end
   end
  end

  ret symbols.length
 end

 //count keyword

 fn count_keyword keyword:str
  var r 0

  for split source
   let s trim v
   let begin concat keyword " "

   if match_l s begin
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

 let o obj

 //cost

 let cost compute_cost

 //age

 let age compute_age

 //day

 let day div age day
 let day div cost day
 let day trunc day
 let day concat day "$/day"

 let cost div cost 1000
 let cost trunc cost
 let cost concat cost "K$"

 let age time_delay age

 //sloc

 let sloc split source
 let sloc sloc.length

 //word

 let word count_word

 //token

 let token word
 let token div token 4
 let token trunc token

 //size

 let size count_size
 let size byte_size size

 //app

 let app count_app

 //lib

 let lib count_lib

 //test

 let test count_test

 //file

 let file files.length

 //longest line

 let longest_line count_longest_line

 //symbol

 let symbol count_symbol

 //callable

 let fn count_keyword "fn"
 let gn count_keyword "gn"
 let callable add fn gn

 //let

 let _let count_keyword "let"

 //var

 let _var count_keyword "var"

 //for

 let _for count_keyword "for"

 //forin

 let forin count_keyword "forin"

 //fornum

 let fornum count_keyword "fornum"

 //render

 let o obj cost age day sloc word token size app lib test file longest_line symbol callable fn gn _let _var _for forin fornum
 let t to_tbl o

 tbl_index t
 tbl_pad_l t "key"

 let t tbl_render t

 log t
end
