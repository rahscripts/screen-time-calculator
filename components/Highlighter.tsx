type HighProps = {
    rotate: number;
    children: string; 
}

export default function Highlighter({rotate=0, children} : HighProps) {
    return (
        <span>
            <span className="relative inline-block px-2">
              <span className={`absolute inset-0 bg-green-200 -rotate-${rotate} shadow-md`}> </span>
                      <span className="relative">
                           {children}
                     </span>
            </span>
        </span>
    )
}