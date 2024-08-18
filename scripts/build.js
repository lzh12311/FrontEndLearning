#!/usr/bin/env node

/*
Usage: npm run build [component name...] [options] [lerna options]

  By default, only updated packages will be built.
  All lerna options will be forwarded onto lerna commands.

  Options:

    [component name...]       space separated list of package names to build
    -a, --all                 build all packages
*/

const { spawnSync } = require("child_process");
const path = require("path");

const arrayToGlob = require("./utils/arrayToGlob");
const getPackageNames = require("./getPackageNames.js");


getPackageNames(path.resolve('packages')).then(packageNames => {
  const scopeGlob = arrayToGlob(packageNames);
  spawnSync(
    "npx",
    [
      "lerna",
      "exec",
      "--scope",
      scopeGlob,
      "--",
      path.resolve("./scripts/build.sh"),
    ],
    {
      stdio: "inherit",
    }
  );
  spawnSync("npx", ["lerna", "run", "--scope", scopeGlob, "build"], {
    stdio: "inherit",
  });
})

