export const genLink = str => {
	if ( typeof str !== 'string' ) return ""
	str = str.split( " " ).join( "-" )
	return str.toLocaleLowerCase().replace( /&/, "and" )
}
