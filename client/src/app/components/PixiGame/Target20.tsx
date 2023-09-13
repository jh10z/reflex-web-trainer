"use client"

import React, { useEffect, useRef } from "react"
import * as PIXI from "pixi.js"

function Target20() {
    const pixiContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Setup
        if (pixiContainer.current == null) return;
        
        const app = new PIXI.Application<HTMLCanvasElement>({
            width: 800, 
            height: 600,
            backgroundColor: 0x1099bb,
        });

        pixiContainer.current.appendChild(app.view);

        // Game Content
        app.start();

        // Cleanup on FC unmount
        return () => {
            app.destroy(true);
        };

    }, []);

    return (
        <div ref={(element) => (pixiContainer.current = element)}></div>
    );
}

export default Target20;