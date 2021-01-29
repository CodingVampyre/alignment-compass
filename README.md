# alignment-compass

## Description
Alignment-Compass-Tests are tests to create groups to align an individuals position into a larger frame.
Those compasses are models of more complex issues.
This library shall help creating individual tests in typescript.
I created this library out of a react compass test I was making.

## How To Install
1. Install using `npm i -s alignment-compass`

## How To Use
You need a frontend that takes an `ICompassTest` and renders a form, asking each question.
Each question should be answered by choosing between five answers:

* disagree (-1)
* somewhat disagree (-0.5)
* neutral/unsure (0)
* somewhat agree (0.5)
* agree (1)

To each of this answers, an `IAnsewreredAnswer` should be created:

```typescript
const answeres: IAnsweredAnswer[] = [
    {
        answer: 1,
        weights: [1, 0],
    },
    {
        answer: -0.5,
        weights: [0, 1],
    }
];
```
The `answer` Stores the value of the answer the user provided via the UI.
It should be a value between -1 (disagree) and 1 (agree).

The `weights` are used to determine which axes are influenced.
It is an array with [X-Axis-Weight, Y-Axis-Weight] format. 
Maximum value is calculated automatically when calculating the final result.

### Examples 
* `[1, 0]` moves the cursor 1 part in x-direction.
* `[0, 1]` moves the cursor 1 part in y-direction.
* `[-1, -0.5]` moves the cursor 1 part in negative x-direction and 0.5 parts in negative y direction.

## Example Usage
```typescript
import { ICompassTest, TestCalculator } from 'alignment-compass';

// This is the Test that will be rendered by your frontend
const test: ICompassTest = {
    name: 'Demo Test',
    description: 'A Test just to demonstrate the Result Algorithm',
    labels: {
        xAxis: {
            low: 'Low X Tier',
            high: 'High X Tier',
        },
        yAxis: {
            low: 'Low Y Tier',
            high: 'High Y Tier',
        },
    },
    questions: [
        {
            text: 'Do you want to score high on X tier?',
            weights: [1, 0],
        },
        {
            text: 'Do you want to score high on Y tier?',
            weights: [0, 1],
        }
    ]
}

// This part is technology specific and should be written by you
// It can be a react/angular component or an API.
const answers: IAnsweredAnswer[] = MyUi.createTestUI(test).startTest();

// Now, you can use there answeres to calculate the final result.
const result: ICompassTestResult = TestCalculator.CalculateTestResults(answers);

// Print Results
console.log(`Your result is X=${result[0]} and Y=${result[1]}`);
```
