import HorisontalList from "./HorisontalList";
import VerticalList from "./VerticalList";

function SectionWithList({title, listType, gap, cardType}: {title: string, listType: "horizontal" | "vertical", gap: string, cardType?: string}) {
    const titleParts = ['', ''];
    const lastSpaceIndex = title.lastIndexOf(' ');
    titleParts[0] = title.substring(0, lastSpaceIndex);
    titleParts[1] = title.substring(lastSpaceIndex + 1);

    return (
        <section className="pl-16 pt-20">
            <h2 className="text-white font-bold text-4xl mb-3.5">
                {titleParts[0]}&nbsp;
                <span className="text-[#EE10B0]">
                    {titleParts[1]}
                </span>
            </h2>
            {listType === 'horizontal' ? 
                <HorisontalList gap={gap} cardType={cardType} /> : null
            }
            {listType === 'vertical' ? 
                <VerticalList gap={gap} /> : null
            }
        </section>
    );
}

export default SectionWithList;