var v_lib_resources_manifest = function(v_libRegData) {
	C$common$registerLibraryFunction('resources', v_libRegData, "getResourceData", 0);
	C$common$registerLibraryFunction('resources', v_libRegData, "readText", 1);
};


var v_lib_resources_function_getResourceData = function(v_args) {
	var v_p = C$common$programData;
	var v_output = v_buildList(v_p[27][2]);
	v_p[27][2] = null;
	return v_output;
};


var v_lib_resources_function_readText = function(v_args) {
	var v_string1 = C$common$readResourceText(v_args[0][1]);
	return v_buildString(v_string1);
};


C$common$scrapeLibFuncNames('resources');
