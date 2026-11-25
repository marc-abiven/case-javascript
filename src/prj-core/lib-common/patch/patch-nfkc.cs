//Normalization Form Compatibility Composition
//removes double-width unicode characters

fn patch_nfkc x:str
 ret x.normalize "NFKC"
end
