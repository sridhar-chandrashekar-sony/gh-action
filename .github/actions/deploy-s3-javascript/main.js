const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run(){
  // 1) Get Some input values
  const storageAccountName = core.getInput('storageAccountName', {required: true});
  const containerName = core.getInput('containerName', {required: true});
  const distFolder = core.getInput('dist-folder', {required: true});

  // 2) Upload files
  // Use SDK
  // use exec use cli aws/azure
  // azcopy sync '<local-directory-path>' 'https://<storage-account-name>.blob.core.windows.net/<container-name>' --recursive

    // const s3Uri = `s3://${bucket}`
    // exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`); 


    const uri = `https://${storageAccountName}.blob.core.windows.net/${containerName}`
    exec.exec(`azcopy sync ${distFolder} ${uri} --recursive`)

   core.notice('Hello from my custom JavaScript action!');
}

run();