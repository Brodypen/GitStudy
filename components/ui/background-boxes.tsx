"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
const rows = new Array(150).fill(1);
const cols = new Array(100).fill(1);
const [selectedCells, setSelectedCells] = useState<{ row: number; col: number; }[]>([]);

useEffect(() => {
    const selected: { row: number; col: number; }[] = [];
    const row = 17;
    const col = 20;
    const row2 = 13;
    const col2 = 10;
    const row3 = 20;
    const col3 = 15;
    selected.push({ row, col }, { row: row2, col: col2 }, { row: row3, col: col3 });
    setSelectedCells(selected);
}, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-radial from-#19181C to-#161518">
      <div
        style={{
          transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        }}
        className={cn(
          "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
          className
        )}
        {...rest}
      >
        {rows.map((_, i) => (
          <motion.div
            key={`row` + i}
            className="w-32 h-16  border-l  border-slate-700 relative"
          >
            {cols.map((_, j) => (
              <motion.div
              animate={{
                backgroundColor: selectedCells.some(cell => cell.row === i && cell.col === j) ? '#00FFC5' : '',
                boxShadow: selectedCells.some(cell => cell.row === i && cell.col === j) ? '0 0 20px #00FFC5, 0 0 30px #00FFC5, 0 0 40px #00FFC5, 0 0 50px #00FFC5, 0 0 60px #00FFC5' : '',
                border: selectedCells.some(cell => cell.row === i && cell.col === j) ? 'none' : '',
                transition: { duration: 2 },
              }}
                key={`col` + j}
                className="w-32 h-16  border-r border-t border-slate-700 relative opacity-70"
              >
                {j % 2 === 0 && i % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);