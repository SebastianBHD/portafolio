import { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

function FlipCard({ icon: Icon, title, backContent }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const { t } = useTranslation();

    return (
        <div 
            className="aspect-square cursor-pointer w-full max-w-[180px] md:max-w-none mx-auto"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="relative w-full h-full perspective-1000">
                <motion.div
                    className="relative w-full h-full preserve-3d"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div className="absolute inset-0 backface-hidden rounded-xl border-2 border-white/20 backdrop-blur-sm flex flex-col items-center justify-center gap-2 md:gap-3 p-2 md:p-4">
                        <Icon className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
                        <span className="text-xs md:text-lg lg:text-xl text-tertiary font-light text-center cursor-default">{title}</span>
                        <div className="absolute bottom-1 md:bottom-3 flex items-center gap-1 text-tertiary/60">
                            <RotateCw className="w-2 h-2 md:w-4 md:h-4 animate-spin-slow" />
                            <span className="text-[10px] md:text-sm font-light cursor-default">Hover or click</span>
                        </div>
                    </div>
                    <div 
                        className="absolute inset-0 backface-hidden rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center p-2 md:p-4"
                        style={{ transform: 'rotateY(180deg)' }}
                    >
                        <div className="text-xs md:text-base lg:text-lg text-tertiary font-light text-center leading-relaxed cursor-default">
                            {backContent}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default FlipCard;

