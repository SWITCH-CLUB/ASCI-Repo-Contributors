const getData = async () => {
    const api = "https://api.github.com/repos/SWITCH-CLUB/ASCI-2021/contributors";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData);
        var html = '<div class="row">';
        for (i = 0; i < realData.length; i++) {
            if (i % 3 == 0 && i != 0) {
                html += '</div>'
                html += '<div class="row">'
            }
            html += `<div class="col-md-4 col-12">`;
            html += `<div class=" card  mt-5 card_red text-center">
                                <div class="title">
                                <img src="${realData[i].avatar_url}" alt="" id="imgbg" >
                                <div class="mt-3">
                                <h4>${realData[i].login}</h4>
                                <p class="commit">Total Commits-${realData[i].contributions}</>
                                <a href="${realData[i].html_url}">Github</a>
                                </div>
                            </div></div></div>`
        }

        $('#rowdy').append(html);
    } catch (error) {
        console.log(error);
    }
};


getData();

