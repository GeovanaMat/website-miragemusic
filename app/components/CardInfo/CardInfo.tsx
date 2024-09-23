
export function CardInfo({dadoNumerico, titulo}:{dadoNumerico: number, titulo: string}){
    return(
        <div className="flex flex-col  bg-gradient-to-b from-indigo-700/75 to-blue-500/0 space-y-3 rounded-lg items-center p-[2.5rem] leading-[2rem] p-[1.5rem]">
            <span className="text-[4rem] mt-3">{dadoNumerico}M</span>
            <span>{titulo}</span>
        </div>
    )
}