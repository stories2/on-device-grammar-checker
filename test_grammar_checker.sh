#!/bin/bash

text="Plz, fix my poor grammer"
lang="en-US"

curl --get \
    --data-urlencode "text=$text" \
    --data-urlencode "language=$lang" \
    'http://localhost:8010/v2/check' | jq -r > test_response.json