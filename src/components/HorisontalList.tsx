import MoreButton from "../ui/MoreButton";

function HorisontalList({gap, cardType}: {gap: string, cardType?: string}) {

    return (
        <div className={`flex gap-[${gap}] items-center`}>
            <ul className={`flex gap-[${gap}]`}></ul>
            <MoreButton />
        </div>
    );
}

export default HorisontalList;