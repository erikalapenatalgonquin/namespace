var ERIKALAPENATALGONQUIN = {

        init: function () {

                let div = document.createElement("div");

                div.className = "box";
                div.textContent = "erikalapenatalgonquin";

                document.getElementById("boxes").appendChild(div);

                div.addEventListener("click", function () {
                    div.style.borderColor = "blue";
                    div.style.backgroundColor = "aqua";
                });

                div.addEventListener("mouseover", function () {
                            div.classList.toggle("highlight");
                            });

                        div.addEventListener("mouseout", function () {
                                div.classList.toggle("highlight");
                                    div.removeAttribute("style");
                                    });
                            }
                        };
                        
                        
    
