function formatLink(path) {
    var date = new Date();
    return `${path}?v=${date.getTime()}`
}

function updateInstallLinkAndQRCode(pathFile, ...elementsLink) {
    let linkDownload = formatLink(pathFile)
    elementsLink.forEach((val, index) => {
        val.href = linkDownload
        val.href = linkDownload
    })
    // genrate qrcode
    var qrcode = document.getElementById("qrcode")
    let qrcodeFactory = new QRCode(qrcode, {
        width : 400,
        height : 400,
        useSVG: true
    });
     console.log('domain' + window.location.origin);
    let linkQr = `${window.location.origin}${linkDownload}`
    qrcodeFactory.makeCode(linkQr)
    console.log(linkQr);

    // reset width height by inherit
    let img = qrcode.getElementsByTagName("img")[0]
    img.style.width = 'inherit'
    img.style.height = 'inherit'
    // console.log(img);
}

function updateDownloadLink(pathFile, ...elementsLink) {
    let linkDownload = formatLink(pathFile)
    elementsLink.forEach((val, index) => {
        val.href = linkDownload
        val.href = linkDownload
    })
    console.log('update link success' + linkDownload);
    // let link = localStorage.getItem("link");
    // if(link){
    //     console.log("cache link: " + link);
    // }else{
    //     console.log("save cache link " + linkDownload);
    //     localStorage.setItem("link", linkDownload);
    // } 
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
