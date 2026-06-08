fn init x:etc
 //unzip

 let path_zip path_real "src/prj-aft/spa-transhumanistes/res/site.zip"

 dir_call config_tmp unzip path_zip

 //load

 let path_json path_concat config_tmp "site.json"
 let o json_load path_json
 let a1 o.pages
 let a1 head a1 50

 //dump a1

 //convert

 let s cson_encode a1

 log s

 let a2 cson_decode s

 //dump a2

 //compare

 let b cmp a1 a2

 check same b 0
end