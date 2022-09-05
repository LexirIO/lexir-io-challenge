import Image from "next/image";

import NoseIcon from "../public/assets/nose.svg";
import TongueIcon from "../public/assets/tongue.svg";
import BulletPoint from "../public/assets/bullet-point.svg";
import Dash from "../public/assets/dash.svg";
import BoldDash from "../public/assets/dash-bold.svg";

interface Props {
  intensity: number;
  smell: string;
  taste: string;
  use: string;
  useIcons: string;
}

const noteRowClasses = "my-[30px] flex";
const headingClasses = "font-bold leading-5";

function TastingNotes({ intensity, smell, taste, use, useIcons }: Props) {
  // Pre render the aroma and taste notes
  function renderNotes(notes: string) {
    const parsed = notes.split(",");
    const rendered = parsed.map((text, i) => {
      const isFirst = i === 0;
      const isLast = i === parsed.length - 1;

      return (
        <div
          key={i}
          className={`${isFirst && "ml-8"} uppercase flex items-center `}
        >
          <p className={`${!isLast ? "mx-2" : "ml-2"}`}>{text}</p>
          {!isLast && <Image src={BulletPoint} height={4} width={4} />}
        </div>
      );
    });
    return rendered;
  }

  // Pre render the intensity bar
  function renderIntensity(intesity: number) {
    const rendered = [];
    for (let i = 0; i < 5; i++) {
      rendered.push(
        <div key={i} className="flex mr-0.5">
          {i < intensity ? (
            <Image src={BoldDash} width={72} height={5} />
          ) : (
            <Image src={Dash} width={72} height={5} />
          )}
        </div>
      );
    }
    return rendered;
  }

  // Pre render the suggested use
  function renderedSuggestedUse(use: string, useIcons: string) {
    const useArr = use.split(",");
    const useIconsArr = useIcons.split(",");

    const rendered = useArr.map((text, i) => {
      return (
        <div
          key={i}
          className="w-[103px] h-[32px] bg-secondary flex items-center justify-center mr-2 rounded"
        >
          <p className="text-xs mr-2.5">{text}</p>
          <Image
            src={require(`../public/assets/${useIconsArr[i]}.svg`)}
            height={12}
            width={12}
          />
        </div>
      );
    });

    return rendered;
  }

  return (
    <div className="w-fit">
      <h5 className={headingClasses}>Tasting Notes</h5>
      {/* Aroma */}
      <div className={noteRowClasses}>
        <Image src={NoseIcon} width={21} height={26} />
        <div className="flex">{renderNotes(smell)}</div>
      </div>
      {/* Taste */}
      <div className={noteRowClasses}>
        <Image src={TongueIcon} width={21} height={21} />
        <div className="flex">{renderNotes(taste)}</div>
      </div>
      {/* Intensity bar */}
      <p className={`${headingClasses} mb-[15px]`}>Flavour Intensity</p>
      <div className="flex">{renderIntensity(intensity)}</div>
      {/* Suggested use */}
      <p className={`${headingClasses} my-[30px] `}>Suggested Use</p>
      <div className="flex">{renderedSuggestedUse(use, useIcons)}</div>
    </div>
  );
}

export default TastingNotes;
