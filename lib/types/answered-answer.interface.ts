// Code Written by CodingVampyre 2021; Licensed under MIT

/** holds information about a selected answer */
export interface IAnsweredAnswer {

	/** since answers are single choice, the selected answer can be provided here */
	answer?: number;
	
	/** this factor normally is [1,1] and can influence how much a result moves the quiztaker on each axis */
	weights: [number?, number?];
}