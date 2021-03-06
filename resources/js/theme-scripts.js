// All scripts to go inside this listener.
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("html").classList.add("no-focus-outline")
    /**
     * Listen to tab events to enable outlines only when needed.
     * (accessibility improvement)
     **/
    document.body.addEventListener("keyup", function(e) {
        if (e.which === 9) {
            /* tab */ document.documentElement.classList.remove(
                "no-focus-outline"
            )
        }
    })

    const fixedScrollEditor = () => {
        let interval = setInterval(() => {
            const summary = document.querySelector(".summary")

            // Wait till frame select is loaded to run these functions.
            if (summary) {
                const controller = new ScrollMagic.Controller({})
                const editorWrapper = document.querySelector(".wrapper")

                function summaryHeight() {
                    return summary.offsetHeight - 500
                }

                new ScrollMagic.Scene({
                    triggerElement: "#trigger",
                    offset: 200,
                    duration: summaryHeight,
                })
                    .setPin(editorWrapper)
                    .addTo(controller)

                clearInterval(interval)
            }
        }, 1000)
    }
    fixedScrollEditor()
})
