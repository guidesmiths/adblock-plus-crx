#!/bin/bash
set -e

if [ ! -f 'package.json' ]; then
    echo "Error cannot find package.json"
    exit 1
fi

VERSION=$(node -e 'process.stdout.write(require(process.cwd() + "/package.json")["adblock-plus-crx"].version)')

bash << HERE
    cd bin
    rm *
    curl --fail --silent https://downloads.adblockplus.org/adblockpluschrome-$VERSION.crx -o Adblock-Plus_v$VERSION.crx
    unzip -q Adblock-Plus_v$VERSION.crx

    # Modifications go here...
    sed -i '' -e 's/defaults.suppress_first_run_page = false;/defaults.suppress_first_run_page = true;/' lib/adblockplus.js

    zip Adblock-Plus_v$VERSION.crx . -r -m -q
HERE


