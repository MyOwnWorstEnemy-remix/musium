import MoreButton from "../ui/MoreButton";

function VerticalList({gap}: {gap: string}) {

    return (
        <div className={`flex gap-[${gap}] flex-col items-center w-full`}>
            <ul className={`flex gap-[${gap}]`}></ul>
            <MoreButton isRound={false} />
        </div>
    );
}

export default VerticalList;