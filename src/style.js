const serviceData = [
    {
        icon: "fa-hands-clapping",
        title: "Home Cleaning",
        description: "Housekeeping is responsible for minor security in hotel eco-system for food and cleaning.",
    },
    {
        icon: "fa-hands-clapping",
        title: "Windows Cleaning",
        description: "Housekeeping is responsible for minor security in hotel eco-system for food and cleaning.",
    },
    {
        icon: "fa-hands-clapping",
        title: "Office Cleaning",
        description: "Housekeeping is responsible for minor security in hotel eco-system for food and cleaning.",
    },
    {
        icon: "fa-hands-clapping",
        title: "Type2",
        description: "Housekeeping is responsible for minor security in hotel eco-system for food and cleaning.",
    },
    {
        icon: "fa-hands-clapping",
        title: "Type2",
        description: "Housekeeping is responsible for minor security in hotel eco-system for food and cleaning.",
    },
    {
        icon: "fa-hands-clapping",
        title: "Type2",
        description: "Housekeeping is responsible for minor security in hotel eco-system for food and cleaning.",
    }
];

const itemsPerSet = 3;
let currentSet = 0;

const serviceContainer = document.getElementById("service-container");

const buttonsContainer = document.getElementById("buttons-container");

function renderServiceSet(setIndex) {
    serviceContainer.innerHTML = "";
    const startIndex = setIndex * itemsPerSet;
    const endIndex = startIndex + itemsPerSet;

    const currentItems = serviceData.slice(startIndex, endIndex);

    currentItems.forEach((item) => {
        const serviceCard = document.createElement("div");
        serviceCard.classList.add("service-card", "bg-blue-400", "text-white", "text-start", "bg-opacity-85", "pt-10", "px-[2rem]", "pb-10" );
        serviceCard.innerHTML = `
            <i class="fa ${item.icon} text-7xl"></i>
            <h1 class="text-2xl font-bold py-1">${item.title}</h1>
            <h2 class="text-[1.1rem] font-semibold pb-5">${item.description}</h2>
        `;
        serviceContainer.appendChild(serviceCard);
    });
}

function createButtons() {
    buttonsContainer.innerHTML = "";
    const totalSets = Math.ceil(serviceData.length / itemsPerSet);

    for (let i = 0; i < totalSets; i++) {
        const button = document.createElement("button");
        button.classList.add("text-white", "hover:text-blue-700");
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-circle");
        
        if (i === currentSet) {
            icon.classList.add("active");
        } else {
            icon.classList.add("disabled");
        }
        button.appendChild(icon);

        button.addEventListener("click", () => {
            const activeButton = buttonsContainer.querySelector(".active");
            if (activeButton) {
                activeButton.classList.remove("active");
                activeButton.classList.add("disabled");
            }
            currentSet = i;  
            icon.classList.remove("disabled");
            icon.classList.add("active");
            
            renderServiceSet(currentSet);
            updateActiveButton();
        });

        buttonsContainer.appendChild(button);
    }
}

function updateActiveButton() {
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button, index) => {
        button.classList.toggle("active", index === currentSet);
    });
}

function initCarousel() {
    renderServiceSet(currentSet);
    createButtons();
}

initCarousel();
