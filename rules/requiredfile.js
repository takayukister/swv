import { ValidationError } from '../error';

export const requiredfile = function ( formDataTree ) {
	const values = formDataTree.getAll( this.field );

	if ( 0 === values.length ) {
		throw new ValidationError( this );
	}
};
