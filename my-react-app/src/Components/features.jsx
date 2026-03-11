

import{useState,useEffect,useRef} from 'react'
function Features(){
    return(
        <div className="features">
            <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontFamily: "'Georgia', serif", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-2.5px", margin: "0 0 28px", background: "linear-gradient(90deg, #ff3b3b 0%, #ff8c00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s" }}>
         Features
        </h1>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.45)", maxWidth: 460, lineHeight: 1.7, margin: "0 0 40px", fontFamily: "'Georgia', serif", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s" }}>
         EveryThing you need To breakFree
        </p>

        </div>
    )
}
