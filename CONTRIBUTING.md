# Contributing

## Release

To create a new release, run the following command:

```bash
grunt release
```
 
It will automatically:

- Build the release
- Commit to develop
- Merge the develop into the master
- Push a new git tag
- Build the release with jekyll (by GitHub)

You can also lint the code:

```bash
npm run lint
```