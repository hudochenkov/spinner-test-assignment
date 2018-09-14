# Spinner Test Assignment

See how it works: https://spinner-test-assignment-08b7bb.netlify.com/

## Requirements

When uploading files on https://wetransfer.com you see progress spinner. It grows and grows as it spins around, showing the percentage in the centre.

Recreate the spinner as a re-usable web component (using the ES2015 syntax) and include start and end buttons that enable or disable the spinning.

Use React.
Write tests.

## Implementations notes

* Ring and percentage always visible. Decided not to do different component for states, where “upload” isn't in a progress and has 0%, and when upload is finished. In real project, I would consulte with a designer what to do in these cases.
* Stop button resets progress. It could be a pause button (keep current progress state). Requirements weren't clear about this. Decided to make just a stop button, because this project is a demo and it's simpler. In real project, I would consulte with a designer what to do in this case.
* `<ProgressRing />` is a reusable component. It could be reused within the app. It's a presentational component and do only visualization of a progress depends on input props. It's not ready to distributed via npm, because it's not clear what to do with CSS to make it easy to use for other users.
* Made a fake progress data source with `setInterval`.
* Used Create React App to speed up development of this demo. Usually I like to have more control of tools I use.
* In Microsoft Edge and IE11 when progress at 0%, blue line isn't invisible. It renders as a dot. It's a [known bug](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9780637/). I see two solutions: ignore it, or don't apply blue line ends rounding, unless it's more than 0%. I choose the first option.

## Docs

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/next/packages/react-scripts/template/README.md).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
