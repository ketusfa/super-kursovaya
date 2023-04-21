import s from "../modals.module.scss"

const CreateType = ({setModal, modal}) => {
    return(
            <div className={`${s.overlay} ${modal ? s.show : "" }`}> 
            <div className={s.modal__wrapper}>
                
                <h1>CreateType</h1>
                <button className={s.modal__close} onClick={() => setModal(false)}>close</button>
                
                <form action="" className={s.modal__form}>
                    <input type="text" placeholder="1"/>
                    <input type="text" placeholder="2 "/>
                    <button>es</button>
                </form>
            </div>
        </div>
    )

}

export default CreateType