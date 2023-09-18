import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--my-brand": "#F7ABOA",
    "--my-red": "#db4437",
    "--my-yellow": "f4b00",
    "--my-green": "#0f9d58",
}

export const myTheme = buildLegacyTheme({
    "--black": props["--my-black"],
    "--white": props["--my-white"],
})