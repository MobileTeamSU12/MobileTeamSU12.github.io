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
        width: 400,
        height: 400,
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

function updateInstallFullLinkAndQRCode(link, ...elementsLink) {
    let linkDownload = formatLink(link)
    elementsLink.forEach((val, index) => {
        val.href = linkDownload
        val.href = linkDownload
    })
    // genrate qrcode
    var qrcode = document.getElementById("qrcode")
    let qrcodeFactory = new QRCode(qrcode, {
        width: 400,
        height: 400,
        useSVG: true
    });
  
    qrcodeFactory.makeCode(linkDownload)
    console.log(linkDownload);

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
}

function setImageToSVG(img, xml) {
    img.src = "data:image/svg+xml;charset=utf-8," + xml;
}

function generateQRcode(qrcodeText, frameName = 'Android', imageFormat = "SVG") {
    let option = {
        image_format: imageFormat,
        image_width: 500,
        background_color: "#ffffff",
        foreground_color: "#000000",
        frame_color: "#000000",
        frame_name: "qrcg-scan-me-bottom-frame",
        frame_text: frameName,
        frame_text_color: "#FFFFFF",
        frame_text_alignment: "center",
        frame_text_font: "noto-sans",
        frame_icon_name: "",
        marker_left_template: "version17",
        marker_left_inner_color: "#000000",
        marker_left_outer_color: "#000000",
        marker_right_template: "version17",
        marker_right_inner_color: "#000000",
        marker_right_outer_color: "#000000",
        marker_bottom_template: "version17",
        marker_bottom_inner_color: "#000000",
        marker_bottom_outer_color: "#000000",
        qr_code_logo: "",
        download: 1,
        error_correction: "",
        qr_code_text: qrcodeText
    }
    let url = 'https://api.qr-code-generator.com/v1/create?access-token=uwyOdNplQ3RZZWLAizkz3515jN7brxSZ8HtuR9pR153SQSYbrkW6Vvbg5KYgduaw';
    fetch(url, {
        mode: 'no-cors',
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(option)
    }).then(async res => {
        let svg = await res.text();
        console.log("Request complete! response:", svg);
        let img = qrcode.getElementsByTagName("img")[0]
        setImageToSVG(img, svg)
    });
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
