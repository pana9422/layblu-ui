import DEVS from "./devs"

const GROUP_TAGS = [
    ["HTML", "CSS"],
    ["HTML", "CSS", "JS"]
]
export const GROUP_COMPONENT = [
    {
        name: "Accordions",
        slug: "accordions",
        max_width_item: 350,
        min_height_item: 500
    },
    {
        name: "Alerts",
        slug: "alerts",
        max_width_item: 400,
        min_height_item: 300
    }, {
        name: "Avatars",
        slug: "avatars",
        max_width_item: 350,
        min_height_item: 300
    }, {
        name: "Badges",
        slug: "badges",
        max_width_item: 300,
        min_height_item: 300
    }, {
        name: "Breadcrumbs",
        slug: "breadcrumbs",
        max_width_item: 400,
        min_height_item: 300
    }, {
        name: "Buttons",
        slug: "buttons",
        max_width_item: 350,
        min_height_item: 350
    }, {
        name: "Cards",
        slug: "cards",
        max_width_item: 350,
        min_height_item: 650
    }, {
        name: "List Groups",
        slug: "list-groups",
        max_width_item: 350,
        min_height_item: 550
    }, {
        name: "Modals",
        slug: "modals",
        max_width_item: 450,
        min_height_item: 450
    }, {
        name: "Navbars",
        slug: "navbars",
        max_width_item: 700,
        min_height_item: 600
    }, {
        name: "Navigations",
        slug: "navigations",
        max_width_item: 350,
        min_height_item: 350
    }, {
        name: "Popovers",
        slug: "popovers",
        max_width_item: 350,
        min_height_item: 350
    }, {
        name: "Progress",
        slug: "progress",
        max_width_item: 350,
        min_height_item: 250
    }, {
        name: "Selects",
        slug: "selects",
        max_width_item: 350,
        min_height_item: 450
    }, {
        name: "Sliders",
        slug: "sliders",
        max_width_item: 350,
        min_height_item: 300
    }, {
        name: "Steppers",
        slug: "steppers",
        max_width_item: 450,
        min_height_item: 300
    }, {
        name: "Radio and Checkbox",
        slug: "radio-and-checkbox",
        max_width_item: 350,
        min_height_item: 600
    }, {
        name: "Tables",
        slug: "tables",
        max_width_item: 350,
        min_height_item: 600
    }, {
        name: "Tabs",
        slug: "tabs",
        max_width_item: 350,
        min_height_item: 600
    }, {
        name: "Tags",
        slug: "tags",
        max_width_item: 350,
        min_height_item: 600
    }, {
        name: "Timelines",
        slug: "timelines",
        max_width_item: 350,
        min_height_item: 600
    },
]
export const LIST_COMPONENTS = [
    {
        id: 1,
        name: "Accordion collapsed",
        path: "accordion-collapsed-1",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[0],
        author: DEVS[1]
    },
    {
        id: 2,
        name: "Alert info",
        path: "alert-info-2",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[1],
        author: DEVS[0]
    },
    {
        id: 3,
        name: "Avatar circle",
        path: "avatar-circle-3",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[2],
        author: DEVS[0]
    },
    {
        id: 4,
        name: "Badge",
        path: "badge-4",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[3],
        author: DEVS[0]
    },
    {
        id: 5,
        name: "Breadcrumb",
        path: "breadcrumb-5",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[4],
        author: DEVS[0]
    },
    {
        id: 6,
        name: "Button",
        path: "button-6",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[5],
        author: DEVS[1]
    },
    {
        id: 7,
        name: "Button dropdown",
        path: "button-dropdown-7",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[5],
        author: DEVS[1]
    },
    {
        id: 8,
        name: "Card product",
        path: "card-product-8",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[6],
        author: DEVS[1]
    },
    {
        id: 9,
        name: "Card service",
        path: "card-service-9",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[6],
        author: DEVS[1]
    },
    {
        id: 10,
        name: "Card user",
        path: "card-user-10",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[6],
        author: DEVS[1]
    },
    {
        id: 11,
        name: "Card box",
        path: "card-box-11",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[6],
        author: DEVS[1]
    },
    {
        id: 12,
        name: "List articles",
        path: "list-articles-12",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[7],
        author: DEVS[0]
    },
    {
        id: 13,
        name: "List items",
        path: "list-items-13",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[7],
        author: DEVS[0]
    },
    {
        id: 14,
        name: "Modal",
        path: "modal-14",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[8],
        author: DEVS[1]
    },
    {
        id: 15,
        name: "Navbar",
        path: "navbar-15",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[9],
        author: DEVS[0]
    },
    {
        id: 16,
        name: "Navigation",
        path: "navigation-16",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[10],
        author: DEVS[1]
    },
    {
        id: 17,
        name: "Popover",
        path: "popover-17",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[11],
        author: DEVS[1]
    },
    {
        id: 18,
        name: "Progress",
        path: "progress-18",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[12],
        author: DEVS[1]
    },
    {
        id: 19,
        name: "Select",
        path: "select-19",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[13],
        author: DEVS[1]
    },
    {
        id: 20,
        name: "Select Floating",
        path: "select-floating-20",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[13],
        author: DEVS[1]
    },
    {
        id: 21,
        name: "Slider",
        path: "slider-21",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[14],
        author: DEVS[1]
    },
    {
        id: 23,
        name: "Stepper",
        path: "stepper-23",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[15],
        author: DEVS[1]
    },
    {
        id: 24,
        name: "Table",
        path: "table-24",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[16],
        author: DEVS[1]
    },
    {
        id: 25,
        name: "Tab horizontal",
        path: "tab-horizontal-25",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[17],
        author: DEVS[1]
    },
    {
        id: 26,
        name: "Tab vertical",
        path: "tab-vertical-26",
        tags: GROUP_TAGS[1],
        group: GROUP_COMPONENT[17],
        author: DEVS[1]
    },
    {
        id: 27,
        name: "Tag",
        path: "tag-27",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[18],
        author: DEVS[0]
    },
    {
        id: 28,
        name: "Timeline",
        path: "timeline-28",
        tags: GROUP_TAGS[0],
        group: GROUP_COMPONENT[19],
        author: DEVS[1]
    }
]
