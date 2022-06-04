import DEVS from "./devs"

const GROUP_COMPONENT = [
    {
        id: 1,
        name: "accordions",
        max_width_item: 450
    }, {
        id: 2,
        name: "alerts",
        max_width_item: 350
    }, {
        id: 3,
        name: "Avatars",
        max_width_item: 200
    }, {
        id: 4,
        name: "Badges",
        max_width_item: 200
    }, {
        id: 5,
        name: "Breadcrumbs",
        max_width_item: 350
    }, {
        id: 6,
        name: "Buttons",
        max_width_item: 200
    }, {
        id: 7,
        name: "Cards",
        max_width_item: 200
    },{
        id: 8,
        name: "List Groups",
        max_width_item: 200
    },  {
        id: 9,
        name: "Modals",
        max_width_item: 350
    }, {
        id: 10,
        name: "Navbars",
        max_width_item: 200
    }, {
        id: 11,
        name: "Navigations",
        max_width_item: 350
    }, {
        id: 12,
        name: "Popovers",
        max_width_item: 350
    }, {
        id: 13,
        name: "Steppers",
        max_width_item: 200
    }, {
        id: 14,
        name: "Tables",
        max_width_item: 350
    }, {
        id: 15,
        name: "Tabs",
        max_width_item: 200
    }, {
        id: 16,
        name: "Tags",
        max_width_item: 350
    }, {
        id: 17,
        name: "Timeline",
        max_width_item: 200
    }
]
const GROUP_TAGS = [
    ["HTML", "CSS"],
    ["HTML", "CSS", "JavaScript"]
]
const LIST_COMPONENTS = [
    {
        id: 1,
        name: "Accordion collapsed",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[0],
        author: DEVS[1]
    },
    {
        id: 2,
        name: "Alert info",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[1],
        author: DEVS[0]
    },
    {
        id: 3,
        name: "Alert toast",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[1],
        author: DEVS[0]
    },
    {
        id: 4,
        name: "Avatar circle",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[2],
        author: DEVS[0]
    },
    {
        id: 5,
        name: "Badge",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[3],
        author: DEVS[0]
    },
    {
        id: 6,
        name: "Badge point",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[3],
        author: DEVS[0]
    },
    {
        id: 7,
        name: "Breadcrumb",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[4],
        author: DEVS[0]
    },
    {
        id: 8,
        name: "Button solid",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[5],
        author: DEVS[1]
    },
    {
        id: 9,
        name: "Button outline",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[5],
        author: DEVS[1]
    },
    {
        id: 10,
        name: "Button ghost",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[5],
        author: DEVS[1]
    },
    {
        id: 11,
        name: "Button dropdown",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[5],
        author: DEVS[1]
    },
    {
        id: 12,
        name: "Card product",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[6],
        author: DEVS[1]
    },
    {
        id: 13,
        name: "Card service",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[6],
        author: DEVS[1]
    },
    {
        id: 14,
        name: "Card user",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[6],
        author: DEVS[1]
    },
    {
        id: 15,
        name: "Card box",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[6],
        author: DEVS[1]
    },
    {
        id: 16,
        name: "List articles",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[7],
        author: DEVS[0]
    },
    {
        id: 17,
        name: "List items",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[7],
        author: DEVS[0]
    },
    {
        id: 18,
        name: "Modal",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[8],
        author: DEVS[1]
    },
    {
        id: 19,
        name: "Navbar",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[9],
        author: DEVS[1]
    },
    {
        id: 20,
        name: "Navigation solid",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[10],
        author: DEVS[1]
    },
    {
        id: 21,
        name: "Navigation outline",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[10],
        author: DEVS[1]
    },
    {
        id: 22,
        name: "Navigation link",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[10],
        author: DEVS[1]
    },
    {
        id: 23,
        name: "Popover",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[11],
        author: DEVS[1]
    },
    {
        id: 24,
        name: "Stepper",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[12],
        author: DEVS[1]
    },
    {
        id: 25,
        name: "Table",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[13],
        author: DEVS[1]
    },
    {
        id: 26,
        name: "Tab horizontal",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[14],
        author: DEVS[1]
    },
    {
        id: 27,
        name: "Tab vertical",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[14],
        author: DEVS[1]
    },
    {
        id: 28,
        name: "Tag",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[15],
        author: DEVS[0]
    },
    {
        id: 29,
        name: "Timeline",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[16],
        author: DEVS[1]
    }
]

export {
    LIST_COMPONENTS,
    GROUP_COMPONENT
}