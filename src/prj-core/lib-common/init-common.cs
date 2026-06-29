fn init_common stm:obj
 let lf "\n"
 let cr "\r"
 let crlf concat cr lf
 let punct "!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~"
 let digit "0123456789"
 let lower "abcdefghijklmnopqrstuvwxyz"
 let upper to_upper lower
 let ushort_max mul 256 256
 let uint32_max mul 256 256 256 256
 let log_output null //for capture
 let log_secret null //for redact
 let log_volatile null //for volatile
 let kb 1024 //for byte_size
 let mb mul kb 1024
 let gb mul mb 1024
 let tb mul gb 1024
 let traces arr //for trace
 let mabynogy "mabynogy" //itself
 let state obj lf cr crlf punct digit lower upper ushort_max uint32_max log_output log_secret log_volatile kb mb gb tb traces mabynogy

 stm_state stm state
end