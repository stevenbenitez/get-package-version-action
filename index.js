const core = require('@actions/core');
const { resolve } = require('path');

const path = core.getInput('path');
const { version } = require(resolve(path, './package.json'));

if (version) {
    core.setOutput('version', version);
} else {
    core.setFailed('Unable to read version from package.json.');
}
