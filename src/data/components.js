import DEVS from "./devs"

const GROUP_TAGS = [
    ["HTML", "CSS"],
    ["HTML", "CSS", "JS"]
]
export const GROUP_COMPONENT = {
    "accordions": ["Accordions", 350, 500],
    "alerts": ["Alerts", 400, 300],
    "avatars": ["Avatars", 300, 250],
    "badges": ["Badges", 300, 250],
    "breadcrumbs": ["Breadcrumbs", 400, 250],
    "buttons": ["Buttons", 300, 250],
    "cards": ["Cards", 350, 620],
    "inputs": ["Inputs", 350, 250],
    "list-groups": ["List groups", 350, 450],
    "loading": ["Loading", 300, 250],
    "modals": ["Modals", 450, 350],
    "navbars": ["Navbars", 700, 600],
    "navigations": ["Navigations", 350, 250],
    "popovers": ["Popovers", 350, 300],
    "progress": ["Progress", 350, 250],
    "radio-and-checkbox": ["Radio and Checkbox", 300, 250],
    "selects": ["Selects", 350, 400],
    "sliders": ["Sliders", 300, 250],
    "steppers": ["Steppers", 450, 300],
    "tables": ["Tables", 600, 450],
    "tabs": ["Tabs", 450, 420],
    "tags": ["Tags", 300, 250],
    "timelines": ["Timelines", 350, 600],
}
export const LIST_COMPONENTS = [
    {
        id: 1,
        name: "Accordion",
        path: "accordion-1",
        tags: GROUP_TAGS[1],
        group: "accordions",
        author: DEVS[1]
    },
    {
        id: 2,
        name: "Alert",
        path: "alert-2",
        tags: GROUP_TAGS[1],
        group: "alerts",
        author: DEVS[0]
    },
    {
        id: 3,
        name: "Avatar",
        path: "avatar-3",
        tags: GROUP_TAGS[0],
        group: "avatars",
        author: DEVS[0]
    },
    {
        id: 4,
        name: "Badge",
        path: "badge-4",
        tags: GROUP_TAGS[0],
        group: "badges",
        author: DEVS[0]
    },
    {
        id: 5,
        name: "Breadcrumb",
        path: "breadcrumb-5",
        tags: GROUP_TAGS[0],
        group: "breadcrumbs",
        author: DEVS[0]
    },
    {
        id: 6,
        name: "Button",
        path: "button-6",
        tags: GROUP_TAGS[1],
        group: "buttons",
        author: DEVS[1]
    },
    {
        id: 7,
        name: "Button dropdown",
        path: "button-dropdown-7",
        tags: GROUP_TAGS[1],
        group: "buttons",
        author: DEVS[1]
    },
    {
        id: 8,
        name: "Card product",
        path: "card-product-8",
        tags: GROUP_TAGS[0],
        group: "cards",
        author: DEVS[1]
    },
    {
        id: 9,
        name: "Card service",
        path: "card-service-9",
        tags: GROUP_TAGS[0],
        group: "cards",
        author: DEVS[1]
    },
    {
        id: 10,
        name: "Card user",
        path: "card-user-10",
        tags: GROUP_TAGS[0],
        group: "cards",
        author: DEVS[1]
    },
    {
        id: 11,
        name: "Card box",
        path: "card-box-11",
        tags: GROUP_TAGS[0],
        group: "cards",
        author: DEVS[1]
    },
    {
        id: 12,
        name: "Input placeholder",
        path: "input-placeholder-12",
        tags: GROUP_TAGS[0],
        group: "inputs",
        author: DEVS[0]
    },
    {
        id: 13,
        name: "Input floating",
        path: "input-floating-13",
        tags: GROUP_TAGS[1],
        group: "inputs",
        author: DEVS[0]
    },
    {
        id: 14,
        name: "List articles",
        path: "list-articles-14",
        tags: GROUP_TAGS[0],
        group: "list-groups",
        author: DEVS[0]
    },
    {
        id: 15,
        name: "List items",
        path: "list-items-15",
        tags: GROUP_TAGS[0],
        group: "list-groups",
        author: DEVS[0]
    },
    {
        id: 16,
        name: "Loader logo",
        path: "loader-logo-16",
        tags: GROUP_TAGS[0],
        group: "loading",
        author: DEVS[1]
    },
    {
        id: 17,
        name: "Modal",
        path: "modal-17",
        tags: GROUP_TAGS[1],
        group: "modals",
        author: DEVS[1]
    },
    {
        id: 18,
        name: "Navbar",
        path: "navbar-18",
        tags: GROUP_TAGS[1],
        group: "navbars",
        author: DEVS[0]
    },
    {
        id: 19,
        name: "Navigation",
        path: "navigation-19",
        tags: GROUP_TAGS[0],
        group: "navigations",
        author: DEVS[1]
    },
    {
        id: 20,
        name: "Popover",
        path: "popover-20",
        tags: GROUP_TAGS[0],
        group: "popovers",
        author: DEVS[1]
    },
    {
        id: 21,
        name: "Progress",
        path: "progress-21",
        tags: GROUP_TAGS[1],
        group: "progress",
        author: DEVS[1]
    },
    {
        id: 22,
        name: "Checkbox",
        path: "checkbox-22",
        tags: GROUP_TAGS[1],
        group: "radio-and-checkbox",
        author: DEVS[1]
    },
    {
        id: 23,
        name: "Switch",
        path: "switch-23",
        tags: GROUP_TAGS[1],
        group: "radio-and-checkbox",
        author: DEVS[1]
    },
    {
        id: 24,
        name: "Select",
        path: "select-24",
        tags: GROUP_TAGS[1],
        group: "selects",
        author: DEVS[1]
    },
    {
        id: 25,
        name: "Select Floating",
        path: "select-floating-25",
        tags: GROUP_TAGS[1],
        group: "selects",
        author: DEVS[1]
    },
    {
        id: 26,
        name: "Slider",
        path: "slider-26",
        tags: GROUP_TAGS[1],
        group: "sliders",
        author: DEVS[1]
    },
    {
        id: 27,
        name: "Stepper",
        path: "stepper-27",
        tags: GROUP_TAGS[1],
        group: "steppers",
        author: DEVS[1]
    },
    {
        id: 28,
        name: "Table",
        path: "table-28",
        tags: GROUP_TAGS[0],
        group: "tables",
        author: DEVS[1]
    },
    {
        id: 29,
        name: "Tab horizontal",
        path: "tab-horizontal-29",
        tags: GROUP_TAGS[1],
        group: "tabs",
        author: DEVS[1]
    },
    {
        id: 30,
        name: "Tab vertical",
        path: "tab-vertical-30",
        tags: GROUP_TAGS[1],
        group: "tabs",
        author: DEVS[1]
    },
    {
        id: 31,
        name: "Tag",
        path: "tag-30",
        tags: GROUP_TAGS[0],
        group: "tags",
        author: DEVS[0]
    },
    {
        id: 32,
        name: "Timeline",
        path: "timeline-31",
        tags: GROUP_TAGS[0],
        group: "timelines",
        author: DEVS[1]
    }
]
