// Code Written by CodingVampyre 2021; Licensed under MIT

import { ICompassTestQuestion } from "./compass-test-question.interface";

/** Contains a full test with metadata and questions */
export interface ICompassTest {

	/** the name of a test, to be used as heading */
	name: string;

	/** a description which can provide further information about a test */
	description: string;

	/** 
	 * a list of questions that can be answered
	 * typically, answers should be [Disagree, Somehat disagree, unsure/neutral, somewhat agree, agree]
	 */
	questions: ICompassTestQuestion[];

	/** to render a test, each axis should hold a caption */
	labels: {
		xAxis: {
			low: string;
			high: string;
		},
		yAxis: {
			low: string;
			high: string;
		}
	};
}
