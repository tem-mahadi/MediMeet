(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/card.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 78,
        columnNumber: 11
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/textarea.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/badge.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/dialog.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.jsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.jsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:858d5d [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4036de7f683c90a8ef694c5528c390ffa797c00263":"cancelAppointment"},"actions/doctor.js",""] */ __turbopack_context__.s({
    "cancelAppointment": (()=>cancelAppointment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var cancelAppointment = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4036de7f683c90a8ef694c5528c390ffa797c00263", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "cancelAppointment"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9jdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcblxuLyoqXG4gKiBTZXQgZG9jdG9yJ3MgYXZhaWxhYmlsaXR5IHNsb3RzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRBdmFpbGFiaWxpdHlTbG90cyhmb3JtRGF0YSkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xuXG4gIGlmICghdXNlcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZXQgdGhlIGRvY3RvclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghZG9jdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIC8vIEdldCBmb3JtIGRhdGFcbiAgICBjb25zdCBzdGFydFRpbWUgPSBmb3JtRGF0YS5nZXQoXCJzdGFydFRpbWVcIik7XG4gICAgY29uc3QgZW5kVGltZSA9IGZvcm1EYXRhLmdldChcImVuZFRpbWVcIik7XG5cbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxuICAgIGlmICghc3RhcnRUaW1lIHx8ICFlbmRUaW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCB0aW1lIGFuZCBlbmQgdGltZSBhcmUgcmVxdWlyZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0VGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lXCIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSBkb2N0b3IgYWxyZWFkeSBoYXMgc2xvdHNcbiAgICBjb25zdCBleGlzdGluZ1Nsb3RzID0gYXdhaXQgZGIuYXZhaWxhYmlsaXR5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gSWYgc2xvdHMgZXhpc3QsIGRlbGV0ZSB0aGVtIGFsbCAod2UncmUgcmVwbGFjaW5nIHRoZW0pXG4gICAgaWYgKGV4aXN0aW5nU2xvdHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gRG9uJ3QgZGVsZXRlIHNsb3RzIHRoYXQgYWxyZWFkeSBoYXZlIGFwcG9pbnRtZW50c1xuICAgICAgY29uc3Qgc2xvdHNXaXRoTm9BcHBvaW50bWVudHMgPSBleGlzdGluZ1Nsb3RzLmZpbHRlcihcbiAgICAgICAgKHNsb3QpID0+ICFzbG90LmFwcG9pbnRtZW50XG4gICAgICApO1xuXG4gICAgICBpZiAoc2xvdHNXaXRoTm9BcHBvaW50bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZGVsZXRlTWFueSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgIGluOiBzbG90c1dpdGhOb0FwcG9pbnRtZW50cy5tYXAoKHNsb3QpID0+IHNsb3QuaWQpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbmV3IGF2YWlsYWJpbGl0eSBzbG90XG4gICAgY29uc3QgbmV3U2xvdCA9IGF3YWl0IGRiLmF2YWlsYWJpbGl0eS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKHN0YXJ0VGltZSksXG4gICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKGVuZFRpbWUpLFxuICAgICAgICBzdGF0dXM6IFwiQVZBSUxBQkxFXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNsb3Q6IG5ld1Nsb3QgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNldCBhdmFpbGFiaWxpdHkgc2xvdHM6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2V0IGF2YWlsYWJpbGl0eTogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBkb2N0b3IncyBjdXJyZW50IGF2YWlsYWJpbGl0eSBzbG90c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQXZhaWxhYmlsaXR5KCkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xuXG4gIGlmICghdXNlcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdmFpbGFiaWxpdHlTbG90cyA9IGF3YWl0IGRiLmF2YWlsYWJpbGl0eS5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgc3RhcnRUaW1lOiBcImFzY1wiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHNsb3RzOiBhdmFpbGFiaWxpdHlTbG90cyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhdmFpbGFiaWxpdHkgc2xvdHMgXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBkb2N0b3IncyB1cGNvbWluZyBhcHBvaW50bWVudHNcbiAqL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQXBwb2ludG1lbnRzKCkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xuXG4gIGlmICghdXNlcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBvaW50bWVudHMgPSBhd2FpdCBkYi5hcHBvaW50bWVudC5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBpbjogW1wiU0NIRURVTEVEXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIHN0YXJ0VGltZTogXCJhc2NcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBhcHBvaW50bWVudHMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYXBwb2ludG1lbnRzIFwiICsgZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDYW5jZWwgYW4gYXBwb2ludG1lbnQgKGNhbiBiZSBkb25lIGJ5IGJvdGggZG9jdG9yIGFuZCBwYXRpZW50KVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FuY2VsQXBwb2ludG1lbnQoZm9ybURhdGEpIHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcblxuICBpZiAoIXVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwb2ludG1lbnRJZCA9IGZvcm1EYXRhLmdldChcImFwcG9pbnRtZW50SWRcIik7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50SWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IElEIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIGFwcG9pbnRtZW50IHdpdGggYm90aCBwYXRpZW50IGFuZCBkb2N0b3IgZGV0YWlsc1xuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHBhdGllbnQ6IHRydWUsXG4gICAgICAgIGRvY3RvcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IHRoZSB1c2VyIGlzIGVpdGhlciB0aGUgZG9jdG9yIG9yIHRoZSBwYXRpZW50IGZvciB0aGlzIGFwcG9pbnRtZW50XG4gICAgaWYgKGFwcG9pbnRtZW50LmRvY3RvcklkICE9PSB1c2VyLmlkICYmIGFwcG9pbnRtZW50LnBhdGllbnRJZCAhPT0gdXNlci5pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBjYW5jZWwgdGhpcyBhcHBvaW50bWVudFwiKTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGNhbmNlbGxhdGlvbiBpbiBhIHRyYW5zYWN0aW9uXG4gICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xuICAgICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBzdGF0dXMgdG8gQ0FOQ0VMTEVEXG4gICAgICBhd2FpdCB0eC5hcHBvaW50bWVudC51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc3RhdHVzOiBcIkNBTkNFTExFRFwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFsd2F5cyByZWZ1bmQgY3JlZGl0cyB0byBwYXRpZW50IGFuZCBkZWR1Y3QgZnJvbSBkb2N0b3JcbiAgICAgIC8vIENyZWF0ZSBjcmVkaXQgdHJhbnNhY3Rpb24gZm9yIHBhdGllbnQgKHJlZnVuZClcbiAgICAgIGF3YWl0IHR4LmNyZWRpdFRyYW5zYWN0aW9uLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1c2VySWQ6IGFwcG9pbnRtZW50LnBhdGllbnRJZCxcbiAgICAgICAgICBhbW91bnQ6IDIsXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgY3JlZGl0IHRyYW5zYWN0aW9uIGZvciBkb2N0b3IgKGRlZHVjdGlvbilcbiAgICAgIGF3YWl0IHR4LmNyZWRpdFRyYW5zYWN0aW9uLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1c2VySWQ6IGFwcG9pbnRtZW50LmRvY3RvcklkLFxuICAgICAgICAgIGFtb3VudDogLTIsXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBVcGRhdGUgcGF0aWVudCdzIGNyZWRpdCBiYWxhbmNlIChpbmNyZW1lbnQpXG4gICAgICBhd2FpdCB0eC51c2VyLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQ6IGFwcG9pbnRtZW50LnBhdGllbnRJZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgIGluY3JlbWVudDogMixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBkb2N0b3IncyBjcmVkaXQgYmFsYW5jZSAoZGVjcmVtZW50KVxuICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBhcHBvaW50bWVudC5kb2N0b3JJZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgIGRlY3JlbWVudDogMixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBEZXRlcm1pbmUgd2hpY2ggcGF0aCB0byByZXZhbGlkYXRlIGJhc2VkIG9uIHVzZXIgcm9sZVxuICAgIGlmICh1c2VyLnJvbGUgPT09IFwiRE9DVE9SXCIpIHtcbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcbiAgICB9IGVsc2UgaWYgKHVzZXIucm9sZSA9PT0gXCJQQVRJRU5UXCIpIHtcbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2FwcG9pbnRtZW50c1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjYW5jZWwgYXBwb2ludG1lbnQ6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbi8qKlxuICogQWRkIG5vdGVzIHRvIGFuIGFwcG9pbnRtZW50XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRBcHBvaW50bWVudE5vdGVzKGZvcm1EYXRhKSB7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XG5cbiAgaWYgKCF1c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghZG9jdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcG9pbnRtZW50SWQgPSBmb3JtRGF0YS5nZXQoXCJhcHBvaW50bWVudElkXCIpO1xuICAgIGNvbnN0IG5vdGVzID0gZm9ybURhdGEuZ2V0KFwibm90ZXNcIik7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50SWQgfHwgIW5vdGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBJRCBhbmQgbm90ZXMgYXJlIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIC8vIFZlcmlmeSB0aGUgYXBwb2ludG1lbnQgYmVsb25ncyB0byB0aGlzIGRvY3RvclxuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgICAgZG9jdG9ySWQ6IGRvY3Rvci5pZCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBub3Rlc1xuICAgIGNvbnN0IHVwZGF0ZWRBcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5vdGVzLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhcHBvaW50bWVudDogdXBkYXRlZEFwcG9pbnRtZW50IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBhZGQgYXBwb2ludG1lbnQgbm90ZXM6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIG5vdGVzOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbi8qKlxuICogTWFyayBhbiBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQgKG9ubHkgYnkgZG9jdG9yIGFmdGVyIGVuZCB0aW1lKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FwcG9pbnRtZW50Q29tcGxldGVkKGZvcm1EYXRhKSB7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XG5cbiAgaWYgKCF1c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghZG9jdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcG9pbnRtZW50SWQgPSBmb3JtRGF0YS5nZXQoXCJhcHBvaW50bWVudElkXCIpO1xuXG4gICAgaWYgKCFhcHBvaW50bWVudElkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBJRCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIHRoZSBhcHBvaW50bWVudFxuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgICAgZG9jdG9ySWQ6IGRvY3Rvci5pZCwgLy8gRW5zdXJlIGFwcG9pbnRtZW50IGJlbG9uZ3MgdG8gdGhpcyBkb2N0b3JcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHBhdGllbnQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXBwb2ludG1lbnQgbm90IGZvdW5kIG9yIG5vdCBhdXRob3JpemVkXCIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFwcG9pbnRtZW50IGlzIGN1cnJlbnRseSBzY2hlZHVsZWRcbiAgICBpZiAoYXBwb2ludG1lbnQuc3RhdHVzICE9PSBcIlNDSEVEVUxFRFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IHNjaGVkdWxlZCBhcHBvaW50bWVudHMgY2FuIGJlIG1hcmtlZCBhcyBjb21wbGV0ZWRcIik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCB0aW1lIGlzIGFmdGVyIHRoZSBhcHBvaW50bWVudCBlbmQgdGltZVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgYXBwb2ludG1lbnRFbmRUaW1lID0gbmV3IERhdGUoYXBwb2ludG1lbnQuZW5kVGltZSk7XG5cbiAgICBpZiAobm93IDwgYXBwb2ludG1lbnRFbmRUaW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ2Fubm90IG1hcmsgYXBwb2ludG1lbnQgYXMgY29tcGxldGVkIGJlZm9yZSB0aGUgc2NoZWR1bGVkIGVuZCB0aW1lXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBzdGF0dXMgdG8gQ09NUExFVEVEXG4gICAgY29uc3QgdXBkYXRlZEFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdHVzOiBcIkNPTVBMRVRFRFwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhcHBvaW50bWVudDogdXBkYXRlZEFwcG9pbnRtZW50IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBtYXJrIGFwcG9pbnRtZW50IGFzIGNvbXBsZXRlZDpcIiwgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiRmFpbGVkIHRvIG1hcmsgYXBwb2ludG1lbnQgYXMgY29tcGxldGVkOiBcIiArIGVycm9yLm1lc3NhZ2VcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRSQXlLc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:3f9b4d [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40caa0d8429d57e52eba70b500a7ea03ac178d5d43":"addAppointmentNotes"},"actions/doctor.js",""] */ __turbopack_context__.s({
    "addAppointmentNotes": (()=>addAppointmentNotes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addAppointmentNotes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40caa0d8429d57e52eba70b500a7ea03ac178d5d43", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addAppointmentNotes"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9jdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcblxuLyoqXG4gKiBTZXQgZG9jdG9yJ3MgYXZhaWxhYmlsaXR5IHNsb3RzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRBdmFpbGFiaWxpdHlTbG90cyhmb3JtRGF0YSkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xuXG4gIGlmICghdXNlcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZXQgdGhlIGRvY3RvclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghZG9jdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIC8vIEdldCBmb3JtIGRhdGFcbiAgICBjb25zdCBzdGFydFRpbWUgPSBmb3JtRGF0YS5nZXQoXCJzdGFydFRpbWVcIik7XG4gICAgY29uc3QgZW5kVGltZSA9IGZvcm1EYXRhLmdldChcImVuZFRpbWVcIik7XG5cbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxuICAgIGlmICghc3RhcnRUaW1lIHx8ICFlbmRUaW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCB0aW1lIGFuZCBlbmQgdGltZSBhcmUgcmVxdWlyZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0VGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lXCIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSBkb2N0b3IgYWxyZWFkeSBoYXMgc2xvdHNcbiAgICBjb25zdCBleGlzdGluZ1Nsb3RzID0gYXdhaXQgZGIuYXZhaWxhYmlsaXR5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gSWYgc2xvdHMgZXhpc3QsIGRlbGV0ZSB0aGVtIGFsbCAod2UncmUgcmVwbGFjaW5nIHRoZW0pXG4gICAgaWYgKGV4aXN0aW5nU2xvdHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gRG9uJ3QgZGVsZXRlIHNsb3RzIHRoYXQgYWxyZWFkeSBoYXZlIGFwcG9pbnRtZW50c1xuICAgICAgY29uc3Qgc2xvdHNXaXRoTm9BcHBvaW50bWVudHMgPSBleGlzdGluZ1Nsb3RzLmZpbHRlcihcbiAgICAgICAgKHNsb3QpID0+ICFzbG90LmFwcG9pbnRtZW50XG4gICAgICApO1xuXG4gICAgICBpZiAoc2xvdHNXaXRoTm9BcHBvaW50bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZGVsZXRlTWFueSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgIGluOiBzbG90c1dpdGhOb0FwcG9pbnRtZW50cy5tYXAoKHNsb3QpID0+IHNsb3QuaWQpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbmV3IGF2YWlsYWJpbGl0eSBzbG90XG4gICAgY29uc3QgbmV3U2xvdCA9IGF3YWl0IGRiLmF2YWlsYWJpbGl0eS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKHN0YXJ0VGltZSksXG4gICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKGVuZFRpbWUpLFxuICAgICAgICBzdGF0dXM6IFwiQVZBSUxBQkxFXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNsb3Q6IG5ld1Nsb3QgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNldCBhdmFpbGFiaWxpdHkgc2xvdHM6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2V0IGF2YWlsYWJpbGl0eTogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBkb2N0b3IncyBjdXJyZW50IGF2YWlsYWJpbGl0eSBzbG90c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQXZhaWxhYmlsaXR5KCkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xuXG4gIGlmICghdXNlcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdmFpbGFiaWxpdHlTbG90cyA9IGF3YWl0IGRiLmF2YWlsYWJpbGl0eS5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgc3RhcnRUaW1lOiBcImFzY1wiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHNsb3RzOiBhdmFpbGFiaWxpdHlTbG90cyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhdmFpbGFiaWxpdHkgc2xvdHMgXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBkb2N0b3IncyB1cGNvbWluZyBhcHBvaW50bWVudHNcbiAqL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQXBwb2ludG1lbnRzKCkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xuXG4gIGlmICghdXNlcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBvaW50bWVudHMgPSBhd2FpdCBkYi5hcHBvaW50bWVudC5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBpbjogW1wiU0NIRURVTEVEXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIHN0YXJ0VGltZTogXCJhc2NcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBhcHBvaW50bWVudHMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYXBwb2ludG1lbnRzIFwiICsgZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDYW5jZWwgYW4gYXBwb2ludG1lbnQgKGNhbiBiZSBkb25lIGJ5IGJvdGggZG9jdG9yIGFuZCBwYXRpZW50KVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FuY2VsQXBwb2ludG1lbnQoZm9ybURhdGEpIHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcblxuICBpZiAoIXVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwb2ludG1lbnRJZCA9IGZvcm1EYXRhLmdldChcImFwcG9pbnRtZW50SWRcIik7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50SWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IElEIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIGFwcG9pbnRtZW50IHdpdGggYm90aCBwYXRpZW50IGFuZCBkb2N0b3IgZGV0YWlsc1xuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHBhdGllbnQ6IHRydWUsXG4gICAgICAgIGRvY3RvcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IHRoZSB1c2VyIGlzIGVpdGhlciB0aGUgZG9jdG9yIG9yIHRoZSBwYXRpZW50IGZvciB0aGlzIGFwcG9pbnRtZW50XG4gICAgaWYgKGFwcG9pbnRtZW50LmRvY3RvcklkICE9PSB1c2VyLmlkICYmIGFwcG9pbnRtZW50LnBhdGllbnRJZCAhPT0gdXNlci5pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBjYW5jZWwgdGhpcyBhcHBvaW50bWVudFwiKTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGNhbmNlbGxhdGlvbiBpbiBhIHRyYW5zYWN0aW9uXG4gICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xuICAgICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBzdGF0dXMgdG8gQ0FOQ0VMTEVEXG4gICAgICBhd2FpdCB0eC5hcHBvaW50bWVudC51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc3RhdHVzOiBcIkNBTkNFTExFRFwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFsd2F5cyByZWZ1bmQgY3JlZGl0cyB0byBwYXRpZW50IGFuZCBkZWR1Y3QgZnJvbSBkb2N0b3JcbiAgICAgIC8vIENyZWF0ZSBjcmVkaXQgdHJhbnNhY3Rpb24gZm9yIHBhdGllbnQgKHJlZnVuZClcbiAgICAgIGF3YWl0IHR4LmNyZWRpdFRyYW5zYWN0aW9uLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1c2VySWQ6IGFwcG9pbnRtZW50LnBhdGllbnRJZCxcbiAgICAgICAgICBhbW91bnQ6IDIsXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgY3JlZGl0IHRyYW5zYWN0aW9uIGZvciBkb2N0b3IgKGRlZHVjdGlvbilcbiAgICAgIGF3YWl0IHR4LmNyZWRpdFRyYW5zYWN0aW9uLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1c2VySWQ6IGFwcG9pbnRtZW50LmRvY3RvcklkLFxuICAgICAgICAgIGFtb3VudDogLTIsXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBVcGRhdGUgcGF0aWVudCdzIGNyZWRpdCBiYWxhbmNlIChpbmNyZW1lbnQpXG4gICAgICBhd2FpdCB0eC51c2VyLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQ6IGFwcG9pbnRtZW50LnBhdGllbnRJZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgIGluY3JlbWVudDogMixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBkb2N0b3IncyBjcmVkaXQgYmFsYW5jZSAoZGVjcmVtZW50KVxuICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBhcHBvaW50bWVudC5kb2N0b3JJZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgIGRlY3JlbWVudDogMixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBEZXRlcm1pbmUgd2hpY2ggcGF0aCB0byByZXZhbGlkYXRlIGJhc2VkIG9uIHVzZXIgcm9sZVxuICAgIGlmICh1c2VyLnJvbGUgPT09IFwiRE9DVE9SXCIpIHtcbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcbiAgICB9IGVsc2UgaWYgKHVzZXIucm9sZSA9PT0gXCJQQVRJRU5UXCIpIHtcbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2FwcG9pbnRtZW50c1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjYW5jZWwgYXBwb2ludG1lbnQ6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbi8qKlxuICogQWRkIG5vdGVzIHRvIGFuIGFwcG9pbnRtZW50XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRBcHBvaW50bWVudE5vdGVzKGZvcm1EYXRhKSB7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XG5cbiAgaWYgKCF1c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghZG9jdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcG9pbnRtZW50SWQgPSBmb3JtRGF0YS5nZXQoXCJhcHBvaW50bWVudElkXCIpO1xuICAgIGNvbnN0IG5vdGVzID0gZm9ybURhdGEuZ2V0KFwibm90ZXNcIik7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50SWQgfHwgIW5vdGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBJRCBhbmQgbm90ZXMgYXJlIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIC8vIFZlcmlmeSB0aGUgYXBwb2ludG1lbnQgYmVsb25ncyB0byB0aGlzIGRvY3RvclxuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgICAgZG9jdG9ySWQ6IGRvY3Rvci5pZCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBub3Rlc1xuICAgIGNvbnN0IHVwZGF0ZWRBcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5vdGVzLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhcHBvaW50bWVudDogdXBkYXRlZEFwcG9pbnRtZW50IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBhZGQgYXBwb2ludG1lbnQgbm90ZXM6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIG5vdGVzOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbi8qKlxuICogTWFyayBhbiBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQgKG9ubHkgYnkgZG9jdG9yIGFmdGVyIGVuZCB0aW1lKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FwcG9pbnRtZW50Q29tcGxldGVkKGZvcm1EYXRhKSB7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XG5cbiAgaWYgKCF1c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghZG9jdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcG9pbnRtZW50SWQgPSBmb3JtRGF0YS5nZXQoXCJhcHBvaW50bWVudElkXCIpO1xuXG4gICAgaWYgKCFhcHBvaW50bWVudElkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBJRCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIHRoZSBhcHBvaW50bWVudFxuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgICAgZG9jdG9ySWQ6IGRvY3Rvci5pZCwgLy8gRW5zdXJlIGFwcG9pbnRtZW50IGJlbG9uZ3MgdG8gdGhpcyBkb2N0b3JcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHBhdGllbnQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXBwb2ludG1lbnQgbm90IGZvdW5kIG9yIG5vdCBhdXRob3JpemVkXCIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFwcG9pbnRtZW50IGlzIGN1cnJlbnRseSBzY2hlZHVsZWRcbiAgICBpZiAoYXBwb2ludG1lbnQuc3RhdHVzICE9PSBcIlNDSEVEVUxFRFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IHNjaGVkdWxlZCBhcHBvaW50bWVudHMgY2FuIGJlIG1hcmtlZCBhcyBjb21wbGV0ZWRcIik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCB0aW1lIGlzIGFmdGVyIHRoZSBhcHBvaW50bWVudCBlbmQgdGltZVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgYXBwb2ludG1lbnRFbmRUaW1lID0gbmV3IERhdGUoYXBwb2ludG1lbnQuZW5kVGltZSk7XG5cbiAgICBpZiAobm93IDwgYXBwb2ludG1lbnRFbmRUaW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ2Fubm90IG1hcmsgYXBwb2ludG1lbnQgYXMgY29tcGxldGVkIGJlZm9yZSB0aGUgc2NoZWR1bGVkIGVuZCB0aW1lXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBzdGF0dXMgdG8gQ09NUExFVEVEXG4gICAgY29uc3QgdXBkYXRlZEFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdHVzOiBcIkNPTVBMRVRFRFwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhcHBvaW50bWVudDogdXBkYXRlZEFwcG9pbnRtZW50IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBtYXJrIGFwcG9pbnRtZW50IGFzIGNvbXBsZXRlZDpcIiwgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiRmFpbGVkIHRvIG1hcmsgYXBwb2ludG1lbnQgYXMgY29tcGxldGVkOiBcIiArIGVycm9yLm1lc3NhZ2VcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhSQThSc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:a97397 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40cb3ea76d4240e071bbd31ec050033b38398960da":"markAppointmentCompleted"},"actions/doctor.js",""] */ __turbopack_context__.s({
    "markAppointmentCompleted": (()=>markAppointmentCompleted)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var markAppointmentCompleted = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40cb3ea76d4240e071bbd31ec050033b38398960da", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markAppointmentCompleted"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9jdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcblxuLyoqXG4gKiBTZXQgZG9jdG9yJ3MgYXZhaWxhYmlsaXR5IHNsb3RzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRBdmFpbGFiaWxpdHlTbG90cyhmb3JtRGF0YSkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xuXG4gIGlmICghdXNlcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZXQgdGhlIGRvY3RvclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghZG9jdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIC8vIEdldCBmb3JtIGRhdGFcbiAgICBjb25zdCBzdGFydFRpbWUgPSBmb3JtRGF0YS5nZXQoXCJzdGFydFRpbWVcIik7XG4gICAgY29uc3QgZW5kVGltZSA9IGZvcm1EYXRhLmdldChcImVuZFRpbWVcIik7XG5cbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxuICAgIGlmICghc3RhcnRUaW1lIHx8ICFlbmRUaW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCB0aW1lIGFuZCBlbmQgdGltZSBhcmUgcmVxdWlyZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0VGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lXCIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSBkb2N0b3IgYWxyZWFkeSBoYXMgc2xvdHNcbiAgICBjb25zdCBleGlzdGluZ1Nsb3RzID0gYXdhaXQgZGIuYXZhaWxhYmlsaXR5LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gSWYgc2xvdHMgZXhpc3QsIGRlbGV0ZSB0aGVtIGFsbCAod2UncmUgcmVwbGFjaW5nIHRoZW0pXG4gICAgaWYgKGV4aXN0aW5nU2xvdHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gRG9uJ3QgZGVsZXRlIHNsb3RzIHRoYXQgYWxyZWFkeSBoYXZlIGFwcG9pbnRtZW50c1xuICAgICAgY29uc3Qgc2xvdHNXaXRoTm9BcHBvaW50bWVudHMgPSBleGlzdGluZ1Nsb3RzLmZpbHRlcihcbiAgICAgICAgKHNsb3QpID0+ICFzbG90LmFwcG9pbnRtZW50XG4gICAgICApO1xuXG4gICAgICBpZiAoc2xvdHNXaXRoTm9BcHBvaW50bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZGVsZXRlTWFueSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgIGluOiBzbG90c1dpdGhOb0FwcG9pbnRtZW50cy5tYXAoKHNsb3QpID0+IHNsb3QuaWQpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbmV3IGF2YWlsYWJpbGl0eSBzbG90XG4gICAgY29uc3QgbmV3U2xvdCA9IGF3YWl0IGRiLmF2YWlsYWJpbGl0eS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKHN0YXJ0VGltZSksXG4gICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKGVuZFRpbWUpLFxuICAgICAgICBzdGF0dXM6IFwiQVZBSUxBQkxFXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNsb3Q6IG5ld1Nsb3QgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNldCBhdmFpbGFiaWxpdHkgc2xvdHM6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2V0IGF2YWlsYWJpbGl0eTogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBkb2N0b3IncyBjdXJyZW50IGF2YWlsYWJpbGl0eSBzbG90c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQXZhaWxhYmlsaXR5KCkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xuXG4gIGlmICghdXNlcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdmFpbGFiaWxpdHlTbG90cyA9IGF3YWl0IGRiLmF2YWlsYWJpbGl0eS5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgc3RhcnRUaW1lOiBcImFzY1wiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHNsb3RzOiBhdmFpbGFiaWxpdHlTbG90cyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhdmFpbGFiaWxpdHkgc2xvdHMgXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBkb2N0b3IncyB1cGNvbWluZyBhcHBvaW50bWVudHNcbiAqL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQXBwb2ludG1lbnRzKCkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xuXG4gIGlmICghdXNlcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBvaW50bWVudHMgPSBhd2FpdCBkYi5hcHBvaW50bWVudC5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBpbjogW1wiU0NIRURVTEVEXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIHN0YXJ0VGltZTogXCJhc2NcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBhcHBvaW50bWVudHMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYXBwb2ludG1lbnRzIFwiICsgZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDYW5jZWwgYW4gYXBwb2ludG1lbnQgKGNhbiBiZSBkb25lIGJ5IGJvdGggZG9jdG9yIGFuZCBwYXRpZW50KVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FuY2VsQXBwb2ludG1lbnQoZm9ybURhdGEpIHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcblxuICBpZiAoIXVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwb2ludG1lbnRJZCA9IGZvcm1EYXRhLmdldChcImFwcG9pbnRtZW50SWRcIik7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50SWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IElEIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIGFwcG9pbnRtZW50IHdpdGggYm90aCBwYXRpZW50IGFuZCBkb2N0b3IgZGV0YWlsc1xuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHBhdGllbnQ6IHRydWUsXG4gICAgICAgIGRvY3RvcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IHRoZSB1c2VyIGlzIGVpdGhlciB0aGUgZG9jdG9yIG9yIHRoZSBwYXRpZW50IGZvciB0aGlzIGFwcG9pbnRtZW50XG4gICAgaWYgKGFwcG9pbnRtZW50LmRvY3RvcklkICE9PSB1c2VyLmlkICYmIGFwcG9pbnRtZW50LnBhdGllbnRJZCAhPT0gdXNlci5pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBjYW5jZWwgdGhpcyBhcHBvaW50bWVudFwiKTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGNhbmNlbGxhdGlvbiBpbiBhIHRyYW5zYWN0aW9uXG4gICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xuICAgICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBzdGF0dXMgdG8gQ0FOQ0VMTEVEXG4gICAgICBhd2FpdCB0eC5hcHBvaW50bWVudC51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc3RhdHVzOiBcIkNBTkNFTExFRFwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFsd2F5cyByZWZ1bmQgY3JlZGl0cyB0byBwYXRpZW50IGFuZCBkZWR1Y3QgZnJvbSBkb2N0b3JcbiAgICAgIC8vIENyZWF0ZSBjcmVkaXQgdHJhbnNhY3Rpb24gZm9yIHBhdGllbnQgKHJlZnVuZClcbiAgICAgIGF3YWl0IHR4LmNyZWRpdFRyYW5zYWN0aW9uLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1c2VySWQ6IGFwcG9pbnRtZW50LnBhdGllbnRJZCxcbiAgICAgICAgICBhbW91bnQ6IDIsXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgY3JlZGl0IHRyYW5zYWN0aW9uIGZvciBkb2N0b3IgKGRlZHVjdGlvbilcbiAgICAgIGF3YWl0IHR4LmNyZWRpdFRyYW5zYWN0aW9uLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1c2VySWQ6IGFwcG9pbnRtZW50LmRvY3RvcklkLFxuICAgICAgICAgIGFtb3VudDogLTIsXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBVcGRhdGUgcGF0aWVudCdzIGNyZWRpdCBiYWxhbmNlIChpbmNyZW1lbnQpXG4gICAgICBhd2FpdCB0eC51c2VyLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQ6IGFwcG9pbnRtZW50LnBhdGllbnRJZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgIGluY3JlbWVudDogMixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBkb2N0b3IncyBjcmVkaXQgYmFsYW5jZSAoZGVjcmVtZW50KVxuICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBhcHBvaW50bWVudC5kb2N0b3JJZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgIGRlY3JlbWVudDogMixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBEZXRlcm1pbmUgd2hpY2ggcGF0aCB0byByZXZhbGlkYXRlIGJhc2VkIG9uIHVzZXIgcm9sZVxuICAgIGlmICh1c2VyLnJvbGUgPT09IFwiRE9DVE9SXCIpIHtcbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcbiAgICB9IGVsc2UgaWYgKHVzZXIucm9sZSA9PT0gXCJQQVRJRU5UXCIpIHtcbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2FwcG9pbnRtZW50c1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjYW5jZWwgYXBwb2ludG1lbnQ6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbi8qKlxuICogQWRkIG5vdGVzIHRvIGFuIGFwcG9pbnRtZW50XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRBcHBvaW50bWVudE5vdGVzKGZvcm1EYXRhKSB7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XG5cbiAgaWYgKCF1c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghZG9jdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcG9pbnRtZW50SWQgPSBmb3JtRGF0YS5nZXQoXCJhcHBvaW50bWVudElkXCIpO1xuICAgIGNvbnN0IG5vdGVzID0gZm9ybURhdGEuZ2V0KFwibm90ZXNcIik7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50SWQgfHwgIW5vdGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBJRCBhbmQgbm90ZXMgYXJlIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIC8vIFZlcmlmeSB0aGUgYXBwb2ludG1lbnQgYmVsb25ncyB0byB0aGlzIGRvY3RvclxuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgICAgZG9jdG9ySWQ6IGRvY3Rvci5pZCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBub3Rlc1xuICAgIGNvbnN0IHVwZGF0ZWRBcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5vdGVzLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhcHBvaW50bWVudDogdXBkYXRlZEFwcG9pbnRtZW50IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBhZGQgYXBwb2ludG1lbnQgbm90ZXM6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIG5vdGVzOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbi8qKlxuICogTWFyayBhbiBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQgKG9ubHkgYnkgZG9jdG9yIGFmdGVyIGVuZCB0aW1lKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FwcG9pbnRtZW50Q29tcGxldGVkKGZvcm1EYXRhKSB7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XG5cbiAgaWYgKCF1c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghZG9jdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcG9pbnRtZW50SWQgPSBmb3JtRGF0YS5nZXQoXCJhcHBvaW50bWVudElkXCIpO1xuXG4gICAgaWYgKCFhcHBvaW50bWVudElkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBJRCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIHRoZSBhcHBvaW50bWVudFxuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgICAgZG9jdG9ySWQ6IGRvY3Rvci5pZCwgLy8gRW5zdXJlIGFwcG9pbnRtZW50IGJlbG9uZ3MgdG8gdGhpcyBkb2N0b3JcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHBhdGllbnQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXBwb2ludG1lbnQgbm90IGZvdW5kIG9yIG5vdCBhdXRob3JpemVkXCIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFwcG9pbnRtZW50IGlzIGN1cnJlbnRseSBzY2hlZHVsZWRcbiAgICBpZiAoYXBwb2ludG1lbnQuc3RhdHVzICE9PSBcIlNDSEVEVUxFRFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IHNjaGVkdWxlZCBhcHBvaW50bWVudHMgY2FuIGJlIG1hcmtlZCBhcyBjb21wbGV0ZWRcIik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCB0aW1lIGlzIGFmdGVyIHRoZSBhcHBvaW50bWVudCBlbmQgdGltZVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgYXBwb2ludG1lbnRFbmRUaW1lID0gbmV3IERhdGUoYXBwb2ludG1lbnQuZW5kVGltZSk7XG5cbiAgICBpZiAobm93IDwgYXBwb2ludG1lbnRFbmRUaW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ2Fubm90IG1hcmsgYXBwb2ludG1lbnQgYXMgY29tcGxldGVkIGJlZm9yZSB0aGUgc2NoZWR1bGVkIGVuZCB0aW1lXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBzdGF0dXMgdG8gQ09NUExFVEVEXG4gICAgY29uc3QgdXBkYXRlZEFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdHVzOiBcIkNPTVBMRVRFRFwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhcHBvaW50bWVudDogdXBkYXRlZEFwcG9pbnRtZW50IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBtYXJrIGFwcG9pbnRtZW50IGFzIGNvbXBsZXRlZDpcIiwgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiRmFpbGVkIHRvIG1hcmsgYXBwb2ludG1lbnQgYXMgY29tcGxldGVkOiBcIiArIGVycm9yLm1lc3NhZ2VcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQXlWc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:430841 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4007a7b7766cf9903814cd52515512819dbe0fb523":"generateVideoToken"},"actions/appointments.js",""] */ __turbopack_context__.s({
    "generateVideoToken": (()=>generateVideoToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateVideoToken = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4007a7b7766cf9903814cd52515512819dbe0fb523", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateVideoToken"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXBwb2ludG1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbi8vIGRlZHVjdENyZWRpdHNGb3JBcHBvaW50bWVudCBoYW5kbGVkIGluc2lkZSBib29raW5nIHRyYW5zYWN0aW9uIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9uc1xuaW1wb3J0IHsgVm9uYWdlIH0gZnJvbSBcIkB2b25hZ2Uvc2VydmVyLXNka1wiO1xuaW1wb3J0IHsgYWRkRGF5cywgYWRkTWludXRlcywgZm9ybWF0LCBpc0JlZm9yZSwgZW5kT2ZEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEF1dGggfSBmcm9tIFwiQHZvbmFnZS9hdXRoXCI7XG5cbi8vIEluaXRpYWxpemUgVm9uYWdlIFZpZGVvIEFQSSBjbGllbnRcbmNvbnN0IGNyZWRlbnRpYWxzID0gbmV3IEF1dGgoe1xuICBhcHBsaWNhdGlvbklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WT05BR0VfQVBQTElDQVRJT05fSUQsXG4gIHByaXZhdGVLZXk6IHByb2Nlc3MuZW52LlZPTkFHRV9QUklWQVRFX0tFWSxcbn0pO1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuY29uc3Qgdm9uYWdlID0gbmV3IFZvbmFnZShjcmVkZW50aWFscywgb3B0aW9ucyk7XG5cbi8qKlxuICogQm9vayBhIG5ldyBhcHBvaW50bWVudCB3aXRoIGEgZG9jdG9yXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBib29rQXBwb2ludG1lbnQoZm9ybURhdGEpIHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcblxuICBpZiAoIXVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gR2V0IHRoZSBwYXRpZW50IHVzZXJcbiAgICBjb25zdCBwYXRpZW50ID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXG4gICAgICAgIHJvbGU6IFwiUEFUSUVOVFwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghcGF0aWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGF0aWVudCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgLy8gUGFyc2UgZm9ybSBkYXRhXG4gICAgY29uc3QgZG9jdG9ySWQgPSBmb3JtRGF0YS5nZXQoXCJkb2N0b3JJZFwiKTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJzdGFydFRpbWVcIikpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJlbmRUaW1lXCIpKTtcbiAgICBjb25zdCBwYXRpZW50RGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSB8fCBudWxsO1xuXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRcbiAgICBpZiAoIWRvY3RvcklkIHx8ICFzdGFydFRpbWUgfHwgIWVuZFRpbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3Rvciwgc3RhcnQgdGltZSwgYW5kIGVuZCB0aW1lIGFyZSByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZG9jdG9yIGV4aXN0cyBhbmQgaXMgdmVyaWZpZWRcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGRvY3RvcklkLFxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxuICAgICAgICB2ZXJpZmljYXRpb25TdGF0dXM6IFwiVkVSSUZJRURcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWRvY3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZCBvciBub3QgdmVyaWZpZWRcIik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBhdGllbnQgaGFzIGVub3VnaCBjcmVkaXRzICgyIGNyZWRpdHMgcGVyIGFwcG9pbnRtZW50KVxuICAgIGlmIChwYXRpZW50LmNyZWRpdHMgPCAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnN1ZmZpY2llbnQgY3JlZGl0cyB0byBib29rIGFuIGFwcG9pbnRtZW50XCIpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIG5ldyBWb25hZ2UgVmlkZW8gQVBJIHNlc3Npb24gKGRvIHRoaXMgYmVmb3JlIERCIHR4KVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IGF3YWl0IGNyZWF0ZVZpZGVvU2Vzc2lvbigpO1xuXG4gICAgLy8gUGVyZm9ybSBvdmVybGFwIGNoZWNrcywgY3JlZGl0IHRyYW5zZmVyIGFuZCBhcHBvaW50bWVudCBjcmVhdGlvbiBpbnNpZGUgYSBzaW5nbGUgc2VyaWFsaXphYmxlIHRyYW5zYWN0aW9uXG4gICAgY29uc3QgYXBwb2ludG1lbnQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oXG4gICAgICBhc3luYyAodHgpID0+IHtcbiAgICAgICAgLy8gUmUtZmV0Y2ggcGF0aWVudCBhbmQgZG9jdG9yIGluc2lkZSB0cmFuc2FjdGlvbiB0byBlbnN1cmUgdXAtdG8tZGF0ZSB2YWx1ZXNcbiAgICAgICAgY29uc3QgdHhQYXRpZW50ID0gYXdhaXQgdHgudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHBhdGllbnQuaWQgfSB9KTtcbiAgICAgICAgY29uc3QgdHhEb2N0b3IgPSBhd2FpdCB0eC51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogZG9jdG9yLmlkIH0gfSk7XG5cbiAgICAgICAgaWYgKCF0eFBhdGllbnQpIHRocm93IG5ldyBFcnJvcihcIlBhdGllbnQgbm90IGZvdW5kICh0eClcIik7XG4gICAgICAgIGlmICghdHhEb2N0b3IpIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmQgKHR4KVwiKTtcblxuICAgICAgICAvLyBDaGVjayBvdmVybGFwcGluZyBhcHBvaW50bWVudHMgZm9yIGRvY3RvclxuICAgICAgICBjb25zdCBvdmVybGFwcGluZ0ZvckRvY3RvciA9IGF3YWl0IHR4LmFwcG9pbnRtZW50LmZpbmRGaXJzdCh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGRvY3RvcklkOiBkb2N0b3JJZCxcbiAgICAgICAgICAgIHN0YXR1czogXCJTQ0hFRFVMRURcIixcbiAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHsgbHRlOiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiB7IGd0OiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogeyBsdDogZW5kVGltZSB9LFxuICAgICAgICAgICAgICAgIGVuZFRpbWU6IHsgZ3RlOiBlbmRUaW1lIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHsgZ3RlOiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiB7IGx0ZTogZW5kVGltZSB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob3ZlcmxhcHBpbmdGb3JEb2N0b3IpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHRpbWUgc2xvdCBpcyBhbHJlYWR5IGJvb2tlZCBmb3IgdGhlIGRvY3RvclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIG92ZXJsYXBwaW5nIGFwcG9pbnRtZW50cyBmb3IgcGF0aWVudCAocHJldmVudCBwYXRpZW50IGJvb2tpbmcgbXVsdGlwbGUgYXQgc2FtZSB0aW1lKVxuICAgICAgICBjb25zdCBvdmVybGFwcGluZ0ZvclBhdGllbnQgPSBhd2FpdCB0eC5hcHBvaW50bWVudC5maW5kRmlyc3Qoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBwYXRpZW50SWQ6IHR4UGF0aWVudC5pZCxcbiAgICAgICAgICAgIHN0YXR1czogXCJTQ0hFRFVMRURcIixcbiAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHsgbHRlOiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiB7IGd0OiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogeyBsdDogZW5kVGltZSB9LFxuICAgICAgICAgICAgICAgIGVuZFRpbWU6IHsgZ3RlOiBlbmRUaW1lIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHsgZ3RlOiBzdGFydFRpbWUgfSxcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiB7IGx0ZTogZW5kVGltZSB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob3ZlcmxhcHBpbmdGb3JQYXRpZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFscmVhZHkgaGF2ZSBhbiBhcHBvaW50bWVudCBhdCB0aGlzIHRpbWVcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbnN1cmUgcGF0aWVudCBoYXMgc3VmZmljaWVudCBjcmVkaXRzIGluc2lkZSB0cmFuc2FjdGlvblxuICAgICAgICBpZiAodHhQYXRpZW50LmNyZWRpdHMgPCAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5zdWZmaWNpZW50IGNyZWRpdHMgdG8gYm9vayBhbiBhcHBvaW50bWVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBjcmVkaXQgdHJhbnNhY3Rpb25zIGFuZCB1cGRhdGUgYmFsYW5jZXNcbiAgICAgICAgYXdhaXQgdHguY3JlZGl0VHJhbnNhY3Rpb24uY3JlYXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB1c2VySWQ6IHR4UGF0aWVudC5pZCxcbiAgICAgICAgICAgIGFtb3VudDogLTIsXG4gICAgICAgICAgICB0eXBlOiBcIkFQUE9JTlRNRU5UX0RFRFVDVElPTlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHR4LmNyZWRpdFRyYW5zYWN0aW9uLmNyZWF0ZSh7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXNlcklkOiB0eERvY3Rvci5pZCxcbiAgICAgICAgICAgIGFtb3VudDogMixcbiAgICAgICAgICAgIHR5cGU6IFwiQVBQT0lOVE1FTlRfREVEVUNUSU9OXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0eFBhdGllbnQuaWQgfSxcbiAgICAgICAgICBkYXRhOiB7IGNyZWRpdHM6IHsgZGVjcmVtZW50OiAyIH0gfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0eERvY3Rvci5pZCB9LFxuICAgICAgICAgIGRhdGE6IHsgY3JlZGl0czogeyBpbmNyZW1lbnQ6IDIgfSB9LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGFwcG9pbnRtZW50XG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCB0eC5hcHBvaW50bWVudC5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBhdGllbnRJZDogdHhQYXRpZW50LmlkLFxuICAgICAgICAgICAgZG9jdG9ySWQ6IHR4RG9jdG9yLmlkLFxuICAgICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgICAgZW5kVGltZSxcbiAgICAgICAgICAgIHBhdGllbnREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHN0YXR1czogXCJTQ0hFRFVMRURcIixcbiAgICAgICAgICAgIHZpZGVvU2Vzc2lvbklkOiBzZXNzaW9uSWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XG4gICAgICB9LFxuICAgICAgeyBpc29sYXRpb25MZXZlbDogXCJTZXJpYWxpemFibGVcIiB9XG4gICAgKTtcblxuICByZXZhbGlkYXRlUGF0aChcIi9hcHBvaW50bWVudHNcIik7XG4gIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYXBwb2ludG1lbnQ6IGFwcG9pbnRtZW50IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBib29rIGFwcG9pbnRtZW50OlwiLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGJvb2sgYXBwb2ludG1lbnQ6XCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgVm9uYWdlIFZpZGVvIEFQSSBzZXNzaW9uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVZpZGVvU2Vzc2lvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgdm9uYWdlLnZpZGVvLmNyZWF0ZVNlc3Npb24oeyBtZWRpYU1vZGU6IFwicm91dGVkXCIgfSk7XG4gICAgcmV0dXJuIHNlc3Npb24uc2Vzc2lvbklkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgdmlkZW8gc2Vzc2lvbjogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgdG9rZW4gZm9yIGEgdmlkZW8gc2Vzc2lvblxuICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIGVpdGhlciBkb2N0b3Igb3IgcGF0aWVudCBpcyBhYm91dCB0byBqb2luIHRoZSBjYWxsXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVZpZGVvVG9rZW4oZm9ybURhdGEpIHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcblxuICBpZiAoIXVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwb2ludG1lbnRJZCA9IGZvcm1EYXRhLmdldChcImFwcG9pbnRtZW50SWRcIik7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50SWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IElEIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIGFwcG9pbnRtZW50IGFuZCB2ZXJpZnkgdGhlIHVzZXIgaXMgcGFydCBvZiBpdFxuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IHRoZSB1c2VyIGlzIGVpdGhlciB0aGUgZG9jdG9yIG9yIHRoZSBwYXRpZW50IGZvciB0aGlzIGFwcG9pbnRtZW50XG4gICAgaWYgKGFwcG9pbnRtZW50LmRvY3RvcklkICE9PSB1c2VyLmlkICYmIGFwcG9pbnRtZW50LnBhdGllbnRJZCAhPT0gdXNlci5pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBqb2luIHRoaXMgY2FsbFwiKTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgdGhlIGFwcG9pbnRtZW50IGlzIHNjaGVkdWxlZFxuICAgIGlmIChhcHBvaW50bWVudC5zdGF0dXMgIT09IFwiU0NIRURVTEVEXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgYXBwb2ludG1lbnQgaXMgbm90IGN1cnJlbnRseSBzY2hlZHVsZWRcIik7XG4gICAgfVxuXG4gICAgLy8gVmVyaWZ5IHRoZSBhcHBvaW50bWVudCBpcyB3aXRoaW4gYSB2YWxpZCB0aW1lIHJhbmdlIChlLmcuLCBzdGFydGluZyA1IG1pbnV0ZXMgYmVmb3JlIHNjaGVkdWxlZCB0aW1lKVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgYXBwb2ludG1lbnRUaW1lID0gbmV3IERhdGUoYXBwb2ludG1lbnQuc3RhcnRUaW1lKTtcbiAgICBjb25zdCB0aW1lRGlmZmVyZW5jZSA9IChhcHBvaW50bWVudFRpbWUgLSBub3cpIC8gKDEwMDAgKiA2MCk7IC8vIGRpZmZlcmVuY2UgaW4gbWludXRlc1xuXG4gICAgaWYgKHRpbWVEaWZmZXJlbmNlID4gMzApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJUaGUgY2FsbCB3aWxsIGJlIGF2YWlsYWJsZSAzMCBtaW51dGVzIGJlZm9yZSB0aGUgc2NoZWR1bGVkIHRpbWVcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBhIHRva2VuIGZvciB0aGUgdmlkZW8gc2Vzc2lvblxuICAgIC8vIFRva2VuIGV4cGlyZXMgMiBob3VycyBhZnRlciB0aGUgYXBwb2ludG1lbnQgc3RhcnQgdGltZVxuICAgIGNvbnN0IGFwcG9pbnRtZW50RW5kVGltZSA9IG5ldyBEYXRlKGFwcG9pbnRtZW50LmVuZFRpbWUpO1xuICAgIGNvbnN0IGV4cGlyYXRpb25UaW1lID1cbiAgICAgIE1hdGguZmxvb3IoYXBwb2ludG1lbnRFbmRUaW1lLmdldFRpbWUoKSAvIDEwMDApICsgNjAgKiA2MDsgLy8gMSBob3VyIGFmdGVyIGVuZCB0aW1lXG5cbiAgICAvLyBVc2UgdXNlcidzIG5hbWUgYW5kIHJvbGUgYXMgY29ubmVjdGlvbiBkYXRhXG4gICAgY29uc3QgY29ubmVjdGlvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgfSk7XG5cbiAgICAvLyBHZW5lcmF0ZSB0aGUgdG9rZW4gd2l0aCBhcHByb3ByaWF0ZSByb2xlIGFuZCBleHBpcmF0aW9uXG4gICAgY29uc3QgdG9rZW4gPSB2b25hZ2UudmlkZW8uZ2VuZXJhdGVDbGllbnRUb2tlbihhcHBvaW50bWVudC52aWRlb1Nlc3Npb25JZCwge1xuICAgICAgcm9sZTogXCJwdWJsaXNoZXJcIiwgLy8gQm90aCBkb2N0b3IgYW5kIHBhdGllbnQgY2FuIHB1Ymxpc2ggc3RyZWFtc1xuICAgICAgZXhwaXJlVGltZTogZXhwaXJhdGlvblRpbWUsXG4gICAgICBkYXRhOiBjb25uZWN0aW9uRGF0YSxcbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgYXBwb2ludG1lbnQgd2l0aCB0aGUgdG9rZW5cbiAgICBhd2FpdCBkYi5hcHBvaW50bWVudC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGFwcG9pbnRtZW50SWQsXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICB2aWRlb1Nlc3Npb25Ub2tlbjogdG9rZW4sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICB2aWRlb1Nlc3Npb25JZDogYXBwb2ludG1lbnQudmlkZW9TZXNzaW9uSWQsXG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIHZpZGVvIHRva2VuOlwiLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIHZpZGVvIHRva2VuOlwiICsgZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgZG9jdG9yIGJ5IElEXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N0b3JCeUlkKGRvY3RvcklkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jdG9yID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBkb2N0b3JJZCxcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcbiAgICAgICAgdmVyaWZpY2F0aW9uU3RhdHVzOiBcIlZFUklGSUVEXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFkb2N0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZG9jdG9yIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkb2N0b3I6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZG9jdG9yIGRldGFpbHNcIik7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYXZhaWxhYmxlIHRpbWUgc2xvdHMgZm9yIGJvb2tpbmcgZm9yIHRoZSBuZXh0IDQgZGF5c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlVGltZVNsb3RzKGRvY3RvcklkKSB7XG4gIHRyeSB7XG4gICAgLy8gVmFsaWRhdGUgZG9jdG9yIGV4aXN0ZW5jZSBhbmQgdmVyaWZpY2F0aW9uXG4gICAgY29uc3QgZG9jdG9yID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBkb2N0b3JJZCxcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcbiAgICAgICAgdmVyaWZpY2F0aW9uU3RhdHVzOiBcIlZFUklGSUVEXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFkb2N0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmQgb3Igbm90IHZlcmlmaWVkXCIpO1xuICAgIH1cblxuICAgIC8vIEZldGNoIGEgc2luZ2xlIGF2YWlsYWJpbGl0eSByZWNvcmRcbiAgICBjb25zdCBhdmFpbGFiaWxpdHkgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWF2YWlsYWJpbGl0eSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYXZhaWxhYmlsaXR5IHNldCBieSBkb2N0b3JcIik7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBuZXh0IDQgZGF5c1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF5cyA9IFtub3csIGFkZERheXMobm93LCAxKSwgYWRkRGF5cyhub3csIDIpLCBhZGREYXlzKG5vdywgMyldO1xuXG4gICAgLy8gRmV0Y2ggZXhpc3RpbmcgYXBwb2ludG1lbnRzIGZvciB0aGUgZG9jdG9yIG92ZXIgdGhlIG5leHQgNCBkYXlzXG4gICAgY29uc3QgbGFzdERheSA9IGVuZE9mRGF5KGRheXNbM10pO1xuICAgIGNvbnN0IGV4aXN0aW5nQXBwb2ludG1lbnRzID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZG9jdG9ySWQ6IGRvY3Rvci5pZCxcbiAgICAgICAgc3RhdHVzOiBcIlNDSEVEVUxFRFwiLFxuICAgICAgICBzdGFydFRpbWU6IHtcbiAgICAgICAgICBsdGU6IGxhc3REYXksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlU2xvdHNCeURheSA9IHt9O1xuXG4gICAgLy8gRm9yIGVhY2ggb2YgdGhlIG5leHQgNCBkYXlzLCBnZW5lcmF0ZSBhdmFpbGFibGUgc2xvdHNcbiAgICBmb3IgKGNvbnN0IGRheSBvZiBkYXlzKSB7XG4gICAgICBjb25zdCBkYXlTdHJpbmcgPSBmb3JtYXQoZGF5LCBcInl5eXktTU0tZGRcIik7XG4gICAgICBhdmFpbGFibGVTbG90c0J5RGF5W2RheVN0cmluZ10gPSBbXTtcblxuICAgICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgYXZhaWxhYmlsaXR5IHN0YXJ0L2VuZCB0aW1lcyBmb3IgdGhpcyBkYXlcbiAgICAgIGNvbnN0IGF2YWlsYWJpbGl0eVN0YXJ0ID0gbmV3IERhdGUoYXZhaWxhYmlsaXR5LnN0YXJ0VGltZSk7XG4gICAgICBjb25zdCBhdmFpbGFiaWxpdHlFbmQgPSBuZXcgRGF0ZShhdmFpbGFiaWxpdHkuZW5kVGltZSk7XG5cbiAgICAgIC8vIFNldCB0aGUgZGF5IHRvIHRoZSBjdXJyZW50IGRheSB3ZSdyZSBwcm9jZXNzaW5nXG4gICAgICBhdmFpbGFiaWxpdHlTdGFydC5zZXRGdWxsWWVhcihcbiAgICAgICAgZGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGRheS5nZXRNb250aCgpLFxuICAgICAgICBkYXkuZ2V0RGF0ZSgpXG4gICAgICApO1xuICAgICAgYXZhaWxhYmlsaXR5RW5kLnNldEZ1bGxZZWFyKFxuICAgICAgICBkYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF5LmdldE1vbnRoKCksXG4gICAgICAgIGRheS5nZXREYXRlKClcbiAgICAgICk7XG5cbiAgICAgIGxldCBjdXJyZW50ID0gbmV3IERhdGUoYXZhaWxhYmlsaXR5U3RhcnQpO1xuICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoYXZhaWxhYmlsaXR5RW5kKTtcblxuICAgICAgd2hpbGUgKFxuICAgICAgICBpc0JlZm9yZShhZGRNaW51dGVzKGN1cnJlbnQsIDMwKSwgZW5kKSB8fFxuICAgICAgICArYWRkTWludXRlcyhjdXJyZW50LCAzMCkgPT09ICtlbmRcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXh0ID0gYWRkTWludXRlcyhjdXJyZW50LCAzMCk7XG5cbiAgICAgICAgLy8gU2tpcCBwYXN0IHNsb3RzXG4gICAgICAgIGlmIChpc0JlZm9yZShjdXJyZW50LCBub3cpKSB7XG4gICAgICAgICAgY3VycmVudCA9IG5leHQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdmVybGFwcyA9IGV4aXN0aW5nQXBwb2ludG1lbnRzLnNvbWUoKGFwcG9pbnRtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYVN0YXJ0ID0gbmV3IERhdGUoYXBwb2ludG1lbnQuc3RhcnRUaW1lKTtcbiAgICAgICAgICBjb25zdCBhRW5kID0gbmV3IERhdGUoYXBwb2ludG1lbnQuZW5kVGltZSk7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKGN1cnJlbnQgPj0gYVN0YXJ0ICYmIGN1cnJlbnQgPCBhRW5kKSB8fFxuICAgICAgICAgICAgKG5leHQgPiBhU3RhcnQgJiYgbmV4dCA8PSBhRW5kKSB8fFxuICAgICAgICAgICAgKGN1cnJlbnQgPD0gYVN0YXJ0ICYmIG5leHQgPj0gYUVuZClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW92ZXJsYXBzKSB7XG4gICAgICAgICAgYXZhaWxhYmxlU2xvdHNCeURheVtkYXlTdHJpbmddLnB1c2goe1xuICAgICAgICAgICAgc3RhcnRUaW1lOiBjdXJyZW50LnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICBlbmRUaW1lOiBuZXh0LnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICBmb3JtYXR0ZWQ6IGAke2Zvcm1hdChjdXJyZW50LCBcImg6bW0gYVwiKX0gLSAke2Zvcm1hdChcbiAgICAgICAgICAgICAgbmV4dCxcbiAgICAgICAgICAgICAgXCJoOm1tIGFcIlxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgZGF5OiBmb3JtYXQoY3VycmVudCwgXCJFRUVFLCBNTU1NIGRcIiksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRvIGFycmF5IG9mIHNsb3RzIGdyb3VwZWQgYnkgZGF5IGZvciBlYXNpZXIgY29uc3VtcHRpb24gYnkgdGhlIFVJXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmVudHJpZXMoYXZhaWxhYmxlU2xvdHNCeURheSkubWFwKChbZGF0ZSwgc2xvdHNdKSA9PiAoe1xuICAgICAgZGF0ZSxcbiAgICAgIGRpc3BsYXlEYXRlOlxuICAgICAgICBzbG90cy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBzbG90c1swXS5kYXlcbiAgICAgICAgICA6IGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgXCJFRUVFLCBNTU1NIGRcIiksXG4gICAgICBzbG90cyxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBkYXlzOiByZXN1bHQgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGF2YWlsYWJsZSBzbG90czpcIiwgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhdmFpbGFibGUgdGltZSBzbG90czogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0FrTnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/use-fetch.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useFetch = (cb)=>{
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fn = async (...args)=>{
        setLoading(true);
        setError(null);
        try {
            const response = await cb(...args);
            setData(response);
            setError(null);
        } catch (error) {
            setError(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message);
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
_s(useFetch, "8KEFxYyzWRSbmTzZx2DUwTqeMkc=");
const __TURBOPACK__default__export__ = useFetch;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/appointment-card.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppointmentCard": (()=>AppointmentCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$858d5d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:858d5d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$3f9b4d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:3f9b4d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$a97397__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:a97397 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$430841__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:430841 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
function AppointmentCard({ appointment, userRole, refetchAppointments }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // 'cancel', 'notes', 'video', or 'complete'
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(appointment.notes || "");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // UseFetch hooks for server actions
    const { loading: cancelLoading, fn: submitCancel, data: cancelData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$858d5d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["cancelAppointment"]);
    const { loading: notesLoading, fn: submitNotes, data: notesData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$3f9b4d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addAppointmentNotes"]);
    const { loading: tokenLoading, fn: submitTokenRequest, data: tokenData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$430841__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateVideoToken"]);
    const { loading: completeLoading, fn: submitMarkCompleted, data: completeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$a97397__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markAppointmentCompleted"]);
    // Format date and time
    const formatDateTime = (dateString)=>{
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(dateString), "MMMM d, yyyy 'at' h:mm a");
        } catch (e) {
            return "Invalid date";
        }
    };
    // Format time only
    const formatTime = (dateString)=>{
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(dateString), "h:mm a");
        } catch (e) {
            return "Invalid time";
        }
    };
    // Check if appointment can be marked as completed
    const canMarkCompleted = ()=>{
        if (userRole !== "DOCTOR" || appointment.status !== "SCHEDULED") {
            return false;
        }
        const now = new Date();
        const appointmentEndTime = new Date(appointment.endTime);
        return now >= appointmentEndTime;
    };
    // Handle cancel appointment
    const handleCancelAppointment = async ()=>{
        if (cancelLoading) return;
        if (window.confirm("Are you sure you want to cancel this appointment? This action cannot be undone.")) {
            const formData = new FormData();
            formData.append("appointmentId", appointment.id);
            await submitCancel(formData);
        }
    };
    // Handle mark as completed
    const handleMarkCompleted = async ()=>{
        if (completeLoading) return;
        // Check if appointment end time has passed
        const now = new Date();
        const appointmentEndTime = new Date(appointment.endTime);
        if (now < appointmentEndTime) {
            alert("Cannot mark appointment as completed before the scheduled end time.");
            return;
        }
        if (window.confirm("Are you sure you want to mark this appointment as completed? This action cannot be undone.")) {
            const formData = new FormData();
            formData.append("appointmentId", appointment.id);
            await submitMarkCompleted(formData);
        }
    };
    // Handle save notes (doctor only)
    const handleSaveNotes = async ()=>{
        if (notesLoading || userRole !== "DOCTOR") return;
        const formData = new FormData();
        formData.append("appointmentId", appointment.id);
        formData.append("notes", notes);
        await submitNotes(formData);
    };
    // Handle join video call
    const handleJoinVideoCall = async ()=>{
        if (tokenLoading) return;
        setAction("video");
        const formData = new FormData();
        formData.append("appointmentId", appointment.id);
        await submitTokenRequest(formData);
    };
    // Handle successful operations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentCard.useEffect": ()=>{
            if (cancelData?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Appointment cancelled successfully");
                setOpen(false);
                if (refetchAppointments) {
                    refetchAppointments();
                } else {
                    router.refresh();
                }
            }
        }
    }["AppointmentCard.useEffect"], [
        cancelData,
        refetchAppointments,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentCard.useEffect": ()=>{
            if (completeData?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Appointment marked as completed");
                setOpen(false);
                if (refetchAppointments) {
                    refetchAppointments();
                } else {
                    router.refresh();
                }
            }
        }
    }["AppointmentCard.useEffect"], [
        completeData,
        refetchAppointments,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentCard.useEffect": ()=>{
            if (notesData?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Notes saved successfully");
                setAction(null);
                if (refetchAppointments) {
                    refetchAppointments();
                } else {
                    router.refresh();
                }
            }
        }
    }["AppointmentCard.useEffect"], [
        notesData,
        refetchAppointments,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentCard.useEffect": ()=>{
            if (tokenData?.success) {
                // Redirect to video call page with token and session ID
                router.push(`/video-call?sessionId=${tokenData.videoSessionId}&token=${tokenData.token}&appointmentId=${appointment.id}`);
            } else if (tokenData?.error) {
                setAction(null);
            }
        }
    }["AppointmentCard.useEffect"], [
        tokenData,
        appointment.id,
        router
    ]);
    // Determine if appointment is active (within 30 minutes of start time)
    const isAppointmentActive = ()=>{
        const now = new Date();
        const appointmentTime = new Date(appointment.startTime);
        const appointmentEndTime = new Date(appointment.endTime);
        // Can join 30 minutes before start until end time
        return appointmentTime.getTime() - now.getTime() <= 30 * 60 * 1000 && now < appointmentTime || now >= appointmentTime && now <= appointmentEndTime;
    };
    // Determine other party information based on user role
    const otherParty = userRole === "DOCTOR" ? appointment.patient : appointment.doctor;
    const otherPartyLabel = userRole === "DOCTOR" ? "Patient" : "Doctor";
    const otherPartyIcon = userRole === "DOCTOR" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {}, void 0, false, {
        fileName: "[project]/components/appointment-card.jsx",
        lineNumber: 227,
        columnNumber: 50
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {}, void 0, false, {
        fileName: "[project]/components/appointment-card.jsx",
        lineNumber: 227,
        columnNumber: 61
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-emerald-900/20 hover:border-emerald-700/30 transition-all",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-muted/20 rounded-full p-2 mt-1",
                                        children: otherPartyIcon
                                    }, void 0, false, {
                                        fileName: "[project]/components/appointment-card.jsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-medium text-white",
                                                children: userRole === "DOCTOR" ? otherParty.name : `Dr. ${otherParty.name}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            userRole === "DOCTOR" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: otherParty.email
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            userRole === "PATIENT" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: otherParty.specialty
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mt-2 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 255,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: formatDateTime(appointment.startTime)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mt-1 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 259,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            formatTime(appointment.startTime),
                                                            " -",
                                                            " ",
                                                            formatTime(appointment.endTime)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/appointment-card.jsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/appointment-card.jsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 self-end md:self-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: appointment.status === "COMPLETED" ? "bg-emerald-900/20 border-emerald-900/30 text-emerald-400" : appointment.status === "CANCELLED" ? "bg-red-900/20 border-red-900/30 text-red-400" : "bg-amber-900/20 border-amber-900/30 text-amber-400",
                                        children: appointment.status
                                    }, void 0, false, {
                                        fileName: "[project]/components/appointment-card.jsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mt-2 flex-wrap",
                                        children: [
                                            canMarkCompleted() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                onClick: handleMarkCompleted,
                                                disabled: completeLoading,
                                                className: "bg-emerald-600 hover:bg-emerald-700",
                                                children: completeLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 289,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 292,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Complete"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "outline",
                                                className: "border-emerald-900/30",
                                                onClick: ()=>setOpen(true),
                                                children: "View Details"
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/appointment-card.jsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/appointment-card.jsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/appointment-card.jsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/appointment-card.jsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/appointment-card.jsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: open,
                onOpenChange: setOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-xl font-bold text-white",
                                    children: "Appointment Details"
                                }, void 0, false, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: appointment.status === "SCHEDULED" ? "Manage your upcoming appointment" : "View appointment information"
                                }, void 0, false, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/appointment-card.jsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: otherPartyLabel
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-5 w-5 text-emerald-400 mr-2",
                                                    children: otherPartyIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-medium",
                                                            children: userRole === "DOCTOR" ? otherParty.name : `Dr. ${otherParty.name}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 337,
                                                            columnNumber: 19
                                                        }, this),
                                                        userRole === "DOCTOR" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children: otherParty.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 343,
                                                            columnNumber: 21
                                                        }, this),
                                                        userRole === "PATIENT" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children: otherParty.specialty
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 348,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Scheduled Time"
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "h-5 w-5 text-emerald-400 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 363,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white",
                                                            children: formatDateTime(appointment.startTime)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 364,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 362,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "h-5 w-5 text-emerald-400 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 369,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white",
                                                            children: [
                                                                formatTime(appointment.startTime),
                                                                " -",
                                                                " ",
                                                                formatTime(appointment.endTime)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 370,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 368,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: appointment.status === "COMPLETED" ? "bg-emerald-900/20 border-emerald-900/30 text-emerald-400" : appointment.status === "CANCELLED" ? "bg-red-900/20 border-red-900/30 text-red-400" : "bg-amber-900/20 border-amber-900/30 text-amber-400",
                                            children: appointment.status
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this),
                                appointment.patientDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: userRole === "DOCTOR" ? "Patient Description" : "Your Description"
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-md bg-muted/20 border border-emerald-900/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white whitespace-pre-line",
                                                children: appointment.patientDescription
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 406,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this),
                                appointment.status === "SCHEDULED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Video Consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "w-full bg-emerald-600 hover:bg-emerald-700",
                                            disabled: !isAppointmentActive() || action === "video" || tokenLoading,
                                            onClick: handleJoinVideoCall,
                                            children: tokenLoading || action === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "mr-2 h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 428,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Preparing Video Call..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 433,
                                                        columnNumber: 23
                                                    }, this),
                                                    isAppointmentActive() ? "Join Video Call" : "Video call will be available 30 minutes before appointment"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Doctor Notes"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 446,
                                                    columnNumber: 17
                                                }, this),
                                                userRole === "DOCTOR" && action !== "notes" && appointment.status !== "CANCELLED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    onClick: ()=>setAction("notes"),
                                                    className: "h-7 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                            className: "h-3.5 w-3.5 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 458,
                                                            columnNumber: 23
                                                        }, this),
                                                        appointment.notes ? "Edit" : "Add"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 452,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 445,
                                            columnNumber: 15
                                        }, this),
                                        userRole === "DOCTOR" && action === "notes" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    value: notes,
                                                    onChange: (e)=>setNotes(e.target.value),
                                                    placeholder: "Enter your clinical notes here...",
                                                    className: "bg-background border-emerald-900/20 min-h-[100px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 466,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: ()=>{
                                                                setAction(null);
                                                                setNotes(appointment.notes || "");
                                                            },
                                                            disabled: notesLoading,
                                                            className: "border-emerald-900/30",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 473,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "sm",
                                                            onClick: handleSaveNotes,
                                                            disabled: notesLoading,
                                                            className: "bg-emerald-600 hover:bg-emerald-700",
                                                            children: notesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "mr-2 h-3.5 w-3.5 animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/appointment-card.jsx",
                                                                        lineNumber: 494,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Saving..."
                                                                ]
                                                            }, void 0, true) : "Save Notes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 486,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 472,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-md bg-muted/20 border border-emerald-900/20 min-h-[80px]",
                                            children: appointment.notes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white whitespace-pre-line",
                                                children: appointment.notes
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 506,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground italic",
                                                children: "No notes added yet"
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 510,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 504,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/appointment-card.jsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        canMarkCompleted() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleMarkCompleted,
                                            disabled: completeLoading,
                                            className: "bg-emerald-600 hover:bg-emerald-700",
                                            children: completeLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "mr-2 h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 530,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Completing..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 535,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Mark Complete"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 523,
                                            columnNumber: 17
                                        }, this),
                                        appointment.status === "SCHEDULED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: handleCancelAppointment,
                                            disabled: cancelLoading,
                                            className: "border-red-900/30 text-red-400 hover:bg-red-900/10 mt-3 sm:mt-0",
                                            children: cancelLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "mr-2 h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 552,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Cancelling..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 557,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Cancel Appointment"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 544,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setOpen(false),
                                    className: "bg-emerald-600 hover:bg-emerald-700",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 565,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/appointment-card.jsx",
                            lineNumber: 519,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/appointment-card.jsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/appointment-card.jsx",
                lineNumber: 313,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AppointmentCard, "SgXV9YWdOCeDvgxuj7Soga1pJno=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = AppointmentCard;
var _c;
__turbopack_context__.k.register(_c, "AppointmentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_445302a2._.js.map