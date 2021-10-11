export const highLevelDependencies = {
  name: "puppeteer",
  version: "1.0.0",
  dependencies: [
    {
      name: "debug",
      version: "^2.6.8",
    },
    {
      name: "extract-zip",
      version: "^1.6.5",
    },
    {
      name: "https-proxy-agent",
      version: "^2.1.0",
    },
    {
      name: "mime",
      version: "^1.3.4",
    },
    {
      name: "progress",
      version: "^2.0.0",
    },
    {
      name: "proxy-from-env",
      version: "^1.0.0",
    },
    {
      name: "rimraf",
      version: "^2.6.1",
    },
    {
      name: "ws",
      version: "^3.0.0",
    },
  ],
};
export const deepDependencies = {
  name: "runitwhenimdead",
  version: "1.0.0",
  dependencies: [
    {
      name: "botdelivejs",
      version: "^1.0.7",
      dependencies: [
        {
          name: "request",
          version: "^2.88.0",
          dependencies: [
            {
              name: "aws-sign2",
              version: "~0.7.0",
              dependencies: "No more dependencies",
            },
            {
              name: "aws4",
              version: "^1.8.0",
              dependencies: "No more dependencies",
            },
            {
              name: "caseless",
              version: "~0.12.0",
              dependencies: "No more dependencies",
            },
            {
              name: "combined-stream",
              version: "~1.0.6",
              dependencies: "No more dependencies",
            },
            {
              name: "extend",
              version: "~3.0.2",
              dependencies: "No more dependencies",
            },
            {
              name: "forever-agent",
              version: "~0.6.1",
              dependencies: "No more dependencies",
            },
            {
              name: "form-data",
              version: "~2.3.2",
              dependencies: "No more dependencies",
            },
            {
              name: "har-validator",
              version: "~5.1.0",
              dependencies: "No more dependencies",
            },
            {
              name: "http-signature",
              version: "~1.2.0",
              dependencies: "No more dependencies",
            },
            {
              name: "is-typedarray",
              version: "~1.0.0",
              dependencies: "No more dependencies",
            },
            {
              name: "isstream",
              version: "~0.1.2",
              dependencies: "No more dependencies",
            },
            {
              name: "json-stringify-safe",
              version: "~5.0.1",
              dependencies: "No more dependencies",
            },
            {
              name: "mime-types",
              version: "~2.1.19",
              dependencies: "No more dependencies",
            },
            {
              name: "oauth-sign",
              version: "~0.9.0",
              dependencies: "No more dependencies",
            },
            {
              name: "performance-now",
              version: "^2.1.0",
              dependencies: [],
            },
            {
              name: "qs",
              version: "~6.5.2",
              dependencies: "No more dependencies",
            },
            {
              name: "safe-buffer",
              version: "^5.1.2",
              dependencies: "No more dependencies",
            },
            {
              name: "tough-cookie",
              version: "~2.4.3",
              dependencies: "No more dependencies",
            },
            {
              name: "tunnel-agent",
              version: "^0.6.0",
              dependencies: [
                {
                  name: "safe-buffer",
                  version: "^5.0.1",
                  dependencies: "No more dependencies",
                },
              ],
            },
            {
              name: "uuid",
              version: "^3.3.2",
              dependencies: "No more dependencies",
            },
          ],
        },
      ],
    },
    {
      name: "puppeteer",
      version: "^1.9.0",
      dependencies: [
        {
          name: "debug",
          version: "^3.1.0",
          dependencies: [
            {
              name: "ms",
              version: "2.0.0",
              dependencies: "No more dependencies",
            },
          ],
        },
        {
          name: "extract-zip",
          version: "^1.6.6",
          dependencies: [
            {
              name: "concat-stream",
              version: "1.6.0",
              dependencies: [
                {
                  name: "inherits",
                  version: "^2.0.3",
                  dependencies: "No more dependencies",
                },
                {
                  name: "typedarray",
                  version: "^0.0.6",
                  dependencies: "No more dependencies",
                },
                {
                  name: "readable-stream",
                  version: "^2.2.2",
                  dependencies: [
                    {
                      name: "buffer-shims",
                      version: "^1.0.0",
                      dependencies: "No more dependencies",
                    },
                    {
                      name: "core-util-is",
                      version: "~1.0.0",
                      dependencies: "No more dependencies",
                    },
                    {
                      name: "isarray",
                      version: "~1.0.0",
                      dependencies: "No more dependencies",
                    },
                    {
                      name: "inherits",
                      version: "~2.0.1",
                      dependencies: "No more dependencies",
                    },
                    {
                      name: "process-nextick-args",
                      version: "~1.0.6",
                      dependencies: "No more dependencies",
                    },
                    {
                      name: "string_decoder",
                      version: "~0.10.x",
                      dependencies: "No more dependencies",
                    },
                    {
                      name: "util-deprecate",
                      version: "~1.0.1",
                      dependencies: "No more dependencies",
                    },
                  ],
                },
              ],
            },
            {
              name: "debug",
              version: "2.6.9",
              dependencies: [
                {
                  name: "ms",
                  version: "2.0.0",
                  dependencies: "No more dependencies",
                },
              ],
            },
            {
              name: "mkdirp",
              version: "0.5.0",
              dependencies: [
                {
                  name: "minimist",
                  version: "0.0.8",
                  dependencies: "No more dependencies",
                },
              ],
            },
            {
              name: "yauzl",
              version: "2.4.1",
              dependencies: [
                {
                  name: "fd-slicer",
                  version: "~1.0.1",
                  dependencies: "No more dependencies",
                },
              ],
            },
          ],
        },
        {
          name: "https-proxy-agent",
          version: "^2.2.1",
          dependencies: [
            {
              name: "agent-base",
              version: "^4.1.0",
              dependencies: [
                {
                  name: "es6-promisify",
                  version: "^5.0.0",
                  dependencies: [
                    {
                      name: "es6-promise",
                      version: "^4.0.3",
                      dependencies: "No more dependencies",
                    },
                  ],
                },
              ],
            },
            {
              name: "debug",
              version: "^3.1.0",
              dependencies: [
                {
                  name: "ms",
                  version: "2.0.0",
                  dependencies: "No more dependencies",
                },
              ],
            },
          ],
        },
        {
          name: "mime",
          version: "^2.0.3",
          dependencies: [],
        },
        {
          name: "progress",
          version: "^2.0.0",
          dependencies: [],
        },
        {
          name: "proxy-from-env",
          version: "^1.0.0",
          dependencies: "No more dependencies",
        },
        {
          name: "rimraf",
          version: "^2.6.1",
          dependencies: [
            {
              name: "glob",
              version: "^7.0.5",
              dependencies: [
                {
                  name: "fs.realpath",
                  version: "^1.0.0",
                  dependencies: [],
                },
                {
                  name: "inflight",
                  version: "^1.0.4",
                  dependencies: [
                    {
                      name: "once",
                      version: "^1.3.0",
                      dependencies: [],
                    },
                    {
                      name: "wrappy",
                      version: "1",
                      dependencies: "No more dependencies",
                    },
                  ],
                },
                {
                  name: "inherits",
                  version: "2",
                  dependencies: "No more dependencies",
                },
                {
                  name: "minimatch",
                  version: "^3.0.2",
                  dependencies: [
                    {
                      name: "brace-expansion",
                      version: "^1.0.0",
                      dependencies: [
                        {
                          name: "balanced-match",
                          version: "^0.2.0",
                          dependencies: [],
                        },
                        {
                          name: "concat-map",
                          version: "0.0.0",
                          dependencies: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "once",
                  version: "^1.3.0",
                  dependencies: [],
                },
                {
                  name: "path-is-absolute",
                  version: "^1.0.0",
                  dependencies: "No more dependencies",
                },
              ],
            },
          ],
        },
        {
          name: "ws",
          version: "^5.1.1",
          dependencies: [
            {
              name: "async-limiter",
              version: "~1.0.0",
              dependencies: "No more dependencies",
            },
          ],
        },
      ],
    },
  ],
};
