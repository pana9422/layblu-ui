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
    },{
        name: "List Groups",
        slug: "list-groups",
        max_width_item: 350,
        min_height_item: 550
    },  {
        name: "Modals",
        slug: "modals",
        max_width_item: 450,
        min_height_item: 450
    }, {
        name: "Navbars",
        slug: "navbars",
        max_width_item: 700,
        min_height_item: 600
    }
    //  {
    //     name: "Navigations",
    //     max_width_item: 350
    // }, {
    //     name: "Popovers",
    //     max_width_item: 350
    // }, {
    //     name: "Steppers",
    //     max_width_item: 350
    // }, {
    //     name: "Tables",
    //     max_width_item: 350
    // }, {
    //     name: "Tabs",
    //     max_width_item:350
    // }, {
    //     name: "Tags",
    //     max_width_item: 250
    // }, {
    //     name: "Timeline",
    //     max_width_item: 350
    // }
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
    }
    // ,
    // {
    //     id: 20,
    //     name: "Navigation solid",
    //     path: "navigation-solid-20",
    //     tags: GROUP_TAGS[0],
    //     group: GROUP_COMPONENT[10],
    //     author: DEVS[1]
    // },
    // {
    //     id: 21,
    //     name: "Navigation outline",
    //     path: "navigation-outline-21",
    //     tags: GROUP_TAGS[0],
    //     group: GROUP_COMPONENT[10],
    //     author: DEVS[1]
    // },
    // {
    //     id: 22,
    //     name: "Navigation link",
    //     path: "navigation-link-22",
    //     tags: GROUP_TAGS[0],
    //     group: GROUP_COMPONENT[10],
    //     author: DEVS[1]
    // },
    // {
    //     id: 23,
    //     name: "Popover",
    //     path: "popover-23",
    //     tags: GROUP_TAGS[1],
    //     group: GROUP_COMPONENT[11],
    //     author: DEVS[1]
    // },
    // {
    //     id: 24,
    //     name: "Stepper",
    //     path: "stepper-24",
    //     tags: GROUP_TAGS[1],
    //     group: GROUP_COMPONENT[12],
    //     author: DEVS[1]
    // },
    // {
    //     id: 25,
    //     name: "Table",
    //     path: "table-25",
    //     tags: GROUP_TAGS[0],
    //     group: GROUP_COMPONENT[13],
    //     author: DEVS[1]
    // },
    // {
    //     id: 26,
    //     name: "Tab horizontal",
    //     path: "tab-horizontal-26",
    //     tags: GROUP_TAGS[1],
    //     group: GROUP_COMPONENT[14],
    //     author: DEVS[1]
    // },
    // {
    //     id: 27,
    //     name: "Tab vertical",
    //     path: "tab-vertical-27",
    //     tags: GROUP_TAGS[1],
    //     group: GROUP_COMPONENT[14],
    //     author: DEVS[1]
    // },
    // {
    //     id: 28,
    //     name: "Tag",
    //     path: "tag-28",
    //     tags: GROUP_TAGS[0],
    //     group: GROUP_COMPONENT[15],
    //     author: DEVS[0]
    // },
    // {
    //     id: 29,
    //     name: "Timeline",
    //     path: "timeline-29",
    //     tags: GROUP_TAGS[0],
    //     group: GROUP_COMPONENT[16],
    //     author: DEVS[1]
    // }
]
