const headerLinkText = document.querySelectorAll(".header-link");
const button = document.querySelectorAll(".button");
const resumeButton = document.querySelectorAll(".resume-button");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

headerLinkText.forEach((text) => {
    
    text.addEventListener("mouseover", random => {
        let iterations = 0;

        const interval = setInterval(() => {
            random.target.innerText = random.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iterations) {
                    return random.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 36)]
            })
            .join("");

            if(iterations >= random.target.dataset.value.length){
                clearInterval(interval);
            }
            iterations += 1 / 3;
        }, 30)

    });

})


button.forEach((text) => {
    
    text.addEventListener("mouseover", random => {
        let iterations = 0;

        const interval = setInterval(() => {
            random.target.innerText = random.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iterations) {
                    return random.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 36)]
            })
            .join("");

            if(iterations >= random.target.dataset.value.length){
                clearInterval(interval);
            }
            iterations += 1.5;
        }, 30)

    });

})

resumeButton.forEach((text) => {
    
    text.addEventListener("mouseover", random => {
        let iterations = 0;

        const interval = setInterval(() => {
            random.target.innerText = random.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iterations) {
                    return random.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 36)]
            })
            .join("");

            if(iterations >= random.target.dataset.value.length){
                clearInterval(interval);
            }
            iterations += 1 / 2;
        }, 30)

    });

})
