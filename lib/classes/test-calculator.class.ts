// Code Written by CodingVampyre 2021; Licensed under MIT

import { IAnsweredAnswer } from "../types/answered-answer.interface";

/** Used to calculate test results */
export class TestCalculator {

	/**
	 * calculates a coordinate given a list of test answers
	 * @param answers a list of answered questions
	 */
	public static CalculateTestResults(answers: IAnsweredAnswer[]) {
		// Calculate Max value on each axis
		let max = [0, 0];
		for (const answer of answers) {
			if (answer.weights[0] !== undefined && answer.weights[1] !== undefined) {
				max[0] += Math.abs(answer.weights[0]);
				max[1] += Math.abs(answer.weights[1]);
			}
		}

		// Calculate answer by creating a vector of answer * weights
		const weightedAnswers = answers.map(answer => {
			if (answer.answer !== undefined && answer.weights[0] !== undefined && answer.weights[1] !== undefined) {
				return [
					answer.answer * answer.weights[0],
					answer.answer * answer.weights[1],
				]
			}
		});

		// add together all answers
		let finalResult = [0, 0];
		for (const weightedAnswer of weightedAnswers) {
			if (weightedAnswer && weightedAnswer[0] !== undefined && finalResult[1] !== undefined) {
				finalResult[0] += weightedAnswer[0];
				finalResult[1] += weightedAnswer[1];
			}
		}

		// normalize using max value on each axis
		const normalizedResult: [number, number] = [
			TestCalculator.Normalize(finalResult[0], max[0]),
			TestCalculator.Normalize(finalResult[1], max[1]),
		];

		// set Result
		return normalizedResult;
	}

	/**
	 * takes a value and normalizes it in relation to provided max value
	 * @param value the value to be normalized
	 * @param max all values get normalized between 0 and this value
	 */
	private static Normalize(value: number, max: number): number {
		if (max === 0) return 0;
		return value / max;
	}

}