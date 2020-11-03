let i = 0;

function clicked(event) {
    if ((i > 1 || i == 0) && $(event.target).parents(".output").length) return;
    if (i > 0 && $(event.target).parents(".input").length)

    {
        if (i == 1) return;
    }
    i++;
    if (i > 2) {

        document.querySelectorAll(".bg-light").forEach(element => {
            element.classList.remove("bg-light")
        });
        i = 1;
    }

    event.target.classList.add("bg-light");

}