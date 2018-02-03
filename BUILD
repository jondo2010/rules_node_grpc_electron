load("@org_pubref_rules_node//node:rules.bzl", "node_module", "node_binary")

node_module(
  name = "test_mod",
  version = "0.0.1",
  description = "Electron Test Module",
  main = "main.js",
  srcs = [
    "renderer.js",
    "index.html",
  ],
  deps = [
      "@yarn_modules//:grpc",
      "@yarn_modules//:electron",
  ]
)

node_binary(
    name = "test_bin",
    #entrypoint = "@yarn_modules//:electron",
    #executable = "electron",
    main = "start_electron.js",
    deps = [ ":test_mod", ],
    #node_args = ["--expose-http2"],
    visibility = ["//visibility:public"],
)
