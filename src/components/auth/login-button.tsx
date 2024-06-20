"use client"

interface LoginButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: Boolean;
}

export const LogginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
    const onClick = () => {
        
    }
}