import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: colors.indigo,
                secondary: {
                    100: "#cfd1d4",
                    200: "#a0a3a9",
                    300: "#70747d",
                    400: "#414652",
                    500: "#111827",
                    600: "#0e131f",
                    700: "#0a0e17",
                    800: "#070a10",
                    900: "#030508"
                },
            }
        },
    },
    variants: {
        extends: {
            opacity: ['disabled'],
            scale: ['active']
        }
    },

    plugins: [forms, typography],
};
