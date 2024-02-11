"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Tas segura?",
      "Pero de veda veda?",
      "Almenos metele cabeza",
      "Ojo que yo si me aburro",
      "Deja la mrkda estas segura?",
      "Despues no andes llorando",
      "Te dare chance de pensarlo bien",
      "Tu eres como terquita veda?",
      "Yo si puedo trabajar y mantenerte",
      "Despues porque me voy con otra",
      "Yo no se que carajos te veo",
      "Mua",
      "Quieres tener perros o gatos?",
      "Yo te cambiare por una zorra",
      "Ya no te hare el desayuno",
      "Si lo piensas bien saldria bonitos los pelaos",
      "Si sabes hacer aseo verdad?",
      "A mi no me gusta la gente inutil",
      "Por tener 4 o 2 grandes razones no te vas a salvar del aseo",
      "Ultimantente creen que porque uno ta tragao las mantendra facil",
      "O trabajamos los dos y nos abrimos rapido del pais maluco este",
      "Yo si se la de querer bonito",
      "No te estrellare el cel muy duro",
      "T amo"

    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://i.pinimg.com/736x/a7/33/58/a73358368ccdada45046370bc1cc2322.jpg" />
        <div className="text-4xl font-bold my-4">Pero viste que si querias</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://i.pinimg.com/564x/0c/02/d5/0c02d5398bf3b4e2d5f503ff6df49530.jpg" />
          <h1 className="text-4xl my-4">Serias mi culona para San Valentin?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Ci
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
