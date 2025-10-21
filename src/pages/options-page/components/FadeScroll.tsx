import { ScrollArea } from "@chakra-ui/react"


export default function FadeScroll({ children, ...props } : React.PropsWithChildren<ScrollArea.RootProps>){

    return (
        <ScrollArea.Root {...props}>
      <ScrollArea.Viewport
        css={{
          "--scroll-shadow-size": "4rem",
          maskImage:
            "linear-gradient(#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent)",
          "&[data-at-top]": {
            maskImage:
              "linear-gradient(180deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
          },
          "&[data-at-bottom]": {
            maskImage:
              "linear-gradient(0deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
          },
        }}
      >
        <ScrollArea.Content>
            {children}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
    )
}