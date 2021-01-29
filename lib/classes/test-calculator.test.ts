import { ICompassTest } from "../types/compass-test.interface";
import { TestCalculator } from '../classes/test-calculator.class';

describe('tests', () => {

    test('should calculate primitive test results correctly', () => {

        const results = TestCalculator.CalculateTestResults([
            {
                answer: 1,
                weights: [1, 0],
            }
        ])

        expect(results).toStrictEqual([1, 0]);
    });

});
