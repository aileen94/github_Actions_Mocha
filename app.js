let convert = {};

convert.multiply=function(a,b){
if(!Number.isInteger(a) || !Number.isInteger(b)){
        return undefined;
        }
return a*b;
}
    let dummy = function dummy(){
		return "Hello";
	}

convert.add=function(a,b,c,d){
if(!Number.isInteger(a) || !Number.isInteger(b)|| !Number.isInteger(c)|| !Number.isInteger(d)){
        return undefined;
        }
return convert.multiply(a,b) +c+d;
}

module.exports = convert;
