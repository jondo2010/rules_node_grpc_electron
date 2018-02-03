workspace(name="rules_node_grpc_electron")

git_repository(
    name = "org_pubref_rules_node",
    remote = "https://github.com/pubref/rules_node",
    commit = "277a65cebb86ef0a0895a7940e7b829c35a814e2",
)

load("@org_pubref_rules_node//node:rules.bzl", "node_repositories", "yarn_modules")

node_repositories(
    node_version="9.5.0",
    linux_sha256="76dd38bb5a16a610894353228ef020653f81209a2e509d38aee78ace4410599e",
    yarn_version="v1.3.2",
    yarn_sha256="6cfe82e530ef0837212f13e45c1565ba53f5199eec2527b85ecbcd88bf26821d",
)

yarn_modules(
    name = "yarn_modules",
    deps = {
        "electron": "1.8.2-beta.4",
        "grpc": "^1.8.4"
    }
)