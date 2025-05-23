import React from "react";

function Initial() {
    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center h-screen w-full border-2 border-[#373E4A] text-[#F5AF14] p-4">
            <img 
                src="https://5jbovy51rf3hwtmp.public.blob.vercel-storage.com/images/1-EWuOniCrpiEcOPuVWI1KRIcecTrCYm.jpg" 
                alt="Júnior Pimenta" 
                className="h-48 w-48 md:h-60 md:w-60 rounded-full border-2 border-s-[#F5AF14] shadow-lg shadow-blue-900/50 border-[#373F50] object-cover" 
            />
            <div className="flex flex-col justify-center items-center max-w-md text-center gap-2">
                <h1 className="font-bold text-2xl md:text-3xl pb-3 text-white">Olá, eu sou Júnior Pimenta!</h1>
                <p className="text-base md:text-lg font-extralight">Criador da metodologia FIRE, que integra finanças e inteligência emocional com formações em Coaching, PNL e outras áreas.</p>
                <p className="text-base md:text-lg font-extralight">Ajudo meus mentorados a reprogramarem suas mentes para conquistar prosperidade.</p>
                <p className="text-base md:text-lg font-extralight">Desde 2022, por meio do Workshop Sistêmico do Dinheiro e do programa Rota da Prosperidade, tenho impactado milhares de pessoas, demonstrando que a transformação começa na mentalidade.</p>
            </div>
        </div>
    );
}

export default Initial;