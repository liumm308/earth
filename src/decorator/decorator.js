var decorator = {
	
	getClassName: function(target){
		let name = undefined;
		try {
			return target.name || "暂无名称";
		} catch (e){
			console.log(e);
		} 
	},
	log: function(target){
		target.printLogMethod = function(params){
			try {
				params = params || target.params;
				//do someing
				console.log(params, "测试");
			} catch (e){
				console.log(e);
			} 
		};
	}
};

module.exports = decorator;
