

function updateStyleImageQRCode(pathFile) {
    // height: 400pt; width: 400pt;
    // update link download
    let linkDownload = formatLink(pathFile)
    var a = document.getElementById('link_download');
    var btn = document.getElementById('link_download_btn');
    a.href = linkDownload
    btn.href = linkDownload
    var qrcode = document.getElementById("qrcode")
    let qrcodeFactory = new QRCode(qrcode, {
        width : 400,
        height : 400,
        useSVG: true
    });
    // let linkQr = `${window.location.hostname}/${linkDownload}`
     console.log('domain' + window.location.hostname);
    let linkQr = `https://mobileteamsu12.github.io${linkDownload}`
    qrcodeFactory.makeCode(linkQr)
    console.log(linkQr);

    // reset width height by inherit
    let img = qrcode.getElementsByTagName("img")[0]
    img.style.width = 'inherit'
    img.style.height = 'inherit'
    // console.log(img);
}

function formatLink(path) {
    var date = new Date();
    return `${path}?v=${date.getTime()}`
}


// <script type="module"></script>
// import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

// function getLastCommit() {
//     const reps = 'MobileTeamSU12.github.io';
//     const owner = 'MobileTeamSU12';
//     const branch = 'main';
//     const octokit = new Octokit({});
//     const response = await octokit.request("GET /repos/{owner}/{reps}/commits/{branch}", {
//         reps: reps,
//         owner: owner,
//         branch: branch,
//     });
//     console.log(response);
//     if (response.status) {
//         const commitsInfo = response.data;
//         console.log(commitsInfo.sha);
//     }
// }
