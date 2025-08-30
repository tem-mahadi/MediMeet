module.exports = {

"[project]/lib/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/components/ui/button.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/card.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 78,
        columnNumber: 11
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/separator.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/badge.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/tabs.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SlotPicker": (()=>SlotPicker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function SlotPicker({ days, onSelectSlot }) {
    const [selectedSlot, setSelectedSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Find first day with slots as default tab
    const firstDayWithSlots = days.find((day)=>day.slots.length > 0)?.date || days[0]?.date;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(firstDayWithSlots);
    const handleSlotSelect = (slot)=>{
        setSelectedSlot(slot);
    };
    const confirmSelection = ()=>{
        if (selectedSlot) {
            onSelectSlot(selectedSlot);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                defaultValue: activeTab,
                onValueChange: setActiveTab,
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                        className: "w-full justify-start overflow-x-auto",
                        children: days.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: day.date,
                                disabled: day.slots.length === 0,
                                className: day.slots.length === 0 ? "opacity-50 cursor-not-allowed" : "",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " opacity-80",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(day.date), "MMM d")
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "(",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(day.date), "EEE"),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    day.slots.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-2 bg-emerald-900/30 text-emerald-400 text-xs px-2 py-1 rounded",
                                        children: day.slots.length
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, day.date, true, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    days.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: day.date,
                            className: "pt-4",
                            children: day.slots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 text-muted-foreground",
                                children: "No available slots for this day."
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-white mb-2",
                                        children: day.displayDate
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2",
                                        children: day.slots.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                className: `border-emerald-900/20 cursor-pointer transition-all ${selectedSlot?.startTime === slot.startTime ? "bg-emerald-900/30 border-emerald-600" : "hover:border-emerald-700/40"}`,
                                                onClick: ()=>handleSlotSelect(slot),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "p-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: `h-4 w-4 mr-2 ${selectedSlot?.startTime === slot.startTime ? "text-emerald-400" : "text-muted-foreground"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                                            lineNumber: 83,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: selectedSlot?.startTime === slot.startTime ? "text-white" : "text-muted-foreground",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(slot.startTime), "h:mm a")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                                            lineNumber: 90,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 23
                                                }, this)
                                            }, slot.startTime, false, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        }, day.date, false, {
                            fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: confirmSelection,
                    disabled: !selectedSlot,
                    className: "bg-emerald-600 hover:bg-emerald-700",
                    children: [
                        "Continue",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "ml-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/ui/textarea.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/label.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/actions/data:fcad98 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40fbe720e6c6b737ca0e389e1b23744544a4e3cf49":"bookAppointment"},"actions/appointments.js",""] */ __turbopack_context__.s({
    "bookAppointment": (()=>bookAppointment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var bookAppointment = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40fbe720e6c6b737ca0e389e1b23744544a4e3cf49", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "bookAppointment"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXBwb2ludG1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbi8vIGRlZHVjdENyZWRpdHNGb3JBcHBvaW50bWVudCBoYW5kbGVkIGluc2lkZSBib29raW5nIHRyYW5zYWN0aW9uIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9uc1xuaW1wb3J0IHsgVm9uYWdlIH0gZnJvbSBcIkB2b25hZ2Uvc2VydmVyLXNka1wiO1xuaW1wb3J0IHsgYWRkRGF5cywgYWRkTWludXRlcywgZm9ybWF0LCBpc0JlZm9yZSwgZW5kT2ZEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEF1dGggfSBmcm9tIFwiQHZvbmFnZS9hdXRoXCI7XG5cbi8vIEluaXRpYWxpemUgVm9uYWdlIFZpZGVvIEFQSSBjbGllbnRcbmNvbnN0IGNyZWRlbnRpYWxzID0gbmV3IEF1dGgoe1xuICBhcHBsaWNhdGlvbklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WT05BR0VfQVBQTElDQVRJT05fSUQsXG4gIHByaXZhdGVLZXk6IHByb2Nlc3MuZW52LlZPTkFHRV9QUklWQVRFX0tFWSxcbn0pO1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuY29uc3Qgdm9uYWdlID0gbmV3IFZvbmFnZShjcmVkZW50aWFscywgb3B0aW9ucyk7XG5cbi8qKlxuICogQm9vayBhIG5ldyBhcHBvaW50bWVudCB3aXRoIGEgZG9jdG9yXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBib29rQXBwb2ludG1lbnQoZm9ybURhdGEpIHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcblxuICBpZiAoIXVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2V0IHRoZSBwYXRpZW50IHVzZXJcbiAgICBjb25zdCBwYXRpZW50ID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXG4gICAgICAgIHJvbGU6IFwiUEFUSUVOVFwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghcGF0aWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGF0aWVudCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgLy8gUGFyc2UgZm9ybSBkYXRhXG4gICAgY29uc3QgZG9jdG9ySWQgPSBmb3JtRGF0YS5nZXQoXCJkb2N0b3JJZFwiKTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJzdGFydFRpbWVcIikpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJlbmRUaW1lXCIpKTtcbiAgICBjb25zdCBwYXRpZW50RGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSB8fCBudWxsO1xuXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRcbiAgICBpZiAoIWRvY3RvcklkIHx8ICFzdGFydFRpbWUgfHwgIWVuZFRpbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3Rvciwgc3RhcnQgdGltZSwgYW5kIGVuZCB0aW1lIGFyZSByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZG9jdG9yIGV4aXN0cyBhbmQgaXMgdmVyaWZpZWRcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGRvY3RvcklkLFxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxuICAgICAgICB2ZXJpZmljYXRpb25TdGF0dXM6IFwiVkVSSUZJRURcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZCBvciBub3QgdmVyaWZpZWRcIik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBhdGllbnQgaGFzIGVub3VnaCBjcmVkaXRzICgyIGNyZWRpdHMgcGVyIGFwcG9pbnRtZW50KVxuICAgIGlmIChwYXRpZW50LmNyZWRpdHMgPCAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnN1ZmZpY2llbnQgY3JlZGl0cyB0byBib29rIGFuIGFwcG9pbnRtZW50XCIpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIG5ldyBWb25hZ2UgVmlkZW8gQVBJIHNlc3Npb24gKGRvIHRoaXMgYmVmb3JlIERCIHR4KVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IGF3YWl0IGNyZWF0ZVZpZGVvU2Vzc2lvbigpO1xuXG4gICAgLy8gUGVyZm9ybSBvdmVybGFwIGNoZWNrcywgY3JlZGl0IHRyYW5zZmVyIGFuZCBhcHBvaW50bWVudCBjcmVhdGlvbiBpbnNpZGUgYSBzaW5nbGUgc2VyaWFsaXphYmxlIHRyYW5zYWN0aW9uXG4gICAgY29uc3QgYXBwb2ludG1lbnQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oXG4gICAgICBhc3luYyAodHgpID0+IHtcbiAgICAgICAgLy8gUmUtZmV0Y2ggcGF0aWVudCBhbmQgZG9jdG9yIGluc2lkZSB0cmFuc2FjdGlvbiB0byBlbnN1cmUgdXAtdG8tZGF0ZSB2YWx1ZXNcbiAgICAgICAgY29uc3QgdHhQYXRpZW50ID0gYXdhaXQgdHgudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHBhdGllbnQuaWQgfSB9KTtcbiAgICAgICAgY29uc3QgdHhEb2N0b3IgPSBhd2FpdCB0eC51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogZG9jdG9yLmlkIH0gfSk7XG5cbiAgICAgICAgaWYgKCF0eFBhdGllbnQpIHRocm93IG5ldyBFcnJvcihcIlBhdGllbnQgbm90IGZvdW5kICh0eClcIik7XG4gICAgICAgIGlmICghdHhEb2N0b3IpIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmQgKHR4KVwiKTtcblxuICAgICAgICAvLyBDaGVjayBvdmVybGFwcGluZyBhcHBvaW50bWVudHMgZm9yIGRvY3RvclxuICAgICAgICBjb25zdCBvdmVybGFwcGluZ0ZvckRvY3RvciA9IGF3YWl0IHR4LmFwcG9pbnRtZW50LmZpbmRGaXJzdCh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGRvY3RvcklkOiBkb2N0b3JJZCxcbiAgICAgICAgICAgIHN0YXR1czogXCJTQ0hFRFVMRURcIixcbiAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHsgbHRlOiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiB7IGd0OiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogeyBsdDogZW5kVGltZSB9LFxuICAgICAgICAgICAgICAgIGVuZFRpbWU6IHsgZ3RlOiBlbmRUaW1lIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHsgZ3RlOiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiB7IGx0ZTogZW5kVGltZSB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob3ZlcmxhcHBpbmdGb3JEb2N0b3IpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHRpbWUgc2xvdCBpcyBhbHJlYWR5IGJvb2tlZCBmb3IgdGhlIGRvY3RvclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIG92ZXJsYXBwaW5nIGFwcG9pbnRtZW50cyBmb3IgcGF0aWVudCAocHJldmVudCBwYXRpZW50IGJvb2tpbmcgbXVsdGlwbGUgYXQgc2FtZSB0aW1lKVxuICAgICAgICBjb25zdCBvdmVybGFwcGluZ0ZvclBhdGllbnQgPSBhd2FpdCB0eC5hcHBvaW50bWVudC5maW5kRmlyc3Qoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBwYXRpZW50SWQ6IHR4UGF0aWVudC5pZCxcbiAgICAgICAgICAgIHN0YXR1czogXCJTQ0hFRFVMRURcIixcbiAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHsgbHRlOiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiB7IGd0OiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogeyBsdDogZW5kVGltZSB9LFxuICAgICAgICAgICAgICAgIGVuZFRpbWU6IHsgZ3RlOiBlbmRUaW1lIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHsgZ3RlOiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiB7IGx0ZTogZW5kVGltZSB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob3ZlcmxhcHBpbmdGb3JQYXRpZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFscmVhZHkgaGF2ZSBhbiBhcHBvaW50bWVudCBhdCB0aGlzIHRpbWVcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbnN1cmUgcGF0aWVudCBoYXMgc3VmZmljaWVudCBjcmVkaXRzIGluc2lkZSB0cmFuc2FjdGlvblxuICAgICAgICBpZiAodHhQYXRpZW50LmNyZWRpdHMgPCAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5zdWZmaWNpZW50IGNyZWRpdHMgdG8gYm9vayBhbiBhcHBvaW50bWVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBjcmVkaXQgdHJhbnNhY3Rpb25zIGFuZCB1cGRhdGUgYmFsYW5jZXNcbiAgICAgICAgYXdhaXQgdHguY3JlZGl0VHJhbnNhY3Rpb24uY3JlYXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB1c2VySWQ6IHR4UGF0aWVudC5pZCxcbiAgICAgICAgICAgIGFtb3VudDogLTIsXG4gICAgICAgICAgICB0eXBlOiBcIkFQUE9JTlRNRU5UX0RFRFVDVElPTlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHR4LmNyZWRpdFRyYW5zYWN0aW9uLmNyZWF0ZSh7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXNlcklkOiB0eERvY3Rvci5pZCxcbiAgICAgICAgICAgIGFtb3VudDogMixcbiAgICAgICAgICAgIHR5cGU6IFwiQVBQT0lOVE1FTlRfREVEVUNUSU9OXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0eFBhdGllbnQuaWQgfSxcbiAgICAgICAgICBkYXRhOiB7IGNyZWRpdHM6IHsgZGVjcmVtZW50OiAyIH0gfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0eERvY3Rvci5pZCB9LFxuICAgICAgICAgIGRhdGE6IHsgY3JlZGl0czogeyBpbmNyZW1lbnQ6IDIgfSB9LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGFwcG9pbnRtZW50XG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCB0eC5hcHBvaW50bWVudC5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBhdGllbnRJZDogdHhQYXRpZW50LmlkLFxuICAgICAgICAgICAgZG9jdG9ySWQ6IHR4RG9jdG9yLmlkLFxuICAgICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgICAgZW5kVGltZSxcbiAgICAgICAgICAgIHBhdGllbnREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHN0YXR1czogXCJTQ0hFRFVMRURcIixcbiAgICAgICAgICAgIHZpZGVvU2Vzc2lvbklkOiBzZXNzaW9uSWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XG4gICAgICB9LFxuICAgICAgeyBpc29sYXRpb25MZXZlbDogXCJTZXJpYWxpemFibGVcIiB9XG4gICAgKTtcblxuICByZXZhbGlkYXRlUGF0aChcIi9hcHBvaW50bWVudHNcIik7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYXBwb2ludG1lbnQ6IGFwcG9pbnRtZW50IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBib29rIGFwcG9pbnRtZW50OlwiLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJvb2sgYXBwb2ludG1lbnQ6XCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgVm9uYWdlIFZpZGVvIEFQSSBzZXNzaW9uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVZpZGVvU2Vzc2lvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgdm9uYWdlLnZpZGVvLmNyZWF0ZVNlc3Npb24oeyBtZWRpYU1vZGU6IFwicm91dGVkXCIgfSk7XG4gICAgcmV0dXJuIHNlc3Npb24uc2Vzc2lvbklkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgdmlkZW8gc2Vzc2lvbjogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgdG9rZW4gZm9yIGEgdmlkZW8gc2Vzc2lvblxuICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIGVpdGhlciBkb2N0b3Igb3IgcGF0aWVudCBpcyBhYm91dCB0byBqb2luIHRoZSBjYWxsXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVZpZGVvVG9rZW4oZm9ybURhdGEpIHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcblxuICBpZiAoIXVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwb2ludG1lbnRJZCA9IGZvcm1EYXRhLmdldChcImFwcG9pbnRtZW50SWRcIik7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50SWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IElEIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIGFwcG9pbnRtZW50IGFuZCB2ZXJpZnkgdGhlIHVzZXIgaXMgcGFydCBvZiBpdFxuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IHRoZSB1c2VyIGlzIGVpdGhlciB0aGUgZG9jdG9yIG9yIHRoZSBwYXRpZW50IGZvciB0aGlzIGFwcG9pbnRtZW50XG4gICAgaWYgKGFwcG9pbnRtZW50LmRvY3RvcklkICE9PSB1c2VyLmlkICYmIGFwcG9pbnRtZW50LnBhdGllbnRJZCAhPT0gdXNlci5pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBqb2luIHRoaXMgY2FsbFwiKTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgdGhlIGFwcG9pbnRtZW50IGlzIHNjaGVkdWxlZFxuICAgIGlmIChhcHBvaW50bWVudC5zdGF0dXMgIT09IFwiU0NIRURVTEVEXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgYXBwb2ludG1lbnQgaXMgbm90IGN1cnJlbnRseSBzY2hlZHVsZWRcIik7XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IHRoZSBhcHBvaW50bWVudCBpcyB3aXRoaW4gYSB2YWxpZCB0aW1lIHJhbmdlIChlLmcuLCBzdGFydGluZyA1IG1pbnV0ZXMgYmVmb3JlIHNjaGVkdWxlZCB0aW1lKVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgYXBwb2ludG1lbnRUaW1lID0gbmV3IERhdGUoYXBwb2ludG1lbnQuc3RhcnRUaW1lKTtcbiAgICBjb25zdCB0aW1lRGlmZmVyZW5jZSA9IChhcHBvaW50bWVudFRpbWUgLSBub3cpIC8gKDEwMDAgKiA2MCk7IC8vIGRpZmZlcmVuY2UgaW4gbWludXRlc1xuXG4gICAgaWYgKHRpbWVEaWZmZXJlbmNlID4gMzApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJUaGUgY2FsbCB3aWxsIGJlIGF2YWlsYWJsZSAzMCBtaW51dGVzIGJlZm9yZSB0aGUgc2NoZWR1bGVkIHRpbWVcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBhIHRva2VuIGZvciB0aGUgdmlkZW8gc2Vzc2lvblxuICAgIC8vIFRva2VuIGV4cGlyZXMgMiBob3VycyBhZnRlciB0aGUgYXBwb2ludG1lbnQgc3RhcnQgdGltZVxuICAgIGNvbnN0IGFwcG9pbnRtZW50RW5kVGltZSA9IG5ldyBEYXRlKGFwcG9pbnRtZW50LmVuZFRpbWUpO1xuICAgIGNvbnN0IGV4cGlyYXRpb25UaW1lID1cbiAgICAgIE1hdGguZmxvb3IoYXBwb2ludG1lbnRFbmRUaW1lLmdldFRpbWUoKSAvIDEwMDApICsgNjAgKiA2MDsgLy8gMSBob3VyIGFmdGVyIGVuZCB0aW1lXG5cbiAgICAvLyBVc2UgdXNlcidzIG5hbWUgYW5kIHJvbGUgYXMgY29ubmVjdGlvbiBkYXRhXG4gICAgY29uc3QgY29ubmVjdGlvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgfSk7XG5cbiAgICAvLyBHZW5lcmF0ZSB0aGUgdG9rZW4gd2l0aCBhcHByb3ByaWF0ZSByb2xlIGFuZCBleHBpcmF0aW9uXG4gICAgY29uc3QgdG9rZW4gPSB2b25hZ2UudmlkZW8uZ2VuZXJhdGVDbGllbnRUb2tlbihhcHBvaW50bWVudC52aWRlb1Nlc3Npb25JZCwge1xuICAgICAgcm9sZTogXCJwdWJsaXNoZXJcIiwgLy8gQm90aCBkb2N0b3IgYW5kIHBhdGllbnQgY2FuIHB1Ymxpc2ggc3RyZWFtc1xuICAgICAgZXhwaXJlVGltZTogZXhwaXJhdGlvblRpbWUsXG4gICAgICBkYXRhOiBjb25uZWN0aW9uRGF0YSxcbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgYXBwb2ludG1lbnQgd2l0aCB0aGUgdG9rZW5cbiAgICBhd2FpdCBkYi5hcHBvaW50bWVudC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGFwcG9pbnRtZW50SWQsXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICB2aWRlb1Nlc3Npb25Ub2tlbjogdG9rZW4sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICB2aWRlb1Nlc3Npb25JZDogYXBwb2ludG1lbnQudmlkZW9TZXNzaW9uSWQsXG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIHZpZGVvIHRva2VuOlwiLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIHZpZGVvIHRva2VuOlwiICsgZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgZG9jdG9yIGJ5IElEXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N0b3JCeUlkKGRvY3RvcklkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jdG9yID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBkb2N0b3JJZCxcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcbiAgICAgICAgdmVyaWZpY2F0aW9uU3RhdHVzOiBcIlZFUklGSUVEXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFkb2N0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZG9jdG9yIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkb2N0b3I6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZG9jdG9yIGRldGFpbHNcIik7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYXZhaWxhYmxlIHRpbWUgc2xvdHMgZm9yIGJvb2tpbmcgZm9yIHRoZSBuZXh0IDQgZGF5c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlVGltZVNsb3RzKGRvY3RvcklkKSB7XG4gIHRyeSB7XG4gICAgLy8gVmFsaWRhdGUgZG9jdG9yIGV4aXN0ZW5jZSBhbmQgdmVyaWZpY2F0aW9uXG4gICAgY29uc3QgZG9jdG9yID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBkb2N0b3JJZCxcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcbiAgICAgICAgdmVyaWZpY2F0aW9uU3RhdHVzOiBcIlZFUklGSUVEXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFkb2N0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmQgb3Igbm90IHZlcmlmaWVkXCIpO1xuICAgIH1cblxuICAgIC8vIEZldGNoIGEgc2luZ2xlIGF2YWlsYWJpbGl0eSByZWNvcmRcbiAgICBjb25zdCBhdmFpbGFiaWxpdHkgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWF2YWlsYWJpbGl0eSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYXZhaWxhYmlsaXR5IHNldCBieSBkb2N0b3JcIik7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBuZXh0IDQgZGF5c1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF5cyA9IFtub3csIGFkZERheXMobm93LCAxKSwgYWRkRGF5cyhub3csIDIpLCBhZGREYXlzKG5vdywgMyldO1xuXG4gICAgLy8gRmV0Y2ggZXhpc3RpbmcgYXBwb2ludG1lbnRzIGZvciB0aGUgZG9jdG9yIG92ZXIgdGhlIG5leHQgNCBkYXlzXG4gICAgY29uc3QgbGFzdERheSA9IGVuZE9mRGF5KGRheXNbM10pO1xuICAgIGNvbnN0IGV4aXN0aW5nQXBwb2ludG1lbnRzID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZG9jdG9ySWQ6IGRvY3Rvci5pZCxcbiAgICAgICAgc3RhdHVzOiBcIlNDSEVEVUxFRFwiLFxuICAgICAgICBzdGFydFRpbWU6IHtcbiAgICAgICAgICBsdGU6IGxhc3REYXksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlU2xvdHNCeURheSA9IHt9O1xuXG4gICAgLy8gRm9yIGVhY2ggb2YgdGhlIG5leHQgNCBkYXlzLCBnZW5lcmF0ZSBhdmFpbGFibGUgc2xvdHNcbiAgICBmb3IgKGNvbnN0IGRheSBvZiBkYXlzKSB7XG4gICAgICBjb25zdCBkYXlTdHJpbmcgPSBmb3JtYXQoZGF5LCBcInl5eXktTU0tZGRcIik7XG4gICAgICBhdmFpbGFibGVTbG90c0J5RGF5W2RheVN0cmluZ10gPSBbXTtcblxuICAgICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgYXZhaWxhYmlsaXR5IHN0YXJ0L2VuZCB0aW1lcyBmb3IgdGhpcyBkYXlcbiAgICAgIGNvbnN0IGF2YWlsYWJpbGl0eVN0YXJ0ID0gbmV3IERhdGUoYXZhaWxhYmlsaXR5LnN0YXJ0VGltZSk7XG4gICAgICBjb25zdCBhdmFpbGFiaWxpdHlFbmQgPSBuZXcgRGF0ZShhdmFpbGFiaWxpdHkuZW5kVGltZSk7XG5cbiAgICAgIC8vIFNldCB0aGUgZGF5IHRvIHRoZSBjdXJyZW50IGRheSB3ZSdyZSBwcm9jZXNzaW5nXG4gICAgICBhdmFpbGFiaWxpdHlTdGFydC5zZXRGdWxsWWVhcihcbiAgICAgICAgZGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGRheS5nZXRNb250aCgpLFxuICAgICAgICBkYXkuZ2V0RGF0ZSgpXG4gICAgICApO1xuICAgICAgYXZhaWxhYmlsaXR5RW5kLnNldEZ1bGxZZWFyKFxuICAgICAgICBkYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF5LmdldE1vbnRoKCksXG4gICAgICAgIGRheS5nZXREYXRlKClcbiAgICAgICk7XG5cbiAgICAgIGxldCBjdXJyZW50ID0gbmV3IERhdGUoYXZhaWxhYmlsaXR5U3RhcnQpO1xuICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoYXZhaWxhYmlsaXR5RW5kKTtcblxuICAgICAgd2hpbGUgKFxuICAgICAgICBpc0JlZm9yZShhZGRNaW51dGVzKGN1cnJlbnQsIDMwKSwgZW5kKSB8fFxuICAgICAgICArYWRkTWludXRlcyhjdXJyZW50LCAzMCkgPT09ICtlbmRcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXh0ID0gYWRkTWludXRlcyhjdXJyZW50LCAzMCk7XG5cbiAgICAgICAgLy8gU2tpcCBwYXN0IHNsb3RzXG4gICAgICAgIGlmIChpc0JlZm9yZShjdXJyZW50LCBub3cpKSB7XG4gICAgICAgICAgY3VycmVudCA9IG5leHQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdmVybGFwcyA9IGV4aXN0aW5nQXBwb2ludG1lbnRzLnNvbWUoKGFwcG9pbnRtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYVN0YXJ0ID0gbmV3IERhdGUoYXBwb2ludG1lbnQuc3RhcnRUaW1lKTtcbiAgICAgICAgICBjb25zdCBhRW5kID0gbmV3IERhdGUoYXBwb2ludG1lbnQuZW5kVGltZSk7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKGN1cnJlbnQgPj0gYVN0YXJ0ICYmIGN1cnJlbnQgPCBhRW5kKSB8fFxuICAgICAgICAgICAgKG5leHQgPiBhU3RhcnQgJiYgbmV4dCA8PSBhRW5kKSB8fFxuICAgICAgICAgICAgKGN1cnJlbnQgPD0gYVN0YXJ0ICYmIG5leHQgPj0gYUVuZClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW92ZXJsYXBzKSB7XG4gICAgICAgICAgYXZhaWxhYmxlU2xvdHNCeURheVtkYXlTdHJpbmddLnB1c2goe1xuICAgICAgICAgICAgc3RhcnRUaW1lOiBjdXJyZW50LnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICBlbmRUaW1lOiBuZXh0LnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICBmb3JtYXR0ZWQ6IGAke2Zvcm1hdChjdXJyZW50LCBcImg6bW0gYVwiKX0gLSAke2Zvcm1hdChcbiAgICAgICAgICAgICAgbmV4dCxcbiAgICAgICAgICAgICAgXCJoOm1tIGFcIlxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgZGF5OiBmb3JtYXQoY3VycmVudCwgXCJFRUVFLCBNTU1NIGRcIiksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRvIGFycmF5IG9mIHNsb3RzIGdyb3VwZWQgYnkgZGF5IGZvciBlYXNpZXIgY29uc3VtcHRpb24gYnkgdGhlIFVJXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmVudHJpZXMoYXZhaWxhYmxlU2xvdHNCeURheSkubWFwKChbZGF0ZSwgc2xvdHNdKSA9PiAoe1xuICAgICAgZGF0ZSxcbiAgICAgIGRpc3BsYXlEYXRlOlxuICAgICAgICBzbG90cy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBzbG90c1swXS5kYXlcbiAgICAgICAgICA6IGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgXCJFRUVFLCBNTU1NIGRcIiksXG4gICAgICBzbG90cyxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBkYXlzOiByZXN1bHQgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGF2YWlsYWJsZSBzbG90czpcIiwgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhdmFpbGFibGUgdGltZSBzbG90czogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnU0FxQnNCIn0=
}}),
"[project]/hooks/use-fetch.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
const useFetch = (cb)=>{
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fn = async (...args)=>{
        setLoading(true);
        setError(null);
        try {
            const response = await cb(...args);
            setData(response);
            setError(null);
        } catch (error) {
            setError(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message);
        } finally{
            setLoading(false);
        }
    };
    return {
        data,
        loading,
        error,
        fn,
        setData
    };
};
const __TURBOPACK__default__export__ = useFetch;
}}),
"[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppointmentForm": (()=>AppointmentForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$fcad98__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:fcad98 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-fetch.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function AppointmentForm({ doctorId, slot, onBack, onComplete }) {
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Use the useFetch hook to handle loading, data, and error states
    const { loading, data, fn: submitBooking } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$fcad98__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["bookAppointment"]);
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Create form data
        const formData = new FormData();
        formData.append("doctorId", doctorId);
        formData.append("startTime", slot.startTime);
        formData.append("endTime", slot.endTime);
        formData.append("description", description);
        // Submit booking using the function from useFetch
        await submitBooking(formData);
    };
    // Handle response after booking attempt
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data) {
            if (data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Appointment booked successfully!");
                onComplete();
            }
        }
    }, [
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-muted/20 p-4 rounded-lg border border-emerald-900/20 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "h-5 w-5 text-emerald-400 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-medium",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(slot.startTime), "EEEE, MMMM d, yyyy")
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "h-5 w-5 text-emerald-400 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white",
                                children: slot.formatted
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                className: "h-5 w-5 text-emerald-400 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: [
                                    "Cost: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-medium",
                                        children: "2 credits"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                                        lineNumber: 60,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "description",
                        children: "Describe your medical concern (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        id: "description",
                        placeholder: "Please provide any details about your medical concern or what you'd like to discuss in the appointment...",
                        value: description,
                        onChange: (e)=>setDescription(e.target.value),
                        className: "bg-background border-emerald-900/20 h-32"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "This information will be shared with the doctor before your appointment."
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        onClick: onBack,
                        disabled: loading,
                        className: "border-emerald-900/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            "Change Time Slot"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: loading,
                        className: "bg-emerald-600 hover:bg-emerald-700",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                "Booking..."
                            ]
                        }, void 0, true) : "Confirm Booking"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/ui/alert.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// /app/doctors/[id]/_components/doctor-profile.jsx
__turbopack_context__.s({
    "DoctorProfile": (()=>DoctorProfile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/medal.js [app-ssr] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$doctors$2f5b$specialty$5d2f5b$id$5d2f$_components$2f$slot$2d$picker$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/doctors/[specialty]/[id]/_components/slot-picker.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$doctors$2f5b$specialty$5d2f5b$id$5d2f$_components$2f$appointment$2d$form$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/doctors/[specialty]/[id]/_components/appointment-form.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function DoctorProfile({ doctor, availableDays }) {
    const [showBooking, setShowBooking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSlot, setSelectedSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Calculate total available slots
    const totalSlots = availableDays?.reduce((total, day)=>total + day.slots.length, 0);
    const toggleBooking = ()=>{
        setShowBooking(!showBooking);
        if (!showBooking) {
            // Scroll to booking section when expanding
            setTimeout(()=>{
                document.getElementById("booking-section")?.scrollIntoView({
                    behavior: "smooth"
                });
            }, 100);
        }
    };
    const handleSlotSelect = (slot)=>{
        setSelectedSlot(slot);
    };
    const handleBookingComplete = ()=>{
        router.push("/appointments");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:sticky md:top-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-emerald-900/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-emerald-900/20",
                                        children: doctor.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: doctor.imageUrl,
                                            alt: doctor.name,
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                            lineNumber: 72,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "h-16 w-16 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 80,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                            lineNumber: 79,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white mb-1",
                                        children: [
                                            "Dr. ",
                                            doctor.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: "bg-emerald-900/20 border-emerald-900/30 text-emerald-400 mb-4",
                                        children: doctor.specialty
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"], {
                                                className: "h-4 w-4 text-emerald-400 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: [
                                                    doctor.experience,
                                                    " years experience"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: toggleBooking,
                                        className: "w-full bg-emerald-600 hover:bg-emerald-700 mt-4",
                                        children: showBooking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Hide Booking",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "ml-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                    lineNumber: 110,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Book Appointment",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "ml-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-2 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-emerald-900/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-xl font-bold text-white",
                                        children: [
                                            "About Dr. ",
                                            doctor.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "Professional background and expertise"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "h-5 w-5 text-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                        lineNumber: 139,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-medium",
                                                        children: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                        lineNumber: 140,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground whitespace-pre-line",
                                                children: doctor.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "bg-emerald-900/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-5 w-5 text-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                        lineNumber: 151,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-medium",
                                                        children: "Availability"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                        lineNumber: 152,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            totalSlots > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-5 w-5 text-emerald-400 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground",
                                                        children: [
                                                            totalSlots,
                                                            " time slots available for booking over the next 4 days"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                                        children: "No available slots for the next 4 days. Please check back later."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    showBooking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "booking-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-emerald-900/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-xl font-bold text-white",
                                            children: "Book an Appointment"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Select a time slot and provide details for your consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-6",
                                    children: totalSlots > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            !selectedSlot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$doctors$2f5b$specialty$5d2f5b$id$5d2f$_components$2f$slot$2d$picker$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SlotPicker"], {
                                                days: availableDays,
                                                onSelectSlot: handleSlotSelect
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 192,
                                                columnNumber: 23
                                            }, this),
                                            selectedSlot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$doctors$2f5b$specialty$5d2f5b$id$5d2f$_components$2f$appointment$2d$form$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppointmentForm"], {
                                                doctorId: doctor.id,
                                                slot: selectedSlot,
                                                onBack: ()=>setSelectedSlot(null),
                                                onComplete: handleBookingComplete
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 200,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "h-12 w-12 mx-auto text-muted-foreground mb-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-medium text-white mb-2",
                                                children: "No available slots"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "This doctor doesn't have any available appointment slots for the next 4 days. Please check back later or try another doctor."
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                                lineNumber: 214,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                        lineNumber: 209,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/doctors/[specialty]/[id]/_components/doctor-profile.jsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_f5f8b34f._.js.map