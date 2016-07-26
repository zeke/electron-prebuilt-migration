require('dotenv').load()

const githubChangeRemoteFile = require('github-change-remote-file')

githubChangeRemoteFile({
  user: 'zeke',
  repo: 'standard-markdown',
  filename: 'package.json',
  transform: function (pkg) {
    pkg = JSON.parse(pkg)
    pkg.dependencies.standard = '100'
    return JSON.stringify(pkg, null, 2)
  },
  token: process.env.GITHUB_TOKEN,
  pr: {
    title: 'Testing automated PRs',
    body: 'This is a test. cc @zeke'
  }
}, function (err, res) {
  console.log(JSON.stringify(err, null, 2))
  console.log(JSON.stringify(res, null, 2))
})
