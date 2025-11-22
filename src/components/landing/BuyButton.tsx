"use client";

import { useState, useEffect } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

interface BuyButtonProps extends ButtonProps {
    href: string;
    children: React.ReactNode;
}

const BuyButton = ({ href, children, ...props }: BuyButtonProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        // Renderiza um placeholder no servidor para evitar mudança de layout
        // A altura precisa corresponder ao botão que será renderizado no cliente.
        // Usei valores genéricos que devem funcionar para a maioria dos botões.
        return <div className="h-[96px] sm:h-[112px] w-full max-w-lg mx-auto" />;
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer prefetch" className="w-full flex justify-center">
            <Button {...props}>
                {children}
            </Button>
        </a>
    );
}

export { BuyButton };
