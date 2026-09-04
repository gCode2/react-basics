import type { PotionProps } from "../../../../types/PotionStorage/types";

function Potion({potion}: PotionProps){
    return (
        <>
            <div className="potionCard">
                <div>
                    {potion.name}
                </div>
                <div>
                    type: {potion.type}
                </div>
                <div>
                    quantity: {potion.quantity}
                </div>
                <div>
                    {potion.note}
                </div>
                <div className="itemControls">
                    <div>
                        <button>
                            Drink
                        </button>
                    </div>
                    <div>
                        <button>
                            Discard
                        </button>
                    </div>
                </div>
                <div className="itemID">
                    #{potion.id}
                </div>
            </div>
        </>
    )
}

export default Potion;