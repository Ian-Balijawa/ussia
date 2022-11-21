export const genLink = str => {

	if ( typeof str !== 'string' ) return ""
	str = str.split( " " ).join( "-" )
	console.log( "--->", str.lastIndexOf( "/" ) )
	return str.toLocaleLowerCase().replace( /&/, "and" )
}
