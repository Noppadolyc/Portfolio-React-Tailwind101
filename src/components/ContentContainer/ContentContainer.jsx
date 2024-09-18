import { useEffect, useState } from "react";
import FormattedDate from "../../components/FormattedDate/FormatDate";
import Picture from "../../components/Pictures/Picture";
import TitleLink from "../../components/TitleLink/TitleLink";
import Material from "../../components/Material/Material";
import Description from "../../components/Description/Description";
import Tech from "../../components/Tech/Tech";


const ContentContainer = ({
    onInitial,
    title: sectionTitle = "",
    data =[],
    
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID =`${sectionTitle}-section`;

  useEffect(()=>{
        onInitial(SECTION_ID);
  },[])

    return (
      <div id={SECTION_ID} className="scroll-m-14">
        <div className="text-primaryAccent font-medium px-2">
            {sectionTitle}
            </div>
        {
          data.map(({
            date="",
            title="",
            link="",
            materials=[],
            descriptions=[],
            skills=[],
            picture="",
          }, index) => (
            <div
              key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
              className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryBase" : ""}`}
              onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
              onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
            > 
              <div>
                <FormattedDate isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]}>
                  {date}
                </FormattedDate>
                <Picture picture={picture} title={title} />
              </div>
              <div className="grid gap-y-4">
                <TitleLink isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
              {    materials.length > 0 ?
                <div className="flex gap-4 text-xl item-center">               
                  {
                    materials.map((e, i) => (
                      <Material key={`${e}-materials-${i}`} isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} icon={e.type} link={e.link} />
                    ))
                  }
                </div> : null
                }
              
                {
                  descriptions.map((e, i) => (
                    <Description key={`${e}-description-${i}`} description={e} />
                  ))
                }
                {
                  skills.map((e, i) => (
                    <Tech key={`${e}-skill-${i}`} isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    );
}

export default ContentContainer;
