import { CloseButton } from "../../CloseButton";

import imagemUrl from "../../../assets/success.svg"

interface FeedbackSuccessStepPorps{
  onFeedbackRestarRequested: ()=> void;
}

export function FeedbackSuccessStep({onFeedbackRestarRequested}: FeedbackSuccessStepPorps){
  return(
    <>
      <header>
        <CloseButton/>
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
      <img src={imagemUrl} alt="" />

      <span className="text-xl mt-2" > Agradecemos o feedback </span>

      <button 
      type="button"
      onClick={onFeedbackRestarRequested}
      className="py-2 px-6 mt-6 bg-zinc-800 border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500">
        Quero enviar outro
      </button>
     
      </div>
    </>
    )
}