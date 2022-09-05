# Solution By Onyekwere Precious

## Table of contents

- [Decisions](#decisions)
  - [Folder Restructuring](#folder-restructuring)
  - [Use of Dummy Data Variable](#dummy-data-variable)
  - [TailwindCSS config](#tailwindcss-config)
  - [Use of Max Width](#max-width-utilization)

## Decisions

### Folder Restructuring

Moving the Public folder back to the root;
According to [NextJs documentation](https://nextjs.org/docs/advanced-features/src-directory) the public folder will not work correctly being placed inside the src folder.

### Dummy Data variable

I made use of a dummy data object variable in the src/pages/index.tsx line 73 as a way to replicate the event that the data will be provided by an API, this decision was mainly to get the Quantity Incrementer component to work in a way that seemed like the data was provided externally and not statically typed.

### TailwindCSS config

I chose to use only colors and font-family theme used in the Figma designs rather than extending the existing colors and font, this was to make streamlining the themes so only the required colors and fonts will be available.
It also made development easier since with the help of my IDE extension I could easily find and select the appropriate values.

### Max Width Utilization

Even though this was not a requirement, I have found it important to use as opposed to not using a max width for the entirely of my page. This is to allow the view to look optimal even in a larger screen size, so images and divs are not overgrow contrary to the intended design.
