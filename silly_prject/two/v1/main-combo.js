/**
 *gen by sb
 *combo files:

/home/tom/Dropbox/gits/silly_builder/silly_prject/two/v1/mods/modc.js
/home/tom/Dropbox/gits/silly_builder/silly_prject/two/v1/mods/modb.js
/home/tom/Dropbox/gits/silly_builder/silly_prject/two/v1/mods/moda.js
/home/tom/Dropbox/gits/silly_builder/silly_prject/two/v1/main.js

*/
KISSY.add("silly_prject/two/v1/mods/modc",function(){

},{
  requires:["silly_prject/three/mods/modc"]
});
;KISSY.add("silly_prject/two/v1/mods/modb",function(){

});
;KISSY.add("silly_prject/two/v1/mods/moda",function(){

},{
  requires:["silly_prject/two/v1/mods/modc"]
});
;KISSY.add("silly_prject/two/v1/main",function(){
  
},{
  requires:["silly_prject/two/v1/mods/moda","silly_prject/two/v1/mods/modb"]
});
