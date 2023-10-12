interface IToogleModal {
  onToggleModal: boolean;
  onSetToggleModal: () => void
}

export function Modal({onSetToggleModal, onToggleModal}: IToogleModal) {
  return (
    <div className={`w-full h-full bg-black bg-opacity-25 absolute  justify-center items-center p-6 text-center ${onToggleModal ? "flex animate-modal-slow" : "hidden"}`}>
        <div className=" w-full px-6 pt-10 pb-6 bg-BaseGray700 rounded-lg">
          <p className=" text-titleS text-BaseGray200 font-nunito">Deseja realmente excluir o registro da refeição?</p>
          <div className="flex gap-2 mt-8">
          <button onClick={onSetToggleModal} className=" active-outline-button w-full">Cancelar</button>
          <button className=" active-solid-button w-full">Sim, excluir</button>
          </div>
        </div>
      </div>
  );
}
