import { defineSlotRecipe } from "@chakra-ui/react"

export const collapsibleSlotRecipe = defineSlotRecipe({
  slots: ["root", "trigger", "content", "indicator"],
  className: "chakra-collapsible",
  base: {
    content: {
      overflow: "hidden",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "moderate",
        "&[data-has-collapsed-size]": {
          animationName: "expand-height",
        },
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "moderate",
        "&[data-has-collapsed-size]": {
          animationName: "collapse-height",
        },
      },
    },
  },
})
