document.addEventListener("DOMContentLoaded",
    function(event) {
        const input = document.querySelector("input");
        const radial = document.querySelector(".RadialProgress");
        input.addEventListener('change', updateValue);


        function updateValue(e) {
            $ajaxUtils
                .sendGetRequest("data/data.json",
                    function(res) {
                        if (e.target.value == 33) {
                            var header = res.description65.header;
                            var status = res.description65.statusProgress;
                            var description = res.description65.descriptionBlock;
                        } else if (e.target.value == 66) {
                            header = res.description85.header;
                            status = res.description85.statusProgress;
                            description = res.description85.descriptionBlock;
                        } else if (e.target.value == 99) {
                            header = res.description110.header;
                            status = res.description110.statusProgress;
                            description = res.description110.descriptionBlock;
                        } else {
                            header = res.description65.header;
                            status = res.description65.statusProgress;
                            description = res.description65.descriptionBlock;
                        }

                        document.querySelector("#content")
                            .innerHTML = "<div class='status-progres'>" + status + "</div>" + "<p class='header'>" + header + "</p>" + "<p class='description-block'>" + description + "</p>";
                    })
                // radial.textContent = e.target.value;
        }

    });