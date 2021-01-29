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

    test('should calculate a more complex test', () => {
        
        const results = TestCalculator.CalculateTestResults([
            {
                answer: 1,
                weights: [1, 0],
            },
            {
                answer: 0.5,
                weights: [0, 1],
            },
            {
                answer: -1,
                weights: [0.5, -1],
            },
            {
                answer: -0.5,
                weights: [-1, 1],
            }
        ]);

        expect(results).toStrictEqual([0.4, 0.3333333333333333]);

    });

});
