export const toFromEncode = (str1, str2) => {
    //pair will be stored like smaller_larger
    if(parseFloat(str2)> parseFloat(str1)){//assuming id has no special character of underscore
		return str1+"_"+str2;
	}
	return str2+"_"+str1;
}

export const toFromDecode =(str) =>{
    return str.split("_");//returns an array of to and from
}