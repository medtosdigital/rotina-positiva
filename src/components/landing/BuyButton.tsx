"use client";

import { useState, useEffect } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

const BuyButton = (props: ButtonProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        // Renderiza um placeholder no servidor para evitar mudança de layout
        return <div className="h-[96px] sm:h-[112px] w-full max-w-md mx-auto" />;
    }

    return (
        <a href="https://pay.kiwify.com.br/KSInQjA" target="_blank" rel="noopener noreferrer">
            <Button {...props} size="lg" />
        </a>
    )
}

export { BuyButton };
