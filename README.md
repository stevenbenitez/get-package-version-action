# get-package-version-action

This action extracts the version number from the package.json of a JavaScript or
TypeScript application for use in subsequent workflow steps, such as zipping
your application up and uploading to AWS.

# Usage

See [action.yml](action.yml)

## Basic

```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-node@v2
    with:
      node-version: '12'
  # these next two steps install your npm packages and perform a build of your
  # app. you will likely need to adjust these to match your specific build process.
  - run: npm install
  - run: npm run build
  - name: Get Package Version
    id: get-package-version
    uses: stevenbenitez/get-package-version-action@v1
  # this step uses the extracted version number to produce a file named
  # your-app-name-<version>.tar.gz from your build folder. e.g., your-app-name-1.0.0.tar.gz
  - run: tar -zcvf your-app-name-${{ steps.get-package-version.outputs.version }}.tar.gz build
```


# License

The scripts and documentation in this project are released under the [MIT License](LICENSE).
