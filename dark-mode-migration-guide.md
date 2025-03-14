# ChakraUI Dark Mode Migration Guide

This guide will help you update your components from the deprecated `useColorModeValue` approach to the newer approach using `useColorMode`.

## Summary of Changes Made

1. Updated `theme.js` to include proper color mode configuration
2. Added `ColorModeScript` to `_app.js` for persisting color mode
3. Updated several components to use the new approach:
   - Pages/work.js
   - components/Navbar.js
   - components/Project.js

## How to Update Other Components

For all other components that use `useColorModeValue`, follow these steps:

1. Replace import statements:
   ```jsx
   // From:
   import { useColorModeValue } from "@chakra-ui/color-mode";
   // To:
   import { useColorMode } from "@chakra-ui/react";
   ```

   Or if importing from @chakra-ui/react directly:
   ```jsx
   // From:
   import { useColorModeValue, ... } from "@chakra-ui/react";
   // To:
   import { useColorMode, ... } from "@chakra-ui/react";
   ```

2. Replace the color value assignments:
   ```jsx
   // From:
   const border = useColorModeValue("gray.300", "gray.600");
   const textColor = useColorModeValue("gray.600", "gray.400");
   
   // To:
   const { colorMode } = useColorMode();
   const border = colorMode === "dark" ? "gray.600" : "gray.300";
   const textColor = colorMode === "dark" ? "gray.400" : "gray.600";
   ```

3. If you're using the color mode toggle button, update it to show the appropriate icon:
   ```jsx
   // From:
   <Button onClick={toggleColorMode}>
     <SunIcon />
   </Button>
   
   // To:
   <Button onClick={toggleColorMode}>
     {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
   </Button>
   ```

## Components That Need Updating

Based on a search of the codebase, the following components still need to be updated:

1. components/Footer.js
2. components/ContactForm.js
3. components/Certifications.js
4. components/Certification.js
5. components/Skills.js
6. components/Technology.js
7. components/AboutMe.js
8. components/Posts.js
9. components/VinylRecord.js
10. components/Service.js
11. components/Hobbies.js
12. pages/certifications.js
13. pages/contact.js
14. pages/project/[slug].js
15. pages/index.js

## Benefits of the New Approach

1. Cleaner code with less imports
2. More consistent with React patterns (using state)
3. More flexible for complex conditional rendering based on color mode
4. Easier to maintain and understand

## Troubleshooting

If you encounter any issues:
- Make sure the ColorModeScript is properly added to _app.js
- Verify the theme config is correctly set up in theme.js
- Check for any residual useColorModeValue instances that might be causing conflicts 