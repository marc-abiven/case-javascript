fn init x:etc
 assign global.source_files get_source_files
 assign global.source_code get_source_code

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

 let sloc split source_code
 let sloc sloc.length

 //word

 let word count_words source_code

 //token

 let token count_tokens source_code

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

 let file source_files.length

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

 //longest line

 let longest_line count_longest_line

 //longest name

 let longest_program_name count_longest_program_name
 let longest_app_name count_longest_app_name

 //oldest file

 let oldest_file find_oldest_file

 //render

 let o obj cost age day sloc word token size app lib test file symbol callable fn gn _let _var _for forin fornum longest_line longest_program_name longest_app_name oldest_file
 //~ let o obj
  //~ cost
  //~ age
  //~ day
  //~ sloc
  //~ word
  //~ token
  //~ size
  //~ app
  //~ lib
  //~ test
  //~ file
  //~ symbol
  //~ callable
  //~ fn
  //~ gn
  //~ _let
  //~ _var
  //~ _for
  //~ forin
  //~ fornum
  //~ longest_line
  //~ longest_program_name
  //~ longest_app_name
  //~ oldest_file
 //~ end

 let t to_tbl o

 tbl_index t
 tbl_pad_l t "key"

 let t tbl_render t

 log t
end