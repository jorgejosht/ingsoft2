var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var AutoSchema={
  marca:String,
  submarca:String,
  color:String,
  caballos:Number,
  modelo:Number,
  segmento:String
};



module.export=mongoose.model('Autos',AutoSchema);
