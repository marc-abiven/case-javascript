fn debug_file x:etc
 let fs require "fs"
 let args clone x
 let s stringify args:etc
 let s concat s "\n"

 fs.appendFileSync "debug.txt" s
end
